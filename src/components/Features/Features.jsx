import { useOutletContext } from "react-router-dom";
import VehaicleDetails from "../VehicleDetails/VehaicleDetails";
import Categories from "../Categories/Categories";
import style from "./Features.module.css";
import { FORM } from "../../constans/constans";

const Features = () => {
  const camper = useOutletContext();
  const details = {
    Form: FORM[camper.form],
    Length: camper.length,
    Width: camper.width,
    Height: camper.height,
    Tank: camper.tank,
    Consumption: camper.consumption,
  };
  return (
    <section className={style.container}>
      <Categories camper={camper} />
      <VehaicleDetails details={details} />
    </section>
  );
};

export default Features;
