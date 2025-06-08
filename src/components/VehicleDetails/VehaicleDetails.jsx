import Divider from "../Divider/Divider";
import style from "./VehaicleDetails.module.css";

const VehaicleDetails = ({ details }) => {
  return (
    <div className={style.container}>
      <h3 className={style.title}>VehaicleDetails</h3>
      <Divider width={527} />
      <ul className={style.details}>
        {Object.entries(details).map(([key, value], idx) => (
          <li className={style.detail} key={`details-${idx}`}>
            <span>{key}</span>
            <span>{value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VehaicleDetails;
