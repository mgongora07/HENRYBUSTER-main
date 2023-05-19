import style from "./Paginado.module.css";

function Paginado({ pages, split }) {
  const handleButtonClick = (pageNumber) => {
    split(pageNumber);
  };

  const handlePreviousClick = () => {
    const previousPage = pages[0] - 1;
    if (previousPage >= 1) {
      handleButtonClick(previousPage);
    }
  };

  const handleNextClick = () => {
    const nextPage = pages[pages.length - 1] + 1;
    if (nextPage <= Math.max(...pages)) {
      handleButtonClick(nextPage);
    }
  };

  return (
    <div className={style.container}>
      {pages &&
        pages.map((number, index) => (
          <button
            key={number}
            value={number}
            onClick={() => handleButtonClick(number)}
            className={style.button}
          >
            {number}
          </button>
        ))}
    </div>
  );
}

export default Paginado;
