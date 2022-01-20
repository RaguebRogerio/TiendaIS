import React from 'react'
import './App.css';
import Logueo from './Paginas/Logueo/Logueo'
import Inicio from './Paginas/Inicio'
import { Link, Route, Switch} from 'react-router-dom'
function App() {
  return (
    <div>
      <Switch>
            <Route exact path ="/lolo" component={ Inicio}/>      
            <Route exact path ="/" component={ Logueo}/>
      </Switch>
      
    </div>
  );
}

export default App;
