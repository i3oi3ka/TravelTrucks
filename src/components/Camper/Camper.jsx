import { useNavigate } from "react-router-dom";
import Categories from "../Categories/Categories";
import FavoriteBtn from "../FavoriteBtn/FavoriteBtn";
import style from "./Camper.module.css";

const Camper = ({ camper }) => {
  const navigate = useNavigate();

  return (
    <div className={style.container}>
      <img
        className={style.image}
        src={camper.gallery[0].thumb}
        alt={camper.description}
        width="292px"
        height="320px"
      />
      <div>
        <div className={style.header}>
          <p className={style.name}>{camper.name}</p>
          <p className={style.price}>€{camper.price}.00</p>
          <FavoriteBtn id={camper.id} />
        </div>
        <div className={style.about}>
          <div className={style.rating}>
            <svg
              className={style.iconStar}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
            >
              <use href={"/src/assets/icons.svg#star"} />
            </svg>
            <p>
              {camper.rating} ({camper.reviews.length} Reviews)
            </p>
          </div>
          <div className={style.location}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={style.iconMap}
              width="16"
              height="16"
              viewBox="0 0 16 16"
            >
              <use href={"/src/assets/icons.svg#map"}></use>
            </svg>
            <p>{camper.location}</p>
          </div>
        </div>
        <div className={style.description}>
          <p>{camper.description}</p>
        </div>
        <Categories camper={camper} />
        <button
          className={style.showMoreBtn}
          onClick={() => navigate(camper.id)}
        >
          Show more
        </button>
      </div>
    </div>
  );
};

export default Camper;
