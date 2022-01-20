
import NavBar from "../../Componentes/NavBar"
import Tabla from "../../Componentes/Tabla/Tabla"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import Container from "../../Componentes/Container/Container"
import Button from '@mui/material/Button';
import Modal from "../../Componentes/Modal/Modal";
import { rootPath } from "../../App";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react";
const Productos = ()=>{
    const headers =[
        {text:"Descripcion"},
        {text:"Precio"},
        {text:"Editar"},
        {text:"Eliminar"},
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
                <Tabla rows={rows} headers={headers}></Tabla>
            </div>
        </Container>
    )
}
export default Productos