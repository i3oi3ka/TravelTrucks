import { useSelector } from "react-redux";
import {
  selectError,
  selectFilteredCampers,
  selectIsLoading,
} from "../../redux/campers/campersSlice";
import Loader from "../Loader/Loader";
import Camper from "../Camper/Camper";
import style from "./CampersList.module.css";

const CampersList = () => {
  const campers = useSelector(selectFilteredCampers);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  return (
    <div>
      {isLoading && <Loader />}
      {error && <p>error</p>}
      {campers.length > 0 && (
        <ul className={style.camperList}>
          {campers.map((camper) => (
            <li key={camper.id} className={style.camperItem}>
              <Camper camper={camper} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CampersList;
