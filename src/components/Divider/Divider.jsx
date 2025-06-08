import style from "./Divider.module.css";

const Divider = ({ width }) => {
  return (
    <svg
      className={style.divider}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height="2"
      viewBox={`0 0 ${width} 2`}
    >
      <use href={"/icons.svg#divider"}></use>
    </svg>
  );
};

export default Divider;
