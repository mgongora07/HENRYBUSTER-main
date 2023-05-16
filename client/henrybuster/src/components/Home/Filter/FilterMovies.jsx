import React from "react";
import { useDispatch, useSelector } from "react-redux";

function FilterMovies({ split }) {
  const { genres, format } = useSelector((state) => state);

  const handleClick = (e) => {
    split(1);
  };

  return (
    <div>
      <select onChange={handleClick}>
        <option value="All-Recipes" defaultValue="All-Recipes">
          Genres
        </option>
        {genres
          ? genres.map((e, i) => (
              <option key={i} value={e.name} style={{ marginTop: "1px" }}>
                {e.name.charAt(0).toUpperCase() + e.name.slice(1)}
              </option>
            ))
          : null}
      </select>
      <select onChange={handleClick}>
        <option value="All-Recipes" defaultValue="All-Recipes">
          Format
        </option>
        {format
          ? format.map((e, i) => (
              <option key={i} value={e.name} style={{ marginTop: "1px" }}>
                {e.name.charAt(0).toUpperCase() + e.name.slice(1)}
              </option>
            ))
          : null}
      </select>
    </div>
  );
}

export default FilterMovies;
