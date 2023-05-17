import React, { useEffect, useState } from 'react'
import {useSelector, useDispatch} from "react-redux"
import { useParams, Link } from 'react-router-dom'
import { getRankingMovie, cleanRatings, filterRatingStar } from '../../redux/actions'
import EachReview from './EachReview'


const Reviews = (props) => {
    const dispatch = useDispatch()
    const{id} = props
    const ratings = useSelector(state=> state.ratingsFilter)
    const totales = useSelector(state=> state.ratings)
    const totalreviews  = totales.length
    const numberOfResults = ratings.length



    const [filterRating, setFilterRating] = useState("All")

    const handleSelectStar = (e) => {
      e.preventDefault();
      const value= e.target.value;
      dispatch(filterRatingStar(value));
      setFilterRating({ filterRating });
    };
   
    

    useEffect(() => {
      dispatch(getRankingMovie(id))
          return () => {
          dispatch(cleanRatings())
        } }, [id])

// PAGINADO //
const ITEMS_PER_PAGE = 4;
const [datosPaginados, setDatosPaginado] = useState(ratings);
const [ratingsPPage, setRatingsPPage] = useState([]);
const [currentPage, setCurrentPage] = useState(0);

useEffect(() => {
  setDatosPaginado(ratings);
  setRatingsPPage(ratings.slice(0, ITEMS_PER_PAGE));
  setCurrentPage(0);
}, [ratings]);

// Función para manejar el evento de "Siguiente" en la paginación
const nextHandler = () => {
  // Calculamos el número total de páginas redondeando hacia arriba la cantidad de elementos totales dividido por los elementos por página
  const totalPages = Math.ceil(datosPaginados.length / ITEMS_PER_PAGE);

  // Si ya estamos en la última página, salimos de la función sin hacer nada
  if (currentPage + 1 >= totalPages) return;

  // Calculamos los índices de la página siguiente
  const firstIndex = (currentPage + 1) * ITEMS_PER_PAGE;
  const lastIndex = Math.min(firstIndex + ITEMS_PER_PAGE, datosPaginados.length);
  // Actualizamos el estado de los elementos por página y la página actual
  setRatingsPPage(datosPaginados.slice(firstIndex, lastIndex));
  setCurrentPage(currentPage + 1);
};

const prevHandler = () => {
  // Si la página actual es menor o igual a 0, no hay más páginas anteriores para mostrar
  if (currentPage <= 0) return;

  // Define el primer y el último índice de la página anterior para mostrar
  const firstIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const lastIndex = firstIndex + ITEMS_PER_PAGE;

  // Establece la lista de perros para mostrar en la página anterior y actualiza la página actual
  setRatingsPPage(datosPaginados.slice(firstIndex, lastIndex));
  setCurrentPage(currentPage - 1);
};

// Obtenemos el número total de páginas
const totalPages = Math.ceil(datosPaginados.length / ITEMS_PER_PAGE);






  return (
    <div>
        <div>Reviews of this product</div>
        <div>
          <button value="All" onClick={e=>handleSelectStar(e)}>All</button>
          <button value="1" onClick={e=>handleSelectStar(e)}>1</button>
          <button value="2" onClick={e=>handleSelectStar(e)}>2</button>
          <button value="3" onClick={e=>handleSelectStar(e)}>3</button>
          <button value="4" onClick={e=>handleSelectStar(e)}>4</button>
          <button value="5" onClick={e=>handleSelectStar(e)}>5</button>
        </div>
        <div>
          {ratingsPPage.map((rating) => (
              <EachReview
                key={rating.UserId}
                UserId={rating.UserId}
                rating={rating.rating}
                comment={rating.comment}
              />
              ))}
            
        </div>
        <div />
        Total Reviews: {totalreviews}. 
        {numberOfResults > 5 && (
            <div>
              <p>Showing page {currentPage + 1} of {totalPages}</p>
              <div>
                <button onClick={prevHandler}>Prev</button>
                <button onClick={nextHandler}>Next</button>
              </div>
            </div>
          )
          }
            
      

       </div>

    
  )
}

export default Reviews