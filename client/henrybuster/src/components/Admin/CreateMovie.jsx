import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postNewMovie, getFormats, getLanguage, getGenres } from "../../redux/actions";

const CreateMovie = () => {
  const dispatch = useDispatch();
  const formatos = useSelector((state) => state.format);
  const languages = useSelector((state)=> state.languages)
  const genres = useSelector((state) => state.genres)
 
  
  
  useEffect(() => {
      const fetchData = async () => {
          await dispatch(getLanguage());
        };
        fetchData();
    }, [dispatch]);
    
    useEffect(() => {
        const fetchData = async () => {
            await dispatch(getFormats());
        };
        fetchData();
    }, [dispatch]);
    
    useEffect(() => {
        const fetchData = async () => {
            await dispatch(getGenres());
        };
        fetchData();
    }, [dispatch]);
    
    const [input, setInput] = useState({
        name: "",
        image: "",
        description: "",
        price: "",
        date: "",
        FormatId: [],
        genre: [],
        quantity: "",
        LanguajeId: [],
    });
    
    const [errorMsg, setErrorMsg] = useState("");
    
    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };
    
    function formatDate(dateString) {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        return `${year}-${month}-${day}`;
    }
    
    const handleCheckboxFormat = (e) => {
        const { value, checked } = e.target;
        
        setInput((prevInput) => {
            if (checked) {
                return {
                    ...prevInput,
                    FormatId: [...prevInput.FormatId, value],
                };
            } else {
                return {
                    ...prevInput,
                    FormatId: prevInput.FormatId.filter((id) => id !== value),
                };
            }
        });
    };
    
    const handleCheckboxLanguage = (e) => {
        const { value, checked } = e.target;
        
        setInput((prevInput) => {
            if (checked) {
                return {
                    ...prevInput,
                    LanguajeId: [...prevInput.LanguajeId, value],
                };
            } else {
                return {
                    ...prevInput,
                    LanguajeId: prevInput.LanguajeId.filter((id) => id !== value),
                };
            }
        });
    };
    const handleCheckboxGenre = (e) => {
        const { value, checked } = e.target;
        
        setInput((prevInput) => {
            if (checked) {
                return {
                    ...prevInput,
                    genre: [...prevInput.genre, value],
                };
            } else {
                return {
                    ...prevInput,
                    genre: prevInput.genre.filter((id) => id !== value),
                };
            }
        });
    };
    function handleSubmit(e) {
        e.preventDefault();
        const urlRegex = /\/\/(\S+?(?:jpe?g|png|gif))/ig;
        const numeros = /^-?\d+(?:\.\d+)?$/
        
        if ( input.name.length > 50) {
            setErrorMsg("Movie names can not be grater than 50 characters");
            return;
        }
        
        
        if(!input.image.match(urlRegex)){
    setErrorMsg("Image url must be a valid url for an image");
    return;
  }
  if ( input.description.length > 800) {
    setErrorMsg("Movie description can not be grater than 800 characters");
    return;
  }
  

  if (input.LanguajeId.length === 0 ) {
    setErrorMsg("You must select at least Language");
    return;
  }
  if (input.genre.length === 0 ) {
    setErrorMsg("You must select at least Language");
    return;
  }
  if (input.FormatId.length === 0 ) {
    setErrorMsg("You must select at least Language");
    return;
  }
  if (!input.price.match(numeros)) {
    setErrorMsg("price can only contain numbers");
    return;
  }
  if (!input.quantity.match(numeros)) {
    setErrorMsg("quantity can only contain numbers");
    return;
  }

  if (
    !input.name ||
    !input.image||
    !input.description||
    !input.price||
    !input.date||
    !input.FormatId||
    !input.genre||
    !input.quantity||
    !input.LanguajeId
  ) {
    setErrorMsg("Please fill in all fields");
    return;
  }

  let newMovie = {
    name: input.name,
    image : input.image,
    description: input.description,
    price: input.price,
    date: input.date,
    FormatId: input.FormatId,
    genre: input.genre,
    quantity: input.quantity,
    LanguageId: input.LanguajeId
  };

  console.log(newMovie)

  dispatch(postNewMovie(newMovie));

  setErrorMsg("");

  setInput({
    name: "",
    image: "",
    description: "",
    price: "",
    date: "",
    FormatId: [],
    genre: [],
    quantity: "",
    LanguajeId: [],
  })
    }


  return (
    <div>
      <h2>Create new movie</h2>
<form>
      <div>
        <label>Movie name:</label>
        <input
          type="text"
          placeholder="Movie name"
          value={input.name}
          name="name"
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Image (url)</label>
        <input
          type="url"
          pattern="^https?://.*\.(png|jpg|jpeg|gif)$"
          required
          placeholder="URL"
          value={input.image}
          name="image"
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Description:</label>
        <textarea
          type="text"
          placeholder="Description"
          value={input.description}
          name="description"
          onChange={handleChange}
        ></textarea>
      </div>
      <div>
        <label>Price:</label>
        <input
          type="text"
          placeholder="Price"
          value={input.price}
          name="price"
          onChange={handleChange}
        ></input>
      </div>
      <div>
        <label>Date:</label>
        <input
          type="date"
          min="1950-01-01"
          max="2030-12-31"
          value={formatDate(input.price)}
          name="Date"
          onChange={handleChange}
        ></input>
      </div>
      <div>
        <label>Formats: </label>
        <div>
          {formatos.length > 0 &&
            formatos.map((formato) => (
              <div key={formato.id}>
                <input
                  type="checkbox"
                  id={formato.id}
                  value={formato.name}
                  checked={input.FormatId.includes(formato.name)}
                  onChange={handleCheckboxFormat}
                />
                <label htmlFor={formato.id}>{formato.name}</label>
              </div>
            ))}
        </div>
      </div>
      <div>
        <label>Languages: </label>
        <div>
          {languages.length > 0 &&
            languages.map((lenguaje) => (
              <div key={lenguaje.id}>
                <input
                  type="checkbox"
                  id={lenguaje.id}
                  value={lenguaje.name}
                  checked={input.LanguajeId.includes(lenguaje.name)}
                  onChange={handleCheckboxLanguage}
                />
                <label htmlFor={lenguaje.id}>{lenguaje.name}</label>
              </div>
            ))}
        </div>
      </div>
      <div>
        <label>Quantity:</label>
        <input
          type="text"
          placeholder="Quantity"
          value={input.quantity}
          name="quantity"
          onChange={handleChange}
        ></input>
      </div>
      <div>
        <label>Genres: </label>
        <div>
          {genres.length > 0 &&
            genres.map((genero) => (
              <div key={genero.id}>
                <input
                  type="checkbox"
                  id={genero.id}
                  value={genero.name}
                  checked={input.genre.includes(genero.name)}
                  onChange={handleCheckboxGenre}
                />
                <label htmlFor={genero.id}>{genero.name}</label>
              </div>
            ))}
        </div>
      </div>
      </form>
      <div >
          <button  type="submit" onClick={(e) => handleSubmit(e)}>
            Create new movie
          </button>
          <p>{errorMsg}</p>
      </div>
    </div>
  );
};

export default CreateMovie;
