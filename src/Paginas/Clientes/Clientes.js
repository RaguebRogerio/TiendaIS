import Container from "../../Componentes/Container/Container"
import NavBar from "../../Componentes/NavBar"
import Tabla from "../../Componentes/Tabla/Tabla"
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";
import { apiPath, rootPath } from "../../App";
import { useState } from "react";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import Modal from "../../Componentes/Modal/Modal"
import Typography from "@mui/material/Typography";

const Clientes = ()=>{
    let history = useHistory();
    const [cuilDniEliminar, setCuilDniEliminar] = useState();
    //Modal
    const [abrirModalEliminar, setAbrirModalEliminar] = useState();
    //Listado de clientes ficticios
    const headers = [
        {text: "Razon Social/Nombre", key:"razonSocialNombre"},
        {text:"CUIL/DNI", key:"cuilDni" },
        {text:"Editar", key:"editar" , click:(cod)=> {history.push(rootPath + '/ClientesModificacion/'  + cod )}},
        {text:"Eliminar",key:"eliminar", click:(cod)=>{setAbrirModalEliminar(true); setCuilDniEliminar(cod)}},
    ]
    const clientes = [
        { razonSocialNombre:"Franco Asfoura", cuilDni: 42121735, editar: <EditIcon color="primary"/>, eliminar: <DeleteForeverIcon color="primary"/> },
        { razonSocialNombre:"Elias Asfoura", cuilDni: 50121732, editar: <EditIcon color="primary"/>, eliminar: <DeleteForeverIcon color="primary"/>},
        { razonSocialNombre:"Facundo Guzman", cuilDni: 11111111, editar: <EditIcon color="primary"/>, eliminar: <DeleteForeverIcon color="primary"/>}
    ]

    return (
        <Container>
            <div>
                <NavBar/>
                <h1 style={{margin: "0px"}}>Clientes</h1>
                <Button variant="contained" onClick={()=>  history.push(rootPath+'/ClientesAlta') } style = {{margin:"0px"}} size="large">Nuevo producto</Button>
                <div style={{marginTop:"20px"}}>
                    <Tabla rows={clientes} headers={headers} idColumn='cuilDni' ></Tabla>
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
                    Esta seguro que desea eliminar el cliente {cuilDniEliminar} ?
                    </Typography>
                    <div style={{display:"flex", justifyContent:"space-between", marginTop:"20px"}}>
                        <Button color="grey" variant="contained" onClick={()=>setAbrirModalEliminar(false)}>Cancelar</Button>
                        <Button color="error" variant="contained" >Eliminar</Button>
                    </div>
            </Modal>
        </Container>
        
    )
}
export default Clientes