import { nanoid } from "@reduxjs/toolkit";

const categoriesList = [
  "AC",
  "bathroom",
  "kitchen",
  "TV",
  "radio",
  "refregirator",
  "microwave",
  "gas",
  "water",
];

const Categories = ({ camper }) => {
  const transmission = camper.transmission;
  const engine = camper.engine;
  const categories = categoriesList.filter((category) => camper[category]);

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
