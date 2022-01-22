import React, { useState, useEffect } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import backgroundImage from './../../imagenes/imagen-fondo-tienda.jpg'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import  Box  from '@mui/material/Box';
import './Logueo.css'
import { apiPath, rootPath } from '../../App';
import ModalComponent from '../../Componentes/Modal/Modal';
import axios from 'axios';
const Logueo = ()=>{
    const [usuario, setUsuario] = useState("")
    const [pass, setPassword] = useState("")
    //MODAL COMPLETAR DATOS
    const [abrirModalCompletarDatos, setAbrirModalCompletarDatos] = useState(false);
    const handleOpenModalCompletarDatos = () => setAbrirModalCompletarDatos(true);
    //MODAL USUARIO INEXISTENTE
    const [abrirModalUsuarioInexistente, setAbrirModalUsuarioInexistente] = useState(false);
    const handleOpenModalUsuarioInexistente = () => setAbrirModalUsuarioInexistente(true);
    let history = useHistory()
    const ingresar = ()=>{
        if(usuario === "" || pass === ""){
            handleOpenModalCompletarDatos()
        }else{
            const data = {
                "legajo":Number(usuario),
                "password": pass
            }
            axios.post(apiPath +"/Users/AutenticarUsuario", data)
            .then(response=>{
                if(response.data.estaAutenticado===false){
                    handleOpenModalUsuarioInexistente()
                }else{
                    window.localStorage.setItem('legajo', usuario)
                    window.localStorage.setItem('nombre', response.data.nombre)
                    window.localStorage.setItem('estaAutenticado',response.data.estaAutenticado)
                    window.localStorage.setItem('tipoUsuario',response.data.tipoUsuario )
                    window.localStorage.setItem('id', response.data.id)

                    history.push(rootPath+"/inicio");
                }
            }).catch(error=>{
                if(error){
                    console.log(error)
                }
            })
        }
    }
    const setBackgroundImage = (url)=>{
        document.body.style.backgroundImage = url;
    }
    useEffect(() => {
        setBackgroundImage("url("+backgroundImage+")")
        const listener = event => {
            if (event.code === "Enter" || event.code === "NumpadEnter") {
                ingresar();
                event.preventDefault();
            }
        };
        document.addEventListener("keydown", listener);
        return () => {
          document.removeEventListener("keydown", listener);
          setBackgroundImage("none")
        };        
    }, [usuario, pass]);
    return(
        <div className='LoginForm'>
            <Box component="form" sx={{ p: 2, border: '2px solid grey' }}>
                <form>
                        <h2 style={{textAlign:"center"}}>Iniciar sesión</h2>
                        <TextField 
                        id="outlined-basic" 
                        label="Legajo" 
                        variant="outlined" 
                        onChange={e => setUsuario(e.target.value)} 
                        fullWidth
                        style = {{margin:"10px"}}
                        />
                        <br/>
                        <TextField
                            id="outlined-password-input"
                            label="Contraseña"
                            type="password"
                            autoComplete="current-password"
                            onChange={e => setPassword(e.target.value)}
                            fullWidth 
                            style = {{margin:"10px"}}

                        />
                        <br/>
                    <Button variant="contained" onClick={ingresar} style = {{margin:"10px"}} size="large">Ingresar</Button>
                </form>
                <ModalComponent
                    open={abrirModalCompletarDatos}
                    setOpen={setAbrirModalCompletarDatos}
                >
                    <h1>Debe completar los campos</h1>
                </ModalComponent>
                <ModalComponent
                    open={abrirModalUsuarioInexistente}
                    setOpen={setAbrirModalUsuarioInexistente}
                >
                    <h1>Usuario Inexistente</h1>
                </ModalComponent>
            </Box>
        </div>
    )
}
export default Logueo