import Container from "../../Componentes/Container/Container"
import NavBar from "../../Componentes/NavBar"
import Box from '@mui/material/Box';
import { useEffect, useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Modal from "../../Componentes/Modal/Modal"
import { apiPath, rootPath } from "../../App";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router";
import DropDown from "../../Componentes/Select/Select";
import axios from "axios";

const ClientesModificacion = ()=>{
    let history = useHistory()
    //Input
    const [cuilDni, setCuilDni] = useState("");
    const [razonSocialNombre, setRazonSocialNombre] = useState("");
    const [domicilio, setDomicilio] = useState("");
    const [condicionTributaria, setCondicionTributaria] = useState(4);
    //Modal
    const [abrirModalExito, setAbrirModalExito] = useState(false);
    let { idCliente } = useParams();
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
    useEffect(()=>{
        axios.get(apiPath + "/Clientes/GetClienteById?idCliente="+idCliente)
        .then(response=>{
            setCuilDni(response.data.cliente.cuit)
            setRazonSocialNombre(response.data.cliente.razonSocial)
            setDomicilio(response.data.cliente.domicilio)
            setCondicionTributaria(response.data.cliente.condicionTributaria)
        }).catch(err=>{
            console.log(err)
        })
    },[])
    const modificarCliente = () =>{
        const body = {
            "idCliente": Number(idCliente),
            "cuit":cuilDni,
            "razonSocial": razonSocialNombre,
            "domicilio": domicilio,
            "condicionTributaria": Number(condicionTributaria)
        }
        console.log(body)
        axios.put(apiPath + "/Clientes/UpdateCliente", body)
        .then(response=>{
            setAbrirModalExito(true)
        })
        .catch(err=>{
            console.log(err)
        })
    }
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
            <TextField fullWidth label="Razon Social/Nombre" id="razonSocialNombre" value={razonSocialNombre} onChange={e=>{setRazonSocialNombre(e.target.value)}}/>
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
                <Button style={{marginTop:"50px"}} fullWidth variant="contained" onClick={()=>{modificarCliente()}}>Modificar cliente</Button>
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