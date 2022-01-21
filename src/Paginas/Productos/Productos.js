
import NavBar from "../../Componentes/NavBar"
import Tabla from "../../Componentes/Tabla/Tabla"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import Container from "../../Componentes/Container/Container"
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { rootPath } from "../../App";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react";
import Modal from "../../Componentes/Modal/Modal"
const Productos = ()=>{
    //MODAL
    const [abrirModal, setAbrirModal] = useState(false);
    const handleOpen = () => setAbrirModal(true);
    const headers =[
        {text:"Descripcion", key:"descripcion"},
        {text:"Precio", key:"precio"},
        {text:"Editar", key:"editar" , click:(cod)=> {history.push(rootPath + '/editarproducto/'  + cod )}},
        {text:"Eliminar",key:"eliminar", click:()=>setAbrirModal(true)},
    ]
    const rows = [
        {descripcion: 'Remera Puma1', precio:'$ 200', editar: <EditIcon color="primary"/>, eliminar: <DeleteForeverIcon color="primary"/>},
        {descripcion: 'Remera Puma2', precio:'$ 200', editar: <EditIcon color="primary"/>, eliminar: <DeleteForeverIcon color="primary"/>},
        {descripcion: 'Remera Puma3', precio:'$ 200', editar: <EditIcon color="primary"/>, eliminar: <DeleteForeverIcon color="primary"/>},
        {descripcion: 'Remera Puma4', precio:'$ 200', editar: <EditIcon color="primary"/>, eliminar: <DeleteForeverIcon color="primary"/>},
        {descripcion: 'Remera Puma5', precio:'$ 200', editar: <EditIcon color="primary"/>, eliminar: <DeleteForeverIcon color="primary"/>},
      ];

    let history = useHistory();

    return(
        <Container>
            <div>
                <NavBar></NavBar>
                <h1 style={{margin: "0px"}}>Productos</h1>
                <Button variant="contained" onClick={()=>  history.push(rootPath+'/nuevoproducto') } style = {{margin:"0px"}} size="large">Nuevo producto</Button>
                <Tabla rows={rows} headers={headers} idColumn='descripcion' actionEliminar={handleOpen}></Tabla>
            </div>

            <Modal
                open={abrirModal}
                setOpen={setAbrirModal}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
            >
                    <Typography id="keep-mounted-modal-title" variant="h5" component="h2">
                        Eliminar articulo
                    </Typography>
                    <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
                    Esta seguro que desea eliminar el articulo.. ?
                    </Typography>
                    <div style={{display:"flex", justifyContent:"space-between", marginTop:"20px"}}>
                        <Button color="grey" variant="contained" onClick={()=>setAbrirModal(false)}>Cancelar</Button>
                        <Button color="error" variant="contained" onClick={()=>console.log("Eliminando articulo")}>Eliminar</Button>
                    </div>
            </Modal>
        </Container>
    )
}
export default Productos