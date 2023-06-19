import React from "react";
import Container from "react-bootstrap/Container";
import style from './HomeAdmin.module.css'


const HomeAdmin = () => {
  return (
    <div style={{ height: "100vh" }}
    className={style.home}>
      <h2 className={style.h2}>Welcome!</h2>
      <p className={style.p}> <i className="bi bi-book"></i> Here you will find a quick guide on how to use the admin panel:</p>

      <ol className={style.ol}>
       
        <li className={style.li}> 
          <i className="bi bi-file-ruled fs-3 me-3"></i> To view the list of all movies, go to "All movies", where you will find a navigation bar at the top. There, you can enter a specific search or browse through the list and update the information of each movie, as well as delete it from the database.
        </li>
        <li className={style.li}>
        <i className="bi bi-collection-play-fill fs-5 me-3"></i> To create a new Movie, go to Create new movie.  
          Here you will find a form for creating a new product available for
          sale, where you can specify details such as available formats, price,
          and stock quantity.
        </li>   
        <li className={style.li}>
        <i className="bi bi-file-ruled fs-5 me-3"></i> To see the available genres, go to "All Genres," where you can update the existing genres.
        </li>      
        
        <li  className={style.li}>
        <i className="bi bi-columns-gap fs-5 me-3"></i> To create new genres, go to Create Genres 
          There you can create new genres for the movies.
        </li>
        <li className={style.li}>
        <i className="fa-solid fa-user fs-5 me-3"></i> To manage the users, go to Users. There you will find a list os all users and you will be able to modify the type of user to Admin or superAdmin, and delete an user in case of necesity.
        </li>
        <li className={style.li}>
        <i class="fa-solid fa-cart-shopping fs-6 me-3"></i> To manage purchase orders, go to Purchases.
          There you can view and modify the statuses of the orders. 
        </li>
        <li className={style.li}>
        <i class="fa-sharp fa-solid fa-chart-simple me-3"></i> To see the stadistics of purchases, go to Stadistics. There you will find charts of the most popular formats and genres sold.
        </li>
      </ol>
    </div>
  );
};

export default HomeAdmin;
