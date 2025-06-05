import { useOutletContext } from "react-router-dom";
import Categories from "../Categories/Categories";
import VehaicleDetails from "../VehicleDetails/VehaiccleDetails";

const Features = () => {
  const camper = useOutletContext();
  const details = {
    Form: camper.form,
    Length: camper.length,
    Width: camper.width,
    Height: camper.height,
    Tank: camper.tank,
    Consumption: camper.consumption,
  };
  return (
    <section>
      <Categories camper={camper} />
      <VehaicleDetails details={details} />
    </section>
  );
};

export default Features;
