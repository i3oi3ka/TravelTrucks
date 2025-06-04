import { useOutletContext } from "react-router-dom";

const Features = () => {
  const camper = useOutletContext();

  return <p>{camper.id}</p>;
};

export default Features;
