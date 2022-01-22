import React from 'react'
import './Inicio.css'
import NavBar from '../../Componentes/NavBar'
const Inicio = ()=>{
    return(
        <>
        <NavBar></NavBar>
        <div className='Inicio'>
            <h1 style={{fontSize:"40px", textAlign:"center"}}>Bienvenido/a {window.localStorage.getItem("nombre")} a Tienda Online</h1>
        </div>
        </>

    )
}
export default Inicio