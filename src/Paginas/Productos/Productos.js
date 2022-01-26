
import NavBar from "../../Componentes/NavBar"
import Tabla from "../../Componentes/Tabla/Tabla"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import Container from "../../Componentes/Container/Container"
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { apiPath, rootPath } from "../../App";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect, useState } from "react";
import Modal from "../../Componentes/Modal/Modal"
import axios from "axios";
const Productos = ()=>{
    //MODAL
    const [abrirModalEliminar, setAbrirModalEliminar] = useState(false);
    const [abrirModalElimacionCorrecta, setAbrirModalEliminacionCorrecta] =useState(false);
    const [abrirModalEliminacionFallida, setAbrirModalEliminacionFallida] = useState(false);
    //Productos
    const [productos, setProductos] = useState([])
    const [codigoArticuloEliminar, setCodigoArticuloEliminar] = useState()
    const headers =[
        {text: "Codigo", key: "codigo"},
        {text:"Descripcion", key:"descripcion"},
        {text:"Precio", key:"precio"},
        {text:"Editar", key:"editar" , click:(cod)=> {history.push(rootPath + '/editarproducto/'  + cod )}},
        {text:"Eliminar",key:"eliminar", click:(cod)=>{setAbrirModalEliminar(true); setCodigoArticuloEliminar(cod)}},
    ]


    let history = useHistory();
    useEffect(()=>{
        axios.get( apiPath + "/Productos/GetProductos",{})
        .then(response=>{
            let productosAux = []
            
            response.data.producto.map((producto)=>(
                productosAux.push({codigo:producto.codigo, descripcion: producto.descripcion, precio: producto.precioVenta, editar: <EditIcon color="primary"/>, eliminar: <DeleteForeverIcon color="primary"/>})
            ))
            setProductos(productosAux)
        })
        .catch(err=>{
            if(err){
                console.log(err)
            }
        })
    },[])
    const eliminarProducto = (codigo)=>{
        const body = {
            "codigoProducto": "" + codigo
        }
        console.log(body)
        axios.delete(apiPath + "/Productos/DeleteProducto", body)
        .then(response=>{
            setAbrirModalEliminacionCorrecta(true)
            console.log(response)
        }).catch(err=>{
            if(err){
                console.log(err)
            }
            setAbrirModalEliminacionFallida(true)
        })
    }
    return(
        <Container>
            <div>
                <NavBar></NavBar>
                <h1 style={{margin: "0px"}}>Productos</h1>
                <Button variant="contained" onClick={()=>  history.push(rootPath+'/nuevoproducto') } style = {{margin:"0px"}} size="large">Nuevo producto</Button>
                <div style={{marginTop:"20px"}}>
                    <Tabla rows={productos} headers={headers} idColumn='codigo' ></Tabla>
                </div>
            </div>

            <Modal
                open={abrirModalEliminar}
                setOpen={setAbrirModalEliminar}
            >
                    <Typography id="keep-mounted-modal-title" variant="h5" component="h2">
                        Eliminar articulo
                    </Typography>
                    <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
                    Esta seguro que desea eliminar el articulo {codigoArticuloEliminar} ?
                    </Typography>
                    <div style={{display:"flex", justifyContent:"space-between", marginTop:"20px"}}>
                        <Button color="grey" variant="contained" onClick={()=>setAbrirModalEliminar(false)}>Cancelar</Button>
                        <Button color="error" variant="contained" onClick={()=>eliminarProducto(codigoArticuloEliminar)}>Eliminar</Button>
                    </div>
            </Modal>
            <Modal
                open={abrirModalElimacionCorrecta}
                setOpen={setAbrirModalEliminacionCorrecta}
            >
                <Typography id="keep-mounted-modal-title" variant="h5" component="h2">
                    Articulo Eliminado con exito
                </Typography>
            </Modal>
            <Modal
                open={abrirModalEliminacionFallida}
                setOpen={setAbrirModalEliminacionFallida}
            >
                <Typography id="keep-mounted-modal-title" variant="h5" component="h2">
                    No se pudo eliminar el articulo
                </Typography>
            </Modal>
        </Container>
    )
}
export default Productos