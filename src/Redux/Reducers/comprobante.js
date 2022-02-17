const ComprobanteReducer = (state="", action)=>{
    switch(action.type){
        case 'set':{
            return action.payload
        }
        default:{
            return state
        }
    }
}

export default ComprobanteReducer