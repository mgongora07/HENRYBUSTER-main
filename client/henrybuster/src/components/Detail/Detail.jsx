import React, { useEffect } from 'react'
import {useSelector, useDispatch} from "react-redux"
import { useParams } from 'react-router-dom'
import { getDetailMovie, cleanDetail } from '../../redux/actions'
import './Detail.css'


export const Detail = () => {
    const dispatch = useDispatch()
    const {id} = useParams()
    console.log(id)
   const movies = useSelector(state => state.detail)
   console.log(movies)

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
        <div className='Reviews'>
            <h1>Aqui va el componente de reviews</h1>
        </div>
        
    </div>
  )
}

