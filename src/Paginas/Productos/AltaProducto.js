import Container from "../../Componentes/Container/Container"
import NavBar from "../../Componentes/NavBar"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import DropDown from "../../Componentes/Select/Select";
import Button from '@mui/material/Button';
import Modal from "../../Componentes/Modal/Modal"
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { rootPath } from "../../App";
const AltaProducto  = ()=>{
    let history = useHistory()
    //Input
    const [codigoProducto, setCodigoProducto] = useState("1341345")
    const [netoGravado, setNetoGravado] = useState(123123)
    const [precioVenta, setPrecioDeVenta] = useState(44444)
    const [descripcion, setDescripcion] = useState()
    const [precioUnitario, setPrecioUnitario] = useState()
    const [margenGanacia, setMargenGanancia] = useState()
    //Select
    const [tipoTalle, setTipoTalle] = useState()
    const [marca, setMarca] = useState()
    const [rubro, setRubro] = useState()
    const [iva, setIva] = useState()

    useEffect(()=>{
        console.log(descripcion,precioUnitario,margenGanacia,tipoTalle,marca,rubro,iva)
    },[descripcion,precioUnitario,margenGanacia,tipoTalle,marca,rubro,iva])
    //TiposTalles
    const tiposTalles = [
        'Europeo',
        'Americano'
      ];
 
    const marcas = [
        'Puma',
        'Adidas',
        'Nike'
    ]
    const rubros =[
        'remeras',
        'camisas',
        'chombas',
        'pantalon',
        'remeras',
        'camisas',
        'chombas',
        'pantalon'
    ]
    const ivas = [
        '10%',
        '12%',
        '15%',
        '21%'
    ]
    //Modal
    const [abrirModal, setAbrirModal] = useState(false);
    const handleOpen = () => setAbrirModal(true);
    //Funcion de crear producto
    const crearProducto = ()=>{
        console.log("Crear Producto")
        handleOpen()
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
                <TextField variant="filled" fullWidth  label="Codigo de producto" id="codigo" value={codigoProducto} onChange={e=>{setCodigoProducto(e.targetvalue)}}/>
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
                    <DropDown
                        width="90%"
                        label="Marca"
                        labelId="marca"
                        id="marcaId"
                        items={marcas}
                        value={marca}
                        set={setMarca}
                    />
                    <DropDown
                        width="90%"
                        label="Rubros"
                        labelId="rubros"
                        id="rubrosId"
                        items={rubros}
                        value={rubro}
                        set={setRubro}
                    />
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
                <div style={{textAlign:'center'}}>
                    <Button fullWidth variant="contained" onClick={()=>{crearProducto()}}>Crear producto</Button>
                </div>
            </Box>
            <Modal
            open={abrirModal}
            setOpen={setAbrirModal}
            >
                <h1>Crear producto</h1>
                <Button variant="contained" onClick={()=>{history.push(rootPath +'/producto')}}>Confirmar</Button>
            </Modal>
        </Container>
    )
}
export default AltaProducto