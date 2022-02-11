const ComprobanteReducer = (state="", action)=>{
    console.log({state,action});
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