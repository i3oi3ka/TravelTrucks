import { CATEGORIES } from "../../constans/constans";
import { capitalize } from "../../utils/utils";
import style from "./Categories.module.css";

const Categories = ({ camper }) => {
  const transmission = camper.transmission;
  const engine = camper.engine;
  const categories = Object.keys(CATEGORIES).filter(
    (category) => camper[category]
  );

  return (
    <ul className={style.container}>
      <li className={style.item}>
        <svg
          className={style.icon}
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
        >
          <use href={"/icons.svg#automatic"}></use>
        </svg>
        <p>{capitalize(transmission)}</p>
      </li>
      <li className={style.item}>
        <svg
          className={style.icon}
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
        >
          <use href={"/icons.svg#engine"}></use>
        </svg>
        <p>{capitalize(engine)}</p>
      </li>
      {categories.map((category, idx) => (
        <li key={`categories-${idx}`} className={style.item}>
          <svg
            className={style.icon}
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
          >
            <use href={`/icons.svg#${category}`}></use>
          </svg>
          <p>{CATEGORIES[category]}</p>
        </li>
      ))}
    </ul>
  );
};

export default Categories;
