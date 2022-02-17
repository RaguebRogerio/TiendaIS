export const ordenarFecha = (fecha)=>{
    const anio = fecha.slice(0,4)
    const mes = fecha.slice(4,6) + "/"
    const dia = fecha.slice(6,8) + "/"
    return (dia + mes + anio)
}