import React from 'react'
import './Container.css'

const Container = (props) => {
    return (
       <div className='Content'
       style={{
        marginTop: props.marginTop ? props.marginTop : "100px",
        marginLeft : props.marginLeft ?props.marginLeft : "",
        marginRight : props.marginRight ? props.marginRight : "",
        marginBottom : props.marginBottom ? props.marginBottom : "",
        paddingTop: props.paddingTop ? props.paddingTop :"20px",
        paddingBottom:props.paddingBottom ? props.paddingBottom : "20px",
        paddingLeft: props.paddingLeft ? props.paddingLeft :"50px",
        paddingRight: props.paddingRight ? props.paddingRight :"50px",
        overflow: "hidden"
       }}>
        {props.children}
       </div>
    )
}

export default Container
