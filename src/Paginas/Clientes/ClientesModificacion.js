import Container from "../../Componentes/Container/Container"
import NavBar from "../../Componentes/NavBar"
import Box from '@mui/material/Box';
import { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Modal from "../../Componentes/Modal/Modal"
import { rootPath } from "../../App";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router";

const ClientesModificacion = ()=>{
    let history = useHistory()
    //Input
    const [cuilDni, setCuilDni] = useState();
    const [razonSocialNombre, setRazonSocialNombte] = useState();
    //Modal
    const [abrirModalExito, setAbrirModalExito] = useState(false);
    const modificarCliente = () =>{
        console.log("modificarCliente")
    }
    let { idCliente } = useParams();
    console.log(idCliente)
    return (
        <Container>
        <NavBar/>
        <h1 style={{margin: "0px"}}>Modificar Cliente</h1>
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1 },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField fullWidth  label="Cuil/DNI" id="cuilDni" value={cuilDni} onChange={e=>{setCuilDni(e.target.value)}}/>
            <TextField fullWidth label="Razon Social/Nombre" id="razonSocialNombre" value={razonSocialNombre} onChange={e=>{setRazonSocialNombte(e.target.value)}}/>
            <div style={{textAlign:'center'}}>
                <Button fullWidth variant="contained" onClick={()=>{modificarCliente()}}>Modificar cliente</Button>
            </div>
        </Box>
        <Modal
        open={abrirModalExito}
        setOpen={setAbrirModalExito}
        >
            <h1>Cliente modificado con exito!</h1>
            <Button variant="contained" onClick={()=>{history.push(rootPath +'/Clientes')}}>Confirmar</Button>
        </Modal>
    </Container>

    )
}
export default ClientesModificacion