import React from "react";
import style from "./Paginado.module.css";

function Paginado({ pages, split }) {
  const handleButtonClick = (e) => {
    split(e.target.value);
  };
  return (
    <div className={style.container}>
      {pages &&
        pages?.map((number) => (
          <button
            key={number}
            value={number}
            onClick={handleButtonClick}
            className={style.button}
          >
            {number}
          </button>
        ))}
    </div>
  );
}

export default Paginado;
