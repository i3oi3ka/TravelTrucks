import { Link } from "react-router-dom";
import style from "./CamperRating.module.css";

const CamperRating = ({ link, rating, reviews, location }) => {
  return (
    <div className={style.container}>
      <div className={style.rating}>
        <svg
          className={style.iconStar}
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
        >
          <use href={"/icons.svg#star"} />
        </svg>

        <p>
          {rating}
          {reviews.length > 0 && (
            <Link className={style.link} to={link}>
              ({`${reviews.length} Reviews`})
            </Link>
          )}
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
          <use href={"/icons.svg#map"}></use>
        </svg>
        <p>{location}</p>
      </div>
    </div>
  );
};

export default CamperRating;
