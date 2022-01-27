import NavBar from "../../Componentes/NavBar"
import Container from "../../Componentes/Container/Container"
import {  useState } from "react"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DropDown from "../../Componentes/Select/Select";
import axios from "axios";
import { apiPath } from "../../App";
import Modal from "../../Componentes/Modal/Modal";
const AgregarStock = ()=>{
    //Producto
    const [codigoProducto, setCodigoProducto] = useState()
    const [descripcion, setDescripcion] = useState("")
    const [talle, setTalle] = useState()
    const [color, setColor] = useState()
    const [sucursal, setSucursal] = useState()
    const [cantidad, setCantidad] = useState()
    
    //DropDowns
    const [talles, setTalles] =useState([])
    const [colores, setColores] = useState([])
    const [sucursales, setSucursales] = useState([])
    //Modal
    const [abrirModalExito, setAbrirModalExito] = useState(false)
   const cargarDropDowns = (tipoTalle)=>{
        console.log(tipoTalle)
        //talles
        axios.get(apiPath + "/Talles/GetTallesByType?tipoTalle="+ tipoTalle, {})
        .then(response=>{
            console.log("talles:", response.data)
            setTalles(response.data.talles)
        })
        .catch(err=>{
            if(err){
                console.log(err)
            }
        })
        //Colores
        axios.get(apiPath + "/Colors/GetColores" ,{})
        .then(response=>{
            setColores(response.data.colores)
            

        })
        .catch(err=>{
            if(err){
                console.log(err)
            }
        })
        //Sucursales
        axios.get(apiPath + "/Sucursal/GetSucusales", {})
        .then(response=>{
            setSucursales(response.data.sucursales)
            

        })
        .catch(err=>{
            if(err){
                console.log(err)
            }
        })
    }
    const buscarProducto = (ev)=>{
            if (ev.key === 'Enter') {
            axios.get(apiPath + "/Productos/GetProductoById?CodigoProducto="+codigoProducto)
            .then(response=>{
            setDescripcion(response.data.producto.descripcion)
            cargarDropDowns(response.data.producto.tipoTalle)
        })
        .catch(err=>{
            if(err){
                console.log(err)
            }
        })
        }
    }
    const AgregarStockInventario = ()=>{
        const body = {
            "idTalle": Number(talle),
            "idColor": Number(color),
            "codigoProducto": "" + codigoProducto,
            "idSucursal": Number(sucursal),
            "cantidad": Number(cantidad)
        }
       axios.post(apiPath + "/Stock/AgregarStock", body)
       .then(response=>{
            console.log(response.data)
            setAbrirModalExito(true)
       })
       .catch(err=>{
           if(err){
               console.log(err)
           }
       })
    }
    return(
        <div>
            <NavBar></NavBar>
            <Container>
            <h1>Agregar Stock</h1>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1 },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField fullWidth  label="Codigo de producto" id="codigo" value={codigoProducto} onChange={e=>{setCodigoProducto(e.target.value)}} onKeyPress={(e)=>buscarProducto(e)}/>
                <TextField variant="filled" disabled fullWidth label="Descripcion" id="descripcion" value={descripcion} onChange={e=>{setDescripcion(e.target.value)}}/>
                <div style={{textAlign:'center'}}>

                    <DropDown
                                width="90%"
                                label="Talles"
                                labelId="Talles"
                                id="TallesId"
                                items={talles}
                                value={talle}
                                set={setTalle}
                    />
                    <div  style={{marginTop:"20px"}}>
                        <DropDown
                                    width="90%"
                                    label="Colores"
                                    labelId="ColoresId"
                                    id="ColoresId"
                                    items={colores}
                                    value={color}
                                    set={setColor}
                        />
                    </div>

                    <div style={{marginTop:"20px"}}>
                        <DropDown
                                    width="90%"
                                    label="Sucursales"
                                    labelId="sucursalesLabel"
                                    id="sucursalesId"
                                    items={sucursales}
                                    value={sucursal}
                                    set={setSucursal}
                        />  
                    </div>
                    
                </div>
                <TextField fullWidth  label="Cantidad" id="codigo" value={cantidad} onChange={e=>{setCantidad(e.target.value)}}/>
                <Button fullWidth size="large" variant="contained" onClick={()=>{AgregarStockInventario()}}>Agregar Stock</Button>
            </Box>
            <Modal
            open={abrirModalExito}
            setOpen={setAbrirModalExito}
            >
                <h1>Stock agregado correctamente</h1>
                <Button variant="contained" onClick={()=>{setAbrirModalExito(false)}}>Confirmar</Button>
            </Modal>
                   
            </Container>
        </div>
    )
}
export default AgregarStock