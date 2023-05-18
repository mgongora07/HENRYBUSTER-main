import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postNewMovie } from "../../redux/actions";



const CreateMovie = () => {
    const dispatch = useDispatch()

    const [input, setInput] = useState({
        name:"",
        image:"",
        description:"",
        price:"",
        date:"",
        FormatId:"",
        LanguageId:"",
        quantity:"",
        genres:"",
      } )

    const [errorMsg, setErrorMsg] = useState("");
    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
      };

      function formatDate(dateString) {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
      }

      console.log(input,'Soy input linea 35')

  return (
    <div>
        <h2>Create new movie</h2>
        <div>
            <label >Movie name:</label>
            <input
              type="text"
              placeholder="Movie name"
              value={input.name}
              name="name"
              onChange={handleChange}
            />


       </div>
       <div>
            <label >Image (url) </label>
            <input
              type="url"
              pattern="^https?://.*\.(png|jpg|jpeg|gif)$" required
              placeholder="URL"
              value={input.image}
              name="image"
              onChange={handleChange}
            />
        </div>
        <div>
            <label >Description:</label>
            <textarea
              type="text"
              placeholder="Description"
              value={input.description}
              name="description"
              onChange={handleChange}
            ></textarea>
        </div>
        <div>
            <label >Price:</label>
            <input
              type="text"
              placeholder="Price"
              value={input.price}
              name="price"
              onChange={handleChange}
            ></input>
        </div>
        
        <div>
            <label >Date:</label>
            <input
              type="date"
              
              min="1950-01-01" 
              max="2030-12-31"
              value={formatDate(input.price)}
              name="Date"
              onChange={handleChange}
            ></input>
        </div>

        
    </div>
  )
}

export default CreateMovie