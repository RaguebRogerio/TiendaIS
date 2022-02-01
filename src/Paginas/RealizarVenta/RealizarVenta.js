import Container from "../../Componentes/Container/Container"
import NavBar from "../../Componentes/NavBar"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import DropDown from "../../Componentes/Select/Select";
import Tabla from "../../Componentes/Tabla/Tabla"
import { useEffect, useState } from "react";
import Modal from "../../Componentes/Modal/Modal"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Typography from "@mui/material/Typography";
import EditIcon from '@mui/icons-material/Edit';
import axios from "axios";
import { apiPath } from "../../App";const RealizarVenta = ()=>{
    //Producto
    const [codigoProducto, setCodigoProducto] = useState()
    const [descripcion, setDescripcion] = useState("")
    const [marca, setMarca] = useState("")
    const [precioUnitario, setPrecioUnitario] = useState(0)
    const [talle, setTalle] = useState()
    const [talles, setTalles] = useState([])
    const [color, setColor] = useState()
    const [cantidad, setCantidad] = useState()
    //Modales
    const [abrirModalEliminar, setAbrirModalEliminar] = useState(false);
    const [abrirModalPagar, setAbrirModalPagar] = useState()
    const [abrirModalBuscarCliente, setAbrirModalBuscarCliente] = useState()
    //Modal de eliminar
    const [descripcionArticuloSeleccionado, setDescripcionArticuloSeleccionado] = useState()
    //Modal de buscar
    const [inputBuscar, setInputBuscar] =useState()
    //ModalPagar
    const [metodoDePago, setMetodoDePago] = useState()
    const metodosDePago =[
        {id:1 ,descripcion: 'Efectivo'},
        {id:2 ,descripcion: 'Tarjeta'}
    ]
    //CLiente
    const [cliente, setCliente] = useState("CONSUMIDOR FINAL")
    const [condicionTributaria, setCondicionTributaria] = useState("CONSUMIDOR FINAL")
    //SubTotal
    const [subtotal, setSubTotal] = useState(0)
    //Tabla
    const [dataTable, setDataTable] = useState([])
    //Colores
    const [colores, setColores] = useState([])
    //Tabla
    const headers =[
        {text:"Descripcion", key:"descripcion"},
        {text:"Precio", key:"precio"},
        {text:"Cantidad", key:"cantidad"},
        {text:"Eliminar",key:"eliminar", click:(codigo)=>{console.log(codigo); setDescripcionArticuloSeleccionado(codigo); setAbrirModalEliminar(true); }},
    ]
      //Funcion para agregar un producto a la tabla y actualizar el subtotal
      const agregarProducto= ()=>{
        const dateTableAux = dataTable
        dateTableAux.push({codigo:codigoProducto ,descripcion: descripcion, precio: precioUnitario, cantidad: cantidad,eliminar: <DeleteForeverIcon color="primary"/>})
        setDataTable([...dateTableAux])
        setDescripcion("")
        setCodigoProducto("")
        setPrecioUnitario(0)
        setTalles([])
        setColores([])
        setMarca("")
        setCantidad(0)
      }
      //Funciones para eliminar un producto
      const eliminarProducto = (id)=>{
          const dataTableAux = dataTable.filter(function(data){
              return data.descripcion !== id
          })
          setDataTable([...dataTableAux])
          setAbrirModalEliminar(false)
      }
      const arrayColores = (stocks)=>{
        const setObj = new Set(); 
          
        const auxiliar = stocks.map(stock=>{
            return stock.color
        })
        const unicos = auxiliar.reduce((acc, color) => {
            if (!setObj.has(color.id)){
              setObj.add(color.id, color)
              acc.push(color)
            }
            return acc;
          },[]);

        setColores(unicos)
      }
      const arrayTalles = (stocks)=>{
        const setObj = new Set();
        const auxiliar = stocks.map(stock=>{
            return stock.talle
        })
        const unicos = auxiliar.reduce((acc, talle) => {
            if (!setObj.has(talle.id)){
              setObj.add(talle.id, talle)
              acc.push(talle)
            }
            return acc;
          },[]);


        setTalles(unicos)
      }
      //Funcion para buscar producto
      const buscarProducto = (ev)=>{
            if (ev.key === 'Enter') {
            
            axios.get(apiPath + "/Productos/GetProductosVenta?CodigoProducto="+codigoProducto+"&idUsuario="+localStorage.getItem("id"))
            .then(response=>{
                console.table(response.data)
                setDescripcion(response.data.producto.descripcion)
                setMarca(response.data.producto.marca.descripcion)
                setPrecioUnitario(response.data.producto.precioVenta)
                arrayColores(response.data.producto.stocks)
                arrayTalles(response.data.producto.stocks)
            })
        .catch(err=>{
            if(err){
                console.log(err)
            }
        })
        }
    }
      //Funcion que calcula el subTotal
      useEffect(()=>{
        let subTotalAux = 0
        dataTable.map((fila)=>{
            subTotalAux = subTotalAux + Number(fila.precio) *Number(fila.cantidad)
        })
        setSubTotal(subTotalAux)
      },[dataTable])

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
                        <TextField fullWidth label="Codigo de producto" id="codigo" value={codigoProducto} onChange={e=>{setCodigoProducto(e.target.value)}} onKeyPress={(e)=>buscarProducto(e)}/>
                        <TextField variant="filled" fullWidth disabled label="Descripcion" id="descripcion" value={descripcion} />
                        <TextField variant="filled" fullWidth disabled label="Marca" id="marca" value={marca} />
                        <TextField variant="filled" fullWidth disabled label="Precio" id="precio" value={precioUnitario} />
                        <DropDown
                        width="100%"
                        label="Talle"
                        labelId="tipoTalle"
                        id="tipoTalleId"
                        items={talles}
                        value={talle}
                        set={setTalle}
                        />
                        <DropDown
                        width="100%"
                        label="Color"
                        labelId="color"
                        id="idColor"
                        items={colores}
                        value={color}
                        set={setColor}
                        />
                        <TextField fullWidth label="Cantidad" id="cantidad" value={cantidad} onChange={e=>{setCantidad(e.target.value)}}/>

                        <Button fullWidth variant="contained" onClick={agregarProducto}>Agregar</Button>
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
                        <Tabla rows={dataTable} headers={headers} idColumn={"descripcion"}></Tabla>
                        <div style={{display:"flex", marginTop:"20px"}}>
                            <div style={{width:"50%"}}>
                                <div style={{display:"flex"}}>
                                    <div style={{width:"100%", borderRadius:"15px", backgroundColor:"#CCD1D1"}}>
                                        <Typography style={{marginLeft:"2px", color:"#515A5A"}} variant="h5" component="h2"><b>Cliente: {cliente}</b></Typography>
                                    </div>
                                    <EditIcon fontSize="large" onClick={()=>{setAbrirModalBuscarCliente(true)}}/>
                                </div>
                                <div style={{width:"100%", borderRadius:"15px", backgroundColor:"#CCD1D1", marginTop:"10px"}}>
                                        <Typography style={{marginLeft:"2px", color:"#515A5A"}} variant="h6" component="h2"><b>Condicion tributaria: {condicionTributaria}</b></Typography>
                                </div>
                            </div>
                            <div style={{width:"50%", marginLeft:'12px'}}>
                                <div style={{textAlign:"center"}}>
                                    <Typography variant="h4" component="h2"><b> Subtotal: $ {subtotal}</b></Typography>
                                    <Button style={{width:"50%"}} size="large" variant="contained" onClick={()=>setAbrirModalPagar(true)}>Pagar</Button>
                                </div>
                                
                            </div>
                        </div>
                        
                    </Box>

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
                    Esta seguro que desea eliminar el articulo {descripcionArticuloSeleccionado} ?
                    </Typography>
                    <div style={{display:"flex", justifyContent:"space-between", marginTop:"20px"}}>
                        <Button color="grey" variant="contained" onClick={()=>setAbrirModalEliminar(false)}>Cancelar</Button>
                        <Button color="error" variant="contained" onClick={()=>eliminarProducto(descripcionArticuloSeleccionado)}>Eliminar</Button>
                    </div>
            </Modal>
            <Modal
                open={abrirModalBuscarCliente}
                setOpen={setAbrirModalBuscarCliente}
            >
                    <Typography id="keep-mounted-modal-title" variant="h5" component="h2">
                        Seleccione el cliente
                    </Typography>
                    <hr style={{width: "100%", height:"3px"}}></hr>
                    <TextField fullWidth label="CUIT / Nombre - Razon Social / DNI" id="buscar" value={inputBuscar} onChange={e=>{setInputBuscar(e.target.value)}}/>
                    <hr style={{width: "100%", height:"3px", marginTop:"100px"}}></hr>
                    <div style={{display:"flex", justifyContent:"space-between", marginTop:"20px"}}>
                        <Button color="grey" variant="contained" onClick={()=>setAbrirModalBuscarCliente(false)}>Cancelar</Button>
                        <Button color="primary" variant="contained" onClick={()=>console.log("Buscando Cliente")}>Buscar</Button>
                    </div>

            </Modal>
            <Modal
                open={abrirModalPagar}
                setOpen={setAbrirModalPagar}
            >
                    <Typography id="keep-mounted-modal-title" variant="h5" component="h2">
                        Realizar Pago
                    </Typography>
                    <hr style={{width: "100%", height:"3px"}}></hr>
                    <DropDown
                        width="100%"
                        label="Metodo de pago"
                        labelId="metodoDePagoId"
                        id="metodoDePago"
                        items={metodosDePago}
                        value={metodoDePago}
                        set={setMetodoDePago}
                        />
                    <TextField style={{marginTop:"50px"}} disabled fullWidth label="Monto" id="buscar" value={subtotal} />
                    <hr style={{width: "100%", height:"3px", marginTop:"50px"}}></hr>
                    <div style={{display:"flex", justifyContent:"space-between", marginTop:"20px"}}>
                        <Button color="grey" variant="contained" onClick={()=>setAbrirModalPagar(false)}>Cancelar</Button>
                        <Button color="primary" variant="contained" onClick={()=>console.log("pagando")}>Cobrar</Button>
                    </div>


            </Modal>
        </Container>
    )
}
export default RealizarVenta