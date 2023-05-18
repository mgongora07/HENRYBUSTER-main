import Carousel from "react-bootstrap/Carousel";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import style from "./carrusel.module.css";

function CarouselFadeExample() {
  const { paginado } = useSelector((state) => state);
  return (
    <div className={style.body}>
      <h1 className={style.title}>Las mas vendidas</h1>
      <Carousel fade>
        {paginado.map((e, i) => (
          <Carousel.Item key={i}>
            <img className={style.img} src={e.image} alt={e.name} />
            <Link
              to={`/movie/${e.id}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Carousel.Caption className={style.controls}>
                <h3>{e.name}</h3>
              </Carousel.Caption>
            </Link>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default CarouselFadeExample;
