import React, { useState, useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "../Styles/UserProfile.module.css";
import { CartContext } from "../Carrito/Context";
import { setOrder, setDirections } from "../../redux/actions";
import axios from "axios";
import { useAuth } from "../../context/authContext";
import SideBarProfile from "./SideBarProfile";

const AddNewAdress = () => {
  const [errorMsg, setErrorMsg] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const { cartItems } = useContext(CartContext);
  const currentOrder = useSelector((state) => state.currentOrder);
  const dispatch = useDispatch();
  const { user } = useAuth();
  const directions = useSelector((state) => state.directions);

  const userState = useSelector((state) => state.user);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    street: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
  });

  const [updateUser, setUpdateUser] = useState({
    phoneNumber: "",
  });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (
      name === "street" ||
      name === "city" ||
      name === "state" ||
      name === "country"
    ) {
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
          [name]:
            "Postal Code must be a numeric value and not exceed 10 characters",
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
    let createAdress = {
      street: formData.street,
      city: formData.city,
      state: formData.state,
      postalCode: formData.postalCode,
      country: formData.country,
    };
    console.log(createAdress, "soy create adress");
    await axios.post(`http://localhost:3001/address/${user.uid}`, createAdress);
    await getAdress(user.uid);
    setFormData({
      street: "",
      city: "",
      state: "",
      postalCode: "",
      country: "",
    });
  };

  const getAdress = async (uid) => {
    const adress = await axios.get(
      `http://localhost:3001/address/user/${user.uid}`
    );
    const direccionData = adress.data;
    dispatch(setDirections(direccionData));
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
      <SideBarProfile />
      <div className={style.titulo}>
        <h1 className={style.title}>
          <i className="bi bi-info-circle-fill"></i> My information
        </h1>

        <div className={style.popup}>
          <form onSubmit={handleSubmit} className={style.form}>
            <h2 className={style.letras2}>Save a new Adress <i class="fa-solid fa-location-dot"></i></h2>

            <div className={style.forma}>
              <div className={style.campo}>
                <input
                  type="text"
                  name="street"
                  value={formData.street}
                  onChange={handleChange}
                  placeholder="Street:"
                />
                <br />
              </div>
              <div className={style.campo}>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="City:"
                />
                <br />
              </div>
              <div className={style.campo}>
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  placeholder="State:"
                />
                <br />
              </div>
              <div className={style.campo}>
                <input
                  type="text"
                  pattern="[0-9]+"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleChange}
                  placeholder="Zip Code:"
                />
                <br />
              </div>
              <div className={style.campo}>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  placeholder="Country:"
                />
                <br />
              </div>
              {Object.keys(formErrors).map((fieldName) => (
                <p key={fieldName} className={style.error}>
                  {formErrors[fieldName]}
                </p>
              ))}
            </div>
              <button className={style.button} type="submit">
                Save
              </button>
          </form>
          <div className={style.Columna2}>
            {directions && directions.length >= 1 ? (
              directions.map((address) => (
                <div key={address.id} className={style.direccion}>
                  <p>
                    Street: {address.street}
                    <br />
                    City: {address.city} <br />
                    State: {address.state} <br />
                    Zip Code: {address.postalCode} <br />
                    Country: {address.country}
                  </p>
                </div>
              ))
            ) : (
              <p>Fill the form to add a new adress</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewAdress;
