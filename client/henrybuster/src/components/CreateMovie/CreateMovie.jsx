import React, { useState, useEffect } from "react";
import s from "./Create.module.css"
import {getFormats,getLanguages, getGenres} from "../../redux/actions.js"
import { useDispatch, useSelector } from "react-redux";
//import { useHistory } from "react-router-dom";
import axios from "axios";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Tag from "../Tags/Tags";
export const CreateMovie = () => {
    const dispatch = useDispatch();
 // const history = useHistory();
  useEffect(() => {
    dispatch(getFormats());
    dispatch(getLanguages());
    dispatch(getGenres());
  }, [dispatch]);


  const languages = useSelector((state) => state.languages);
  const genres = useSelector((state) => state.genres);
  const formats = useSelector((state) => state.format);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");
  const [FormatId, setFormatId] = useState("");
  const [LanguageId, setLanguageId] = useState("");
  const [quantity, setQuantity] = useState("");
  const [genreTags, setGenreTags] = useState([]);
  const [genre, setGenre] = useState({id:"",name:""});

  const handleAddTag = (event) => {
    event.preventDefault();
    const newTag = genre;
    if (!genreTags.some((x) => x.id === newTag.id))
      if (newTag.id !== "0" && newTag.id)
      setGenreTags([...genreTags, newTag]);
  };

  const handleRemoveTag = (tagToRemove) => {
    setGenreTags(
        genreTags.filter((tag) => tag.name !== tagToRemove)
    );
  };

  
  const handleGenreChange = (event) => {
    const selectedValue = event.target.value;
    const selectedIndex = event.target.selectedIndex;
    const selectedText = event.target.options[selectedIndex].text;

    setGenre({ id: selectedValue, name: selectedText });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    await axios.post("http://localhost:3001/movie", {
    name,
      image,
      description,
      price,
      date,
      FormatId,
      LanguageId,
      quantity,
      genres: [...genreTags].map((x) => Number(x.id)),
      });
      window.alert("Movie created");
     // history.push("/home");
 

  };


  const preset_key="compumundo"
  const cloud_name="dpqjfpdt0"

const uploadImage =(event) =>{
    const file=event.target.files[0]
    const formData= new FormData()
    formData.append("file",file)
    formData.append("upload_preset",preset_key);
    axios.post(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,formData) 
    .then(res=>setImage(res.data.secure_url))
    .catch(err=>console.log(err))
}


  return (
    <div className={s.formContainer}>
      <form className={s["pet-form"]}>
        <div className={s["form-group"]}>
          <h2>CREATE NEW MOVIE</h2>
        </div>

        <div className={s["form-group"]}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
    
        <div className={s["form-group"]}>
          <label htmlFor="image">Image</label>
          <input
            type="file"
            id="image"
            onChange={uploadImage}
          />
        </div>

        <div className={s["form-group"]}>
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
          />
        </div>

        <div className={s["form-group"]}>
        <label htmlFor="quantity">Quantity:</label>
        <input
          type="number"
          id="quantity"
          value={quantity}
          onChange={(event) => setQuantity(event.target.value)}
        />
      </div>

        <div className={s["form-group"]}>
        <label>Select a date:</label>
        <DatePicker
          selected={date}
          onChange={(val)=> setDate(val)}
          dateFormat="yyyy/MM/dd"
        />
      </div>
      <div className={s["form-group"]}>
      <label htmlFor="format">Format:</label>
      <select id="format" onChange={(event)=>setFormatId(event.target.value)}>
      <option key={0} value="">
        Select a Format
      </option>
      {formats.map((x) => (
        <option key={x.id} value={x.id}>
          {x.name}
        </option>
      ))}
    </select>
    </div>

    <div className={s["form-group"]}>
      <label htmlFor="language">Language:</label>
      <select id="language" onChange={(event)=>setLanguageId(event.target.value)}>
      <option key={0} value="">
        Select a language
      </option>
      {languages.map((x) => (
        <option key={x.id} value={x.id}>
          {x.name}
        </option>
      ))}
    </select>
    </div>


    <div className={s["form-group"]}>
          <label htmlFor="description">Description:</label>
          <textarea
            type="number"
            id="description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </div>
       
        <div className={s["form-group"]}>
          <label htmlFor="genres">Genres:</label>
          <div className={s.selectAdd}>
            <select id="genres" onChange={handleGenreChange}>
              <option key={0} value="">
                Seleccione una opción
              </option>
              {genres.map((x) => (
                <option key={x.id} value={x.id}>
                  {x.name}
                </option>
              ))}
            </select>
            <button className={s["add-button"]} onClick={handleAddTag}>
              Agregar
            </button>
          </div>
        </div>

   
        <div className={s["tags-container"]}>
          {genreTags.map((tag) => (
            <Tag
              key={tag.id}
              tagName={tag.name}
              onRemoveTag={handleRemoveTag}
            />
          ))}
        </div>
        <button
          type="submit"
          className={s["submit-button"]}
          onClick={submitHandler}
        >
          Enviar
        </button>
      </form>
    </div>
  )
}
