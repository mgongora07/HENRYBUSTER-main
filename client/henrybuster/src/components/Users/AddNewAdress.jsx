import React, { useState, useContext, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import style from '../Styles/UserProfile.module.css';
import { CartContext } from '../Carrito/Context';
import { setOrder, setDirections } from '../../redux/actions';
import axios from 'axios'
import { useAuth } from "../../context/authContext";
import SideBarProfile from './SideBarProfile';

const AddNewAdress = () => {
  const [errorMsg, setErrorMsg] = useState("");
  const [formErrors, setFormErrors] = useState({})
  const { cartItems } = useContext(CartContext);
  const currentOrder = useSelector(state => state.currentOrder)
  const dispatch = useDispatch()
  const { user} = useAuth();
  const directions = useSelector(state=> state.directions);

  const userState = useSelector(state => state.user);


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

  const [loading, setLoading] = useState(false); // Nuevo estado de carga
  const [loading2, setLoading2] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
  
    if (name === "street" || name === "city" || name === "state" || name === "country") {
      if (value.length > 70) {
        setFormErrors((prevErrors) => ({
          ...prevErrors,
          [name]: ` The ${name} field cannot be greater than 70 characters`,
        }));
        return;
      }
    } else if (name === "postalCode") {
      if (value.length > 10 || !/^\d+$/.test(value)) {
        setFormErrors((prevErrors) => ({
          ...prevErrors,
          [name]: 'Postal Code must be a numeric value and not exceed 10 characters',
        }));
        return;
      }
    }
  
    setFormErrors((prevErrors) => {
      const updatedErrors = { ...prevErrors };
      delete updatedErrors[name];
      return updatedErrors;
    });
  
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

    setLoading(true); // Iniciar la carga

    try {
      let createAdress = {
        street: formData.street,
        city: formData.city,
        state: formData.state,
        postalCode: formData.postalCode,
        country: formData.country,
      };
      
      await axios.post(`http://localhost:3001/address/${user.uid}`, createAdress);
      await getAdress(user.uid);
      
      setFormData({
        street: '',
        city: '',
        state: '',
        postalCode: '',
        country: '',
      });

      setLoading(false); // Finalizar la carga
    } catch (error) {
      console.error(error);
      setLoading(false); // Finalizar la carga en caso de error
    }
  };

  const getAdress = async (uid) => {
    setLoading2(true);
    const adress = await axios.get(`http://localhost:3001/address/user/${user.uid}`);
    const direccionData = adress.data;
    dispatch(setDirections(direccionData));
    setLoading2(false); // Finalizar la carga
  };

  useEffect(() => {
    if (user) {
      const fetchAddress = async () => {
        await getAdress(user.uid);
      };
      fetchAddress();
    }
  }, [user, userState]);


  return (
    <div className={style.container}>
      <SideBarProfile/>
      <div className={style.titulo}>
        <h1><i className="bi bi-info-circle-fill"></i> My information</h1>

        <div className={style.popup}>
          <form onSubmit={handleSubmit} >
            <h2 className={style.letras2}>Save a new Address</h2>

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
                  pattern="[0-9]+"
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
              {Object.keys(formErrors).map((fieldName) => (
                <p key={fieldName} className={style.error}>
                  {formErrors[fieldName]}
                </p>
              ))}
              <button className={style.button} type="submit" disabled={loading}>
                {loading ? (
                  <div className="spinner-border text-dark" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
                ) : (
                  'Save'
                )}
              </button>
            </div>
          </form>
          <div className={style.Columna2}>
          {loading2 ? (
             <div className="spinner-border text-dark" role="status">
             <span className="sr-only">Loading...</span>
           </div>
            ) : directions && directions.length >= 1 ? (
              directions.map((address) => (
                <div key={address.id} className={style.direccion}>
                  <p>Street: {address.street}<br />
                  City: {address.city} <br />
                  State: {address.state} <br />
                  Zip Code: {address.postalCode} <br />
                  Country: {address.country}</p>
                </div>
              ))
            ) : (
              <p>Fill the form to add a new address</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewAdress;
