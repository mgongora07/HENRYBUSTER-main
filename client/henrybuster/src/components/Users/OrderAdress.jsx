import React, { useState, useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "../Styles/OrderAdress.module.css";
import { CartContext } from "../Carrito/Context";
import { setOrder, setUserOrder, setDirections } from "../../redux/actions";
import axios from "axios";
const OrderAdress = ({ onClose }) => {
  const [errorMsg, setErrorMsg] = useState("");
  const { cartItems } = useContext(CartContext);
  const currentOrder = useSelector((state) => state.currentOrder);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  console.log(currentOrder);
  const directions = useSelector((state) => state.directions);
  const purchases = cartItems.map((item) => ({
    MovieId: item.id,
    quantity: item.amount,
  }));

  const [showForm, setShowForm] = useState(true);

  const [formData, setFormData] = useState({
    purchases: [],
    name: "",
    email: "",
    phoneNumber: "",
    street: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
  });

  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      purchases: purchases,
    }));
  }, [cartItems]);

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
      !formData.purchases ||
      !formData.name ||
      !formData.email ||
      !formData.phoneNumber ||
      !formData.street ||
      !formData.city ||
      !formData.state ||
      !formData.postalCode ||
      !formData.country
    ) {
      setErrorMsg("Please fill in all fields");
      return;
    }

    if (!user) {
      let createAdress = {
        purchases: formData.purchases,
        name: formData.name,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        street: formData.street,
        city: formData.city,
        state: formData.state,
        postalCode: formData.postalCode,
        country: formData.country,
      };

      dispatch(setOrder(createAdress));
      setShowForm(false);
    } else {
      console.log("poraqui no");
      let createAdress = {
        purchases: formData.purchases,
        name: formData.name,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        street: formData.street,
        city: formData.city,
        state: formData.state,
        postalCode: formData.postalCode,
        country: formData.country,
      };
      const { data } = await axios.post(
        `https://henrybuster.onrender.com/address/${user.id}`,
        createAdress
      );
      dispatch(setDirections([...directions, data]));
      createAdress.AddressId = data.id;

      dispatch(setUserOrder(createAdress));
      setShowForm(false);
    }
  };

  const handleCancel = () => {
    setShowForm(false);
    onClose();
  };

  if (!showForm) {
    return null;
  }

  return (
    <div className={style.overlay}>
      <form onSubmit={handleSubmit} className={style.popup}>
        <h2 className={style.letras2}>Please, provide your address</h2>
        <div>
          <button onClick={handleCancel} className={style.closeButton}>
            <i className="bi bi-x"></i>
          </button>
        </div>

        <div className={style.forma}>
          <div className={style.campo}>
            <label className={style.letras}>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <br />
          </div>
          <div className={style.campo}>
            <label className={style.letras}>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <br />
          </div>
          <div className={style.campo}>
            <label className={style.letras}>Phone Number:</label>
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
            <br />
          </div>
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
  );
};

export default OrderAdress;
