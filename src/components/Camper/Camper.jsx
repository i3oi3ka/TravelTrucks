import { Link, useNavigate } from "react-router-dom";
import Categories from "../Categories/Categories";
import FavoriteBtn from "../FavoriteBtn/FavoriteBtn";
import style from "./Camper.module.css";
import CamperRating from "../CamperRating/CamperRating";

const Camper = ({ camper, openModal }) => {
  const navigate = useNavigate();

  return (
    <div className={style.container}>
      <img
        className={style.image}
        src={camper.gallery[0].thumb}
        alt={camper.description}
        width="292px"
        height="320px"
        onClick={() => openModal(camper.gallery[0].original)}
      />
      <div>
        <div className={style.header}>
          <h2 className={style.name}>{camper.name}</h2>
          <p className={style.price}>€{camper.price}.00</p>
          <FavoriteBtn id={camper.id} />
        </div>
        <CamperRating
          link={`${camper.id}/reviews`}
          rating={camper.rating}
          location={camper.location}
          reviews={camper.reviews}
        />
        <div className={style.description}>
          <p>{camper.description}</p>
        </div>
        <Categories camper={camper} />
        <button
          className={style.showMoreBtn}
          onClick={() => navigate(`${camper.id}/features`)}
        >
          Show more
        </button>
      </div>
    </div>
  );
};

export default Camper;
