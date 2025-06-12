import { useOutletContext } from "react-router-dom";
import VehaicleDetails from "../VehicleDetails/VehaicleDetails";
import Categories from "../Categories/Categories";
import style from "./Features.module.css";
import { FORM } from "../../constants/constants";
import { addSpace } from "../../utils/utils";

const Features = () => {
  const camper = useOutletContext();
  const details = {
    Form: FORM[camper.form],
    Length: addSpace(camper.length),
    Width: addSpace(camper.width),
    Height: addSpace(camper.height),
    Tank: addSpace(camper.tank),
    Consumption: addSpace(camper.consumption, 2),
  };
  return (
    <section className={style.container}>
      <Categories camper={camper} />
      <VehaicleDetails details={details} />
    </section>
  );
};

export default Features;
