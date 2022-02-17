import Container from "../../Componentes/Container/Container"
import { useSelector } from "react-redux";
import StorefrontIcon from '@mui/icons-material/Storefront';
import PrintIcon from '@mui/icons-material/Print';
import Typography from '@mui/material/Typography';
import {ordenarFecha} from '../../utils/utils'
import { useHistory } from "react-router-dom";
import { rootPath } from "../../App";

const Factura = ()=>{
    const state = useSelector(state => state)
    let history = useHistory();
    console.log(state)
    const imprimir = () => {
        const elem = document.getElementById('printIcon')
        elem.style.display = 'none'
        history.push(rootPath + "/venta")
        window.print();
        
    }
    const headers =[
        {text: 'Concepto', key: 'codigoProducto'},
        {text: 'Precio', key: 'precio'},
        {text: 'Cantidad', key:'cantidad'},
        {text:  'Total', key: 'total'}
    ]
    return(
            
            <Container>
                <div id="printIcon"  style={{display: 'flex', justifyContent: 'flex-end'}}>
                    <PrintIcon   onClick={() => imprimir()}  fontSize="large"/>
                </div>   
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <StorefrontIcon  fontSize="large" sx={{width: '10%', height: '10%'}}/>
                        <h1 style={{alignSelf: 'flex-end', textDecoration: 'underline'}}>La Tienda Online</h1>
                        <div style={{textAlign: 'end'}}>
                            <h6>Email: LaTiendaOnline@gmail.com</h6>
                            <h6>Telefono: +54 9 03815209087</h6>
                            <h6>Tucumán, Argentina</h6>
                        </div>                   
                </div>
                <hr style={{width: "100%" , height:"1px",backgroundColor:"black"}}></hr>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <div>
                        <h3>Factura N° {state.comprobante.numeroComprobante}</h3>
                        <div style={{marginTop:"50px",alignSelf: 'flex-end'}}>
                        <Typography variant="body2" gutterBottom component="div">CUIT: {state.comprobante.cliente.cuit}</Typography>
                        <Typography variant="body2" gutterBottom component="div">Razon Solcial{state.comprobante.cliente.razonSocial}</Typography>
                        <Typography variant="body2" gutterBottom component="div">Domicilio: {state.comprobante.cliente.domicilio}</Typography>
                        </div>
                    </div>
                    <div>
                        <h3>Total $ {state.total}</h3>
                        <div style={{marginTop:"50px",alignSelf: 'flex-end'}}>
                            <Typography variant="body2" gutterBottom component="div">Fecha: { ordenarFecha(""+state.feDetResp[0].cbteFch)}</Typography>
                            <Typography variant="body2" gutterBottom component="div">Vencimiento: {ordenarFecha(""+state.feDetResp[0].caeFchVto)}</Typography>
                        </div>
                    </div>
                </div>
                <hr style={{width: "100%" , height:"1px",backgroundColor:"black"}}></hr>
                <h2>Detalle</h2>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    {headers.map((header)=>(
                        <h3>{header.text}</h3>
                    ))}
                </div>
                {state.lineaDeVenta.map((venta)=>(
                     <div style={{display: 'flex', justifyContent: 'space-between'}}>
                         <Typography variant="body2" gutterBottom component="div">{venta.codigoProducto}</Typography>
                         <Typography variant="body2" gutterBottom component="div">{venta.precio}</Typography>
                         <Typography variant="body2" gutterBottom component="div">{venta.cantidad}</Typography>
                         <Typography variant="body2" gutterBottom component="div">{venta.precio*venta.cantidad}</Typography>
                     </div>
                ))}

        </Container>           
    )
}
export default Factura