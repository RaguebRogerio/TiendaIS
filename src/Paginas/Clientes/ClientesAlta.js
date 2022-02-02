import Container from "../../Componentes/Container/Container"
import NavBar from "../../Componentes/NavBar"
import Box from '@mui/material/Box';
import { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Modal from "../../Componentes/Modal/Modal"
import { rootPath, apiPath } from "../../App";
import DropDown from "../../Componentes/Select/Select";
import { useHistory } from "react-router-dom";
import axios from "axios";
const ClientesAlta = ()=>{
    let history = useHistory()
    //Input
    const [cuilDni, setCuilDni] = useState();
    const [razonSocialNombre, setRazonSocialNombte] = useState();
    const [domicilio, setDomicilio] = useState();
    const [condicionTributaria, setCondicionTributaria] = useState(4);
    //Modal
    const [abrirModalExito, setAbrirModalExito] = useState(false);
    const [abrirModalError, setAbrirModalError] = useState(false);

    const crearCliente = ()=>{
        const body = {
            "cuit": ""+cuilDni,
            "razonSocial": razonSocialNombre,
            "domicilio": domicilio,
            "condicionTributaria": Number(condicionTributaria)
        }
        console.log(body)
        axios.post( apiPath + "/Clientes/CreateCliente", body)
        .then(response=>{
            setAbrirModalExito(true)
            console.log(response.data)
        })
        .catch(err=>{
            if(err){
                console.log(err)
                setAbrirModalError(true)
            }
        })
    }
    //CondicionesTributarias
    const condicionesTributarias = [
        {
            id:0,
            descripcion:"Responsable Inscripto"
        },
        {
            id:1,
            descripcion:"Monotributo"
        },
        {
            id:2,
            descripcion:"Exento"
        },
        {
            id:3,
            descripcion:"No Responsable"
        },
        {
            id:4,
            descripcion:"Consumidor Final"
        },
    ]
    return(
        <Container>
            <NavBar/>
            <h1 style={{margin: "0px"}}>Nuevo Cliente</h1>
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
                <TextField fullWidth label="Domicilio" id="domicilio" value={domicilio} onChange={e=>{setDomicilio(e.target.value)}}/>

                <div style={{textAlign:'center'}}>
                        <DropDown
                            width="90%"
                            label="Tipo de talle"
                            labelId="tipoTalle"
                            id="tipoTalleId"
                            items={condicionesTributarias}
                            value={condicionTributaria}
                            set={setCondicionTributaria}
                        />
                    <Button style={{marginTop:"50px"}} fullWidth variant="contained" onClick={()=>{crearCliente()}}>Agregar cliente</Button>
                </div>
            </Box>
            <Modal
            open={abrirModalExito}
            setOpen={setAbrirModalExito}
            >
                <h1>Cliente creado con exito!</h1>
                <Button  variant="contained" onClick={()=>{history.push(rootPath +'/Clientes')}}>Confirmar</Button>
            </Modal>
            <Modal
            open={abrirModalError}
            setOpen={setAbrirModalError}
            >
                <h1>Error al crear cliente!</h1>
                <Button variant="contained" onClick={()=>{setAbrirModalError(false)}}>Confirmar</Button>
            </Modal>
        </Container>

    )
}
export default ClientesAlta