import { GET_DETAIL } from "./action-type";


const INITIAL_STATE = {
    detail: {},
    
  };

  export default function rootReducer(state = INITIAL_STATE, { type, payload }){
    switch(type){
        case GET_DETAIL:
            
            
            return{
                ...state,
                detail: payload
                
            }
            default:
            return state
    } 
}
