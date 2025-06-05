import { useOutletContext } from "react-router-dom";

const Reviews = () => {
  const { reviews } = useOutletContext();
  return (
    <section>
      <ul>
        {reviews.length > 0 &&
          reviews.map(({ reviewer_name, reviewer_rating, comment }, idx) => (
            <li key={idx}>
              <div>{reviewer_name[0]}</div>
              <div>{reviewer_name}</div>
              <div>{reviewer_rating}</div>
              <div>{comment}</div>
            </li>
          ))}
      </ul>
    </section>
  );
};

export default Reviews;
