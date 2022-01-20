import React, { useState, useEffect } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import backgroundImage from './../../imagenes/imagen-fondo-tienda.jpg'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import  Box  from '@mui/material/Box';
import './Logueo.css'
import { rootPath } from '../../App';
const Logueo = ()=>{
    const [usuario, setUsuario] = useState("")
    const [pass, setPassword] = useState("")

    let history = useHistory()
    const ingresar = ()=>{
        console.log(usuario, pass)
        //Llamar a la api
        history.push(rootPath+"/inicio");
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
                        label="Usuario" 
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
            </Box>
        </div>
    )
}
export default Logueo