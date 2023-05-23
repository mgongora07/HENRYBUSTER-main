import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import {
  getRankingMovie,
  cleanRatings,
  filterRatingStar,
} from '../../redux/actions';
import EachReview from './EachReview';
import style from '../Styles/Reviews.module.css';

const Reviews = (props) => {
  const dispatch = useDispatch();
  const { id } = props;
  const ratings = useSelector((state) => state.ratingsFilter);
  const totales = useSelector((state) => state.ratings);
  const totalreviews = totales.length;
  const numberOfResults = ratings.length;
 

  const [filterRating, setFilterRating] = useState('All');

  const handleSelectStar = (e) => {
    e.preventDefault();
    const value = e.target.value;
    dispatch(filterRatingStar(value));
    setFilterRating(value);
  };

  useEffect(() => {
    dispatch(getRankingMovie(id));
    return () => {
      dispatch(cleanRatings());
    };
  }, [id]);

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

  function renderRatingStars(rating) {
    const stars = [];
  
    // Determinar la cantidad de estrellas llenas, medias y vacías según el puntaje
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - Math.ceil(rating);
  
    // Renderizar estrellas llenas
    for (let i = 0; i < fullStars; i++) {
      stars.push(<i className="bi bi-star-fill me-1" ></i>);
    }
  
    // Renderizar estrella media si es necesario
    if (hasHalfStar) {
      stars.push(<i className="bi bi-star-half me-1" ></i>);
    }
  
    // Renderizar estrellas vacías
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<i className="bi bi-star me-1" ></i>);
    }
  
    return stars;
  }
  return (
    <div className={style.container}>
      <div>
        <h5 className={style.title}>Reviews of this product</h5>
      </div>
      <div> </div>
      <div className={style.Prueba}>
        <div className='d-flex justify-content-center align-items-center'>
          <div >
            <div className="d-flex justify-content-between align-items-center">
              <div className="ratings">
                  <h5 className="review-count"> {totalreviews} Reviews</h5>
                  <div>
                    {renderRatingStars(props.rating)} <span className='me-5'>{props.rating} stars</span>

                  </div>
              </div>
            </div>
            <button className={style.btn2} value="All" onClick={e => handleSelectStar(e)}>All reviews</button>
            <div className="mt-5 d-flex justify-content-between align-items-center">
            <button className={style.btn} value="5" onClick={e => handleSelectStar(e)}>5 stars</button>
              <div className="small-ratings">
                <i className="bi bi-star-fill me-1"></i>
                <i className="bi bi-star-fill me-1"></i>
                <i className="bi bi-star-fill me-1"></i>
                <i className="bi bi-star-fill me-1"></i>
                <i className="bi bi-star-fill me-1"></i>
              </div>
            </div>

            <div className="mt-1 d-flex justify-content-between align-items-center">
            <button className={style.btn} value="4" onClick={e => handleSelectStar(e)}>4 stars</button>
              <div className="small-ratings">
                <i className="bi bi-star-fill me-1"></i>
                <i className="bi bi-star-fill me-1"></i>
                <i className="bi bi-star-fill me-1"></i>
                <i className="bi bi-star-fill me-1"></i>
                <i className="bi bi-star me-1"></i>
              </div>
            </div>

            <div className="mt-1 d-flex justify-content-between align-items-center">
            <button className={style.btn} value="3" onClick={e => handleSelectStar(e)}>3 stars</button>
              <div className="small-ratings">
                <i className="bi bi-star-fill me-1"></i>
                <i className="bi bi-star-fill me-1"></i>
                <i className="bi bi-star-fill me-1"></i>
                <i className="bi bi-star me-1"></i>
                <i className="bi bi-star me-1"></i>
              </div>
            </div>

            <div className="mt-1 d-flex justify-content-between align-items-center">
            <button className={style.btn} value="2" onClick={e => handleSelectStar(e)}>2 stars</button>
              <div className="small-ratings">
                <i className="bi bi-star-fill me-1"></i>
                <i className="bi bi-star-fill me-1"></i>
                <i className="bi bi-star me-1"></i>
                <i className="bi bi-star me-1"></i>
                <i className="bi bi-star me-1"></i>
              </div>
            </div>

            

            <div className="mt-1 d-flex justify-content-between align-items-center">
              <button className={style.btn} value="1" onClick={e => handleSelectStar(e)}>1 star</button>
              <div className="small-ratings">
              <i className="bi bi-star-fill me-1"></i>
                <i className="bi bi-star me-1"></i>
                <i className="bi bi-star me-1"></i>
                <i className="bi bi-star me-1"></i>
                <i className="bi bi-star me-1"></i>
              </div>
            </div>
          </div>
        </div>
        
        <div className={style.EachReview}>
          {ratingsPPage.map((rating) => (
            <EachReview
              key={rating.UserId}
              UserId={rating.UserId}
              rating={rating.rating}
              comment={rating.comment}
            />
          ))}
        </div>
      </div>
      <div>
       
        {numberOfResults > 5 && (
          <div>
            <p>Showing page {currentPage + 1} of {totalPages}</p>
            <div className={style.containerBnt}>
              <button onClick={prevHandler} className={style.btn}>Prev</button>
              <button onClick={nextHandler} className={style.btn}>Next</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Reviews;
