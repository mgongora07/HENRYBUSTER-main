import {
    GET_DETAIL
} from './action-type'
import axios from 'axios'


export const getDetailMovie = (id)=>{
    return async function(dispatch){
        try {
            let movie = await axios.get(`http://localhost:3001/movie/${id}`)
            let payload = movie.data
            
            return dispatch({
                type: GET_DETAIL,
                payload: payload
            })
        } catch (error) {
            return ({error:error})
        }
       
    }
}

export const cleanDetail = ()=>{
    return function(dispatch){
        try {
            let clean = {}
            
            return dispatch({
                type: GET_DETAIL,
                payload: clean
            })
        } catch (error) {
            return {error: error}
        }
    }
}