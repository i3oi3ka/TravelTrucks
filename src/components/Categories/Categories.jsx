import { nanoid } from "@reduxjs/toolkit";

const Categories = ({ transmission, engine, categories }) => {
  return (
    <ul>
      <li>{transmission}</li>
      <li>{engine}</li>
      {categories.map((category) => (
        <li key={nanoid()}>{category}</li>
      ))}
    </ul>
  );
};

export default Categories;
