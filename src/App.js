import React from 'react'
import './App.css';
import Logueo from './Paginas/Logueo/Logueo'
import Inicio from './Paginas/Inicio/Inicio'
import {Route, Switch} from 'react-router-dom'
import AgregarCaracteristica from './Paginas/AgregarCaracteristica/AgregarCaracteristica';
import Productos from './Paginas/Productos/Productos';
import RealizarVenta from './Paginas/RealizarVenta/RealizarVenta';
import AgregarStock from './Paginas/AgregarStock/AgregarStock';
import AltaProducto from './Paginas/Productos/AltaProducto'
import ModificarProducto from './Paginas/Productos/ModificacionProducto'
import Clientes from './Paginas/Clientes/Clientes';
import ClientesAlta from './Paginas/Clientes/ClientesAlta';
import ClientesModificacion from './Paginas/Clientes/ClientesModificacion';
import Factura from './Paginas/Factura/Factura';
export const rootPath = "/tiendaOnline";
export const apiPath = "http://localhost:3000/api"
function App() {

  return (
    <div>
      <Switch>
            <Route path = {rootPath + "/Factura"} component={Factura}/>
            <Route path = {rootPath + "/ClientesModificacion/:idCliente"} component={ClientesModificacion} children={<ClientesModificacion/>}/>
            <Route path = {rootPath + "/ClientesAlta"} component={ClientesAlta}/>
            <Route path = {rootPath + "/Clientes"} component={Clientes}/>
            <Route path ={rootPath + "/editarproducto/:codigo"} component={ ModificarProducto} children={<ModificarProducto />}/>
            <Route exact path ={rootPath + "/nuevoproducto"} component={ AltaProducto}/>
            <Route exact path ={rootPath + "/agregarstock"} component={ AgregarStock}/>
            <Route exact path ={rootPath + "/venta"} component={ RealizarVenta}/>      
            <Route exact path ={rootPath + "/producto"} component={ Productos}/>
            <Route exact path ={rootPath + "/agregarcaracteristica"} component={ AgregarCaracteristica}/>
            <Route exact path ={rootPath + "/inicio"} component={ Inicio}/>      
            <Route exact path ="/" component={ Logueo}/>
      </Switch>
    </div>
  );
}

export default App;
