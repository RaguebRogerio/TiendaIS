import NavBar from "../../Componentes/NavBar"
import Container from "../../Componentes/Container/Container"
import { useState } from "react"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DropDown from "../../Componentes/Select/Select";

const AgregarStock = ()=>{
    //Producto
    const [codigoProducto, setCodigoProducto] = useState()
    const [descripcion, setDescripcion] = useState()
    const [talle, setTalle] = useState()
    const [color, setColor] = useState()
    const [sucursal, setSucursal] = useState()
    const [cantidad, setCantidad] = useState()
    //talles
    const talles = [
        'S',
        'X',
        'XL'
    ]
    //Colores
    const colores = [
        'rojo',
        'azul',
        'gris',
        'naranja'
    ]
    //Sucursales
    const sucursales = [
        'Lavalle 500',
        'Congreso 261',
        'Av. Mitre 1120'
    ]
    //Funcion para agregar Stock
    const AgregarStockInventario = ()=>{
        console.log("Agrego Stock")
    }
    return(
        <div>
            <NavBar></NavBar>
            <Container>
            <h1>Agregar Stock</h1>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1 },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField fullWidth  label="Codigo de producto" id="codigo" value={codigoProducto} onChange={e=>{setCodigoProducto(e.targetvalue)}}/>
                <TextField variant="filled" disabled fullWidth label="Descripcion" id="descripcion" value={descripcion} onChange={e=>{setDescripcion(e.target.value)}}/>
                <div style={{textAlign:'center'}}>

                    <DropDown
                                width="90%"
                                label="Talles"
                                labelId="Talles"
                                id="TallesId"
                                items={talles}
                                value={talle}
                                set={setTalle}
                    />
                    <div  style={{marginTop:"20px"}}>
                        <DropDown
                                    width="90%"
                                    label="Colores"
                                    labelId="ColoresId"
                                    id="ColoresId"
                                    items={colores}
                                    value={color}
                                    set={setColor}
                        />
                    </div>

                    <div style={{marginTop:"20px"}}>
                        <DropDown
                                    width="90%"
                                    label="Sucursales"
                                    labelId="sucursalesLabel"
                                    id="sucursalesId"
                                    items={sucursales}
                                    value={sucursal}
                                    set={setSucursal}
                        />  
                    </div>
                    
                </div>
                <TextField fullWidth  label="Cantidad" id="codigo" value={cantidad} onChange={e=>{setCantidad(e.targetvalue)}}/>
                <Button fullWidth size="large" variant="contained" onClick={()=>{AgregarStockInventario()}}>Agregar Stock</Button>
            </Box>
                   
            </Container>
        </div>
    )
}
export default AgregarStock