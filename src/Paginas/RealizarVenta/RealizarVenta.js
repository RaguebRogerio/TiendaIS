import Container from "../../Componentes/Container/Container"
import NavBar from "../../Componentes/NavBar"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import DropDown from "../../Componentes/Select/Select";
import Tabla from "../../Componentes/Tabla/Tabla"
import { useState } from "react";

const RealizarVenta = ()=>{
    //Producto
    const [codigoProducto, setCodigoProducto] = useState()
    const [descripcion, setDescripcion] = useState()
    const [marca, setMarca] = useState()
    const [precioUnitario, setPrecioUnitario] = useState()
    const [talle, setTalle] = useState()
    const [color, setColor] = useState()
    const [cantidad, setCantidad] = useState()

    //Colores
    const colores = [
        'rojo',
        'azul',
        'amarillo',
        'violeta'
    ]
    //Tabla
    const headers =[
        {text:"Descripcion"},
        {text:"Precio"},
        {text:"Cantidad"},
    ]
    const rows = [
        {descripcion: 'Remera Puma1', precio:'$ 200', cantidad: 1},
        {descripcion: 'Remera Puma2', precio:'$ 200', cantidad: 2},
        {descripcion: 'Remera Puma3', precio:'$ 200', cantidad: 3},
        {descripcion: 'Remera Puma4', precio:'$ 200', cantidad: 4},
        {descripcion: 'Remera Puma5', precio:'$ 200', cantidad: 5}
      ];
    return(
        <Container>
            <NavBar></NavBar>
            <h1>Realizar Venta</h1>
            <div style={{display:"flex"}}>
                <div style={{width:"30%"}}>
                    <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1 },
                    }}
                    noValidate
                    autoComplete="off"
                    >
                        <TextField fullWidth label="Codigo de producto" id="codigo" value={codigoProducto} onChange={e=>{setCodigoProducto(e.target.value)}}/>
                        <TextField variant="filled" fullWidth disabled label="Descripcion" id="descripcion" value={descripcion} />
                        <TextField variant="filled" fullWidth disabled label="Marca" id="marca" value={marca} />
                        <TextField variant="filled" fullWidth disabled label="Talle" id="talle" value={talle} />
                        <TextField variant="filled" fullWidth disabled label="Precio" id="precio" value={precioUnitario} />
                        <DropDown
                        width="100%"
                        label="Color"
                        labelId="tipoTalle"
                        id="tipoTalleId"
                        items={colores}
                        value={color}
                        set={setColor}
                        />
                        <TextField fullWidth label="Cantidad" id="cantidad" value={cantidad} onChange={e=>{setCantidad(e.target.value)}}/>

                        <Button fullWidth variant="contained" onClick={()=>{}}>Agregar</Button>
                    </Box>
                </div>
                <div style={{width:"70%", marginLeft:'40px'}}>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1 },
                    }}
                    noValidate
                    autoComplete="off"
                    >
                        <Tabla rows={rows} headers={headers} ></Tabla>
                        <Button fullWidth variant="contained" >Modificar Producto</Button>
                    </Box>

                </div>
            </div>
        </Container>
    )
}
export default RealizarVenta