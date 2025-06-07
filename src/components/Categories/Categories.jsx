import style from "./Categories.module.css";

const categoriesList = {
  ac: "AC",
  bathroom: "Bathroom",
  kitchen: "Kitchen",
  TV: "TV",
  radio: "Radio",
  refregirator: "Refregirator",
  microwave: "Microwave",
  gas: "Gas",
  water: "Water",
};

const Categories = ({ camper }) => {
  const transmission = camper.transmission;
  const engine = camper.engine;
  const categories = Object.keys(categoriesList).filter(
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
          <use href={"/src/assets/icons.svg#automatic"}></use>
        </svg>
        <p>{transmission}</p>
      </li>
      <li className={style.item}>
        <svg
          className={style.icon}
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
        >
          <use href={"/src/assets/icons.svg#engine"}></use>
        </svg>
        <p>{engine}</p>
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
            <use href={`/src/assets/icons.svg#${category}`}></use>
          </svg>
          <p>{categoriesList[category]}</p>
        </li>
      ))}
    </ul>
  );
};

export default Categories;
