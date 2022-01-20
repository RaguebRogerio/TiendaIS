import React from 'react'
import './App.css';
import Logueo from './Paginas/Logueo/Logueo'
import Inicio from './Paginas/Inicio/Inicio'
import {Route, Switch} from 'react-router-dom'
import AgregarCaracteristica from './Paginas/AgregarCaracteristica/AgregarCaracteristica';
import Productos from './Paginas/Productos/Productos';
import RealizarVenta from './Paginas/RealizarVenta/RealizarVenta';
import ControlStock from './Paginas/ControlStock/ControlStock.Js';
export const rootPath = "/tiendaOnline";

function App() {

  return (
    <div>
      <Switch>
            <Route exact path ={rootPath + "/controlstock"} component={ControlStock}/>
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
