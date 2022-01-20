
import NavBar from "../../Componentes/NavBar"
import Tabla from "../../Componentes/Tabla/Tabla"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import Container from "../../Componentes/Container/Container"
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Button from '@mui/material/Button';
import { rootPath } from "../../App";
const Productos = ()=>{
    let history = useHistory();
    const headers =[
        {text:"Descripcion"},
        {text:"Precio"},
        {text:"Editar"},
        {text:"Eliminar"},
    ]
    const rows = [
        {descripcion: 'Remera Puma', precio:'$ 200', editar: <EditIcon color="primary"/>, eliminar: <DeleteForeverIcon color="primary"/>},
        {descripcion: 'Remera Puma', precio:'$ 200', editar: <EditIcon color="primary"/>, eliminar: <DeleteForeverIcon color="primary"/>},
        {descripcion: 'Remera Puma', precio:'$ 200', editar: <EditIcon color="primary"/>, eliminar: <DeleteForeverIcon color="primary"/>},
        {descripcion: 'Remera Puma', precio:'$ 200', editar: <EditIcon color="primary"/>, eliminar: <DeleteForeverIcon color="primary"/>},
        {descripcion: 'Remera Puma', precio:'$ 200', editar: <EditIcon color="primary"/>, eliminar: <DeleteForeverIcon color="primary"/>},
      ];

    return(
        <Container>
            <NavBar></NavBar>
            <h1 style={{margin: "0px"}}>Productos</h1>
            <Button variant="contained" onClick={()=>history.push(rootPath+'/nuevoproducto')} style = {{margin:"0px"}} size="large">Nuevo producto</Button>
            <Tabla rows={rows} headers={headers}></Tabla>
        </Container>
    )
}
export default Productos