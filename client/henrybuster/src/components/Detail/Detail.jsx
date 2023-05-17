import React, { useEffect, useContext } from 'react'
import {useSelector, useDispatch} from "react-redux"
import { useParams, Link } from 'react-router-dom'
import { getDetailMovie, cleanDetail } from '../../redux/actions'
import './Detail.css'
import Cart from '../Carrito/Cart'
import { CartContext } from '../Carrito/Context'



export const Detail = () => {
    const dispatch = useDispatch()
    const {id} = useParams()
 
   const movies = useSelector(state => state.detail)
   const {addItemToCart} = useContext(CartContext)

   useEffect(() => {
     
    dispatch(getDetailMovie(id))
      
    return () => {
      dispatch(cleanDetail())
    }

    }, [id])

   console.log(movies)
  return (
    <div className='Wraper'>
        <div className='DatosPelis'>
                <div className='ImagenPelis'>
                    <img src={movies? movies.image : "No info about"} alt="Imagen de pelicula" />
                </div>
                <div className='InfoPelis'>
                    <p>{movies? movies.name : "No info about"}</p>
                    {/* <p>{movies?movies.Language.name : "No info about"}</p> */}
                    
                    <p>Description: {movies? movies.description : "No info about"}</p>
                    <p>Release date: {movies? movies.date : "No info about"}</p>
                    <p>Price: ${movies? movies.price : "No info about"}</p>
                    <p>Ranking: {movies? movies.vote_average : "No info about"}</p>
                    <p>Languages avaibles: {movies? movies.Language?.name : "No information about"}</p>
                </div>

        </div>
        <div>
            <button onClick={()=>addItemToCart(movies)}>Add to cart</button>
            <Link to={'/Cart'}>
            <button >View cart</button>
            
            </Link>

        </div>
        <div className='Reviews'>
            <h1>Aqui va el componente de reviews</h1>
        </div>
        
    </div>
  )
}

