import NavBar from "../../Componentes/NavBar"
import Container from "../../Componentes/Container/Container"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import DropDown from "../../Componentes/Select/Select";
import { useState } from "react";
import ModalComponent from "../../Componentes/Modal/Modal";
import { apiPath, rootPath } from "../../App";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Button from '@mui/material/Button';
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import axios from "axios";
const AgregarCaracteristica = ()=>{
    let history = useHistory()
    //TextField
    const [descripcionCaracteristica, setDescripcionCaracteristica] = useState("")
    //DropDown
    const [caracteristica, setCaracteristica]= useState("")
    const caracteristicas = [
        'Color',
        'Marca',
        'Sucursal',
        'Rubro'
    ]
    //Modal
    const [abrirModal, setAbrirModal] = useState(false);
    const [abrirModalError, setAbrirModalError] = useState(false)
    const handleOpen = () => setAbrirModal(true);
    //Funcion crearCarasteristica
    const crearCaracteristica = ()=>{
        const body = {
            descripcion: descripcionCaracteristica
        }
        if(caracteristica === "Color"){
            axios.post(apiPath + "/Colors/CreateColor")
            .then(response=>{
                handleOpen()
            }).catch(err=>{
                if(err){
                    console.log(err)
                    setAbrirModalError(true)
                }
            })
        }else if(caracteristica === "Marca"){
            axios.post(apiPath + "/Marcas/CreateMarca")
            .then(response=>{
                handleOpen()
            }).catch(err=>{
                if(err){
                    console.log(err)
                    setAbrirModalError(true)
                }
            })
        }else if(caracteristica === "Rubro"){
            axios.post(apiPath + "/Rubros/CreateRubros")
            .then(response=>{
                handleOpen()
            }).catch(err=>{
                if(err){
                    console.log(err)
                    setAbrirModalError(true)
                }
            })
        }else{
            axios.post(apiPath + "/Sucursal/CreateSucursal")
            .then(response=>{
                handleOpen()
            }).catch(err=>{
                if(err){
                    console.log(err)
                    setAbrirModalError(true)
                }
            })
        }


    }
    return(
        <Container>
            <NavBar></NavBar>
            <h1>Agregar Caracteristica</h1>
            <hr style={{widt:"100%", color:"gray"}}></hr>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1 },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField fullWidth label="Descripcion" id="descripcion" value={descripcionCaracteristica} onChange={e=>{setDescripcionCaracteristica(e.target.value)}}/>
                <DropDown
                        width="100%"
                        label="Tipo"
                        labelId="tipoLabelId"
                        id="tipoId"
                        items={caracteristicas}
                        value={caracteristica}
                        set={setCaracteristica}
                    />
            </Box>
            <hr style={{widt:"100%", color:"gray", marginTop:"10%"}}></hr>
            <Button fullWidth variant="contained" onClick={()=>{crearCaracteristica()}}>Confirmar</Button>
            <ModalComponent
                open={abrirModal}
                setOpen={setAbrirModal}
            >
                <h1>Caracteristica agregada</h1>
                <Button variant="contained" onClick={()=>{history.push(rootPath + '/inicio')}}>Genial !</Button>
            </ModalComponent>
            <ModalComponent
                open={abrirModalError}
                setOpen={setAbrirModalError}
            >
                <h3>Error al  agregar caracteristica</h3>
                <div style={{textAlign:"center"}}>
                    <NewReleasesIcon style={{width:"100px", height:"100px"}} color="red" size="large"/>
                </div>
                <Button variant="contained" onClick={()=>{setAbrirModalError(false)}}>Entendido</Button>
            </ModalComponent>
        </Container>
    )
}
export default AgregarCaracteristica