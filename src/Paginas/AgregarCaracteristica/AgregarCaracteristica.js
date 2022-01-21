import NavBar from "../../Componentes/NavBar"
import Container from "../../Componentes/Container/Container"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import DropDown from "../../Componentes/Select/Select";
import { useState } from "react";
import ModalComponent from "../../Componentes/Modal/Modal";
import { rootPath } from "../../App";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Button from '@mui/material/Button';

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
    const handleOpen = () => setAbrirModal(true);
    //Funcion crearCarasteristica
    const crearCaracteristica = ()=>{
        handleOpen()

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
        </Container>
    )
}
export default AgregarCaracteristica