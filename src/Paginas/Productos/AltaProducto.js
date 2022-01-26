import Container from "../../Componentes/Container/Container"
import NavBar from "../../Componentes/NavBar"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import DropDown from "../../Componentes/Select/Select";
import Button from '@mui/material/Button';
import Modal from "../../Componentes/Modal/Modal"
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { apiPath, rootPath } from "../../App";
import axios from "axios";
const AltaProducto  = ()=>{
    let history = useHistory()
    //Input
    const [codigoProducto, setCodigoProducto] = useState()
    const [netoGravado, setNetoGravado] = useState()
    const [precioVenta, setPrecioDeVenta] = useState()
    const [descripcion, setDescripcion] = useState()
    const [precioUnitario, setPrecioUnitario] = useState()
    const [margenGanacia, setMargenGanancia] = useState()
    const [costoIva, setCostoIva] = useState()
    //Select
    const [tipoTalle, setTipoTalle] = useState()
    const [marca, setMarca] = useState()
    const [rubro, setRubro] = useState()
    const [iva, setIva] = useState(21)
        //TiposTalles
        const tiposTalles = [
            {
              id:1,
              descripcion:'Europeo'
            },
            {
                id: 2,
               descripcion: 'EEUU'
            },
            {
                id:3,
               descripcion: 'Latino'
            }
          ];
        const [marcas, setMarcas] = useState([])
        const [rubros, setRubros] = useState([])
        const ivas = [
            {
                id: 10,
                descripcion: '10%'
            },
            {
                id:12,
                descripcion: '12%'
            },
            {
                id:15,
                descripcion:'15%'
            },
            {
                id:21,
                descripcion: '21%'
            }
        ]
/*     useEffect(()=>{
        console.log(codigoProducto, descripcion,precioUnitario,margenGanacia,tipoTalle,marca,rubro,iva)
    },[descripcion,precioUnitario,margenGanacia,tipoTalle,marca,rubro,iva,codigoProducto]) */
    useEffect(()=>{
        setNetoGravado(0)
        setPrecioDeVenta(0)
        setPrecioUnitario(0)
        setMargenGanancia(0)
        
        //Pongo las marcas en el dropDown de marcas
        axios.get(apiPath+ "/Marcas/GetMarcas", {})
        .then(response =>{
            
            setMarcas(response.data.marcas)
        }).catch(err=>{
            console.log(err)
        })
        //Pongo los rubros en sus dropdowns
        axios.get(apiPath+ "/Rubros/GetRubros", {})
        .then(response =>{

            setRubros(response.data.rubros)
        }).catch(err=>{
            console.log(err)
        })
    },[])

    useEffect(()=>{
        const netoGravadoAux = Number (precioUnitario) + (Number (precioUnitario)* Number(margenGanacia))
        const costoIvaAux =  netoGravadoAux * iva / 100
        const precioVentaAux = netoGravadoAux === 0 ? 0 : netoGravadoAux + costoIvaAux
        setNetoGravado(netoGravadoAux)
        setCostoIva(costoIvaAux)
        setPrecioDeVenta(precioVentaAux)
    },[precioUnitario, iva, margenGanacia])
    //Modal
    const [abrirModal, setAbrirModal] = useState(false);
    const handleOpen = () => setAbrirModal(true);
    //Funcion de crear producto
    const crearProducto = ()=>{
        const body = {
            "codigoProducto": "" + codigoProducto,
            "descripcion": "" + descripcion,
            "costo":Number( precioUnitario),
            "idMarca":  Number(marca),
            "margenGanancia": Number(margenGanacia),
            "idRubro": Number(rubro),
            "iva": Number(iva),
            "tipoTalle": Number(tipoTalle)
        }
        console.log(body)
        axios.post(apiPath + "/Productos/CreateProducto", body)
        .then(response=>{
            console.log(response.data)
            handleOpen()
        })
        .catch(err=>{
            if(err){
                console.log(err)
            }
        })
    }
    return(
        <Container>
            <NavBar></NavBar>
            <h1 style={{margin: "0px"}}>Crear Producto</h1>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1 },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField variant="filled" fullWidth  label="Codigo de producto" id="codigo" value={codigoProducto} onChange={e=>{setCodigoProducto(e.target.value)}}/>
                <TextField fullWidth label="Descripcion" id="descripcion" value={descripcion} onChange={e=>{setDescripcion(e.target.value)}}/>
                <div style={{display:"flex" ,justifyContent:'space-between', width:"100%"}}>
                    <TextField style={{width:"45%"}} label="Precio unitario" id="descripcion" value={precioUnitario} onChange={e=>{setPrecioUnitario(e.target.value)}}/>
                    <TextField style={{width:"45%"}} label="Margen de ganancia" id="descripcion" value={margenGanacia} onChange={e=>{setMargenGanancia(e.target.value)}}/>
                </div>
                <div style={{display:"flex" ,justifyContent:'space-between', width:"100%"}}>
                    <TextField style={{width:"45%"}} disabled  variant="filled" label="Neto gravado" id="NetoGravado" value={netoGravado} />
                    <TextField style={{width:"45%"}} disabled variant="filled" label="Precio de venta" id="precioVenta" value={"$ " +precioVenta} />
                </div>
                <div style={{textAlign:'center'}}>
                    
                        <DropDown
                            width="90%"
                            label="Tipo de talle"
                            labelId="tipoTalle"
                            id="tipoTalleId"
                            items={tiposTalles}
                            value={tipoTalle}
                            set={setTipoTalle}
                        />
                    <div style={{marginTop:"20px"}}>
                        <DropDown
                            width="90%"
                            label="Marca"
                            labelId="marca"
                            id="marcaId"
                            items={marcas}
                            value={marca}
                            set={setMarca}
                        />
                    </div>
                    <div style={{marginTop:"20px"}}>
                        <DropDown
                            width="90%"
                            label="Rubros"
                            labelId="rubros"
                            id="rubrosId"
                            items={rubros}
                            value={rubro}
                            set={setRubro}
                        />
                    </div>
                    <div style={{marginTop:"20px"}}>
                        <DropDown
                            width="90%"
                            label="Iva's"
                            labelId="IVA"
                            id="IVAId"
                            items={ivas}
                            value={iva}
                            set={setIva}
                        />
                    </div>
                </div>
                <div style={{textAlign:'center'}}>
                    <Button fullWidth variant="contained" onClick={()=>{crearProducto()}}>Crear producto</Button>
                </div>
            </Box>
            <Modal
            open={abrirModal}
            setOpen={setAbrirModal}
            >
                <h1>Producto creado con exito!</h1>
                <Button variant="contained" onClick={()=>{history.push(rootPath +'/producto')}}>Confirmar</Button>
            </Modal>
        </Container>
    )
}
export default AltaProducto