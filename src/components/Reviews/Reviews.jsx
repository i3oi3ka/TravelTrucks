import { useOutletContext } from "react-router-dom";
import style from "./Reviews.module.css";

const Reviews = () => {
  const { reviews } = useOutletContext();
  return (
    <div className={style.container}>
      {reviews.length > 0 ? (
        <ul className={style.reviewsList}>
          {reviews.map(({ reviewer_name, reviewer_rating, comment }, idx) => (
            <li className={style.reviewItem} key={`review-${idx}`}>
              <div className={style.header}>
                <div className={style.icon}>{reviewer_name[0]}</div>
                <div className={style.name}>
                  <p>{reviewer_name}</p>
                  <div className={style.stars}>
                    {Array.from({ length: 5 }, (_, i) => (
                      <svg
                        key={`star-${i}`}
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        className={
                          i < reviewer_rating
                            ? style.filledStar
                            : style.emptyStar
                        }
                      >
                        <use href="/icons.svg#star" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className={style.comment}>{comment}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No reviews</p>
      )}
    </div>
  );
};

export default Reviews;
