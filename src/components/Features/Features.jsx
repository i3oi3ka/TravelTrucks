import { useOutletContext } from "react-router-dom";
import VehaicleDetails from "../VehicleDetails/VehaiccleDetails";
import Categories from "../Categories/Categories";

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
