
import NavBar from "../../Componentes/NavBar"
import Tabla from "../../Componentes/Tabla/Tabla"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import Container from "../../Componentes/Container/Container"
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
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
    //MODAL
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false)
    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 400,
        bgcolor: "background.paper",
        border: "2px solid #000",
        boxShadow: 24,
        p: 4
      };
    return(
        <Container>
            <div>
                <NavBar></NavBar>
                <h1 style={{margin: "0px"}}>Productos</h1>
                <Button variant="contained" onClick={()=>  history.push(rootPath+'/nuevoproducto') } style = {{margin:"0px"}} size="large">Nuevo producto</Button>
                <Tabla rows={rows} headers={headers} actionEliminar={handleOpen}></Tabla>
            </div>

            <Modal
                keepMounted
                open={open}
                onClose={handleClose}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
            >
                <Box sx={style}>
                    <Typography id="keep-mounted-modal-title" variant="h5" component="h2">
                        Eliminar articulo
                    </Typography>
                    <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
                    Esta seguro que desea eliminar el articulo.. ?
                    </Typography>
                    <div style={{display:"flex", justifyContent:"space-between", marginTop:"20px"}}>
                        <Button color="grey" variant="contained" onClick={()=>handleClose()}>Cancelar</Button>
                        <Button color="error" variant="contained" onClick={()=>console.log("Eliminando articulo")}>Eliminar</Button>
                    </div>
                </Box>
            </Modal>
        </Container>
    )
}
export default Productos