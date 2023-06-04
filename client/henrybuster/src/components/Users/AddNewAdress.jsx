import React, { useState, useContext, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import style from '../Styles/UserProfile.module.css';
import { CartContext } from '../Carrito/Context';
import { setOrder } from '../../redux/actions';
import axios from 'axios'
import { useAuth } from "../../context/authContext";
import SideBarProfile from './SideBarProfile';


const AddNewAdress = () => {
  const [errorMsg, setErrorMsg] = useState("");
  const { cartItems } = useContext(CartContext);
  const currentOrder = useSelector(state => state.currentOrder)
  const dispatch = useDispatch()
  const { user} = useAuth();
  const {uid} = user
  


  const [formData, setFormData] = useState({
  
    name: '',
    email: '',
    phoneNumber: '',
    street: '',
    city: '',
    state: '',
    postalCode: '',
    country: '',
  });

 const [updateUser, setUpdateUser] = useState({
       phoneNumber:"",
 }) 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
     
       
        !formData.street ||
        !formData.city ||
        !formData.state ||
        !formData.postalCode ||
        !formData.country 
       
    ) {
        setErrorMsg("Please fill in all fields");
        return;
      } 
      let createAdress = {
     
    
      street: formData.street,
      city: formData.city,
      state: formData.state,
      postalCode: formData.postalCode,
      country: formData.country,
      }
      console.log(createAdress, 'soy create adress')
      await axios.post(`http://localhost:3001/address/${uid}`,createAdress)
      
    
  
    
  };

  
 

  return (
    <div className={style.container}>
      <SideBarProfile/>
      <div className={style.popup}>
      <div>
        <h1>Hola</h1>
      </div>
      <form onSubmit={handleSubmit} >
        <h2 className={style.letras2}>Save a new Adress</h2>
       

        <div className={style.forma}>
        
          
          <div className={style.campo}>
            <label className={style.letras}>Street:</label>
            <input
              type="text"
              name="street"
              value={formData.street}
              onChange={handleChange}
            />
            <br />
          </div>
          <div className={style.campo}>
            <label className={style.letras}>City:</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
            />
            <br />
          </div>
          <div className={style.campo}>
            <label className={style.letras}>State:</label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
            />
            <br />
          </div>
          <div className={style.campo}>
            <label className={style.letras}>Zip Code:</label>
            <input
              type="text"
              name="postalCode"
              value={formData.postalCode}
              onChange={handleChange}
            />
            <br />
          </div>
          <div className={style.campo}>
            <label className={style.letras}>Country:</label>
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
            />
            <br />
          </div>
          
          <button className={style.button} type="submit">
            Save
          </button>
        </div>
      </form>
      </div>
    </div>
  );
};

export default AddNewAdress;
