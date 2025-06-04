import { useOutletContext } from "react-router-dom";

const Reviews = () => {
  const camper = useOutletContext();
  console.log(camper.reviews);

  return <p>Reviews</p>;
};

export default Reviews;
