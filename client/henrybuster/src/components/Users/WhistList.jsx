import React, { useEffect, useState } from 'react'
import style from '../Styles/Whislist.module.css'
import SideBarProfile from './SideBarProfile'
import { useDispatch, useSelector } from 'react-redux';
import { useAuth } from "../../context/authContext";
import { getAllFavorites } from '../../redux/actions';
import SmallCard from './SmallCard';
import { Spinner } from 'react-bootstrap';



const WhistList = () => {
    const { user} = useAuth();
    const dispatch= useDispatch()
    const myFavorites = useSelector(state=>state.myFavorites)
    const [loadingFavs, setLoadingFavs] = useState(true);

    let filterFavs;
    if (myFavorites.length >= 1) {
      filterFavs = myFavorites.map(fav => ({ ...fav.Movie, favId: fav.id }));
    }
   
    useEffect(() => {
        dispatch(getAllFavorites(user.uid))
        .then(()=> setLoadingFavs(false))
      
      }, [filterFavs, user.uid])

 
 
   
        return (
          <div className={style.container}>
            <SideBarProfile />
            <div className={style.body}>
              <h1><i className="bi bi-bag-heart-fill"></i>My Whishlist</h1>
              <div className={style.cartasDiv}>
                {loadingFavs ? (
                  <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>
                ) : filterFavs ? (
                  filterFavs.map((movie) => (
                    <SmallCard
                      key={movie.id}
                      name={movie.name}
                      image={movie.image}
                      id={movie.id}
                      price={movie.price}
                      format={movie.Format.name}
                      movie={movie}
                      favId={movie.favId}
                    />
                  ))
                ) : (
                  <p className={style.letras}>Your whislist is empty</p>
                )}
              </div>
            </div>
          </div>
        );
        
}

export default WhistList
