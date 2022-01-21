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
export const rootPath = "/tiendaOnline";

function App() {

  return (
    <div>
      <Switch>
            <Route path ={rootPath + "/editarproducto"} component={ ModificarProducto}/>
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
