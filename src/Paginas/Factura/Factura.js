import { useDispatch, useSelector } from "react-redux";
const Factura = ()=>{
    const state = useSelector(state => state)
    console.log(state)
    return(
        <div>
            Factura
        </div>
    )
}
export default Factura