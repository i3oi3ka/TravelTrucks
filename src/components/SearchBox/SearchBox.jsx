import { useDispatch } from "react-redux";
import { changeFilters } from "../../redux/filtersSlice";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

import style from "./SearchBox.module.css";
import Divider from "../Divider/Divider";
import { EQUIPMENTS, TYPE } from "../../constans/constans";

const SearchBox = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    dispatch(
      changeFilters({
        location: searchParams.get("location") || "",
        type: searchParams.get("type") || "",
        equipment: searchParams.get("equipment")
          ? searchParams.get("equipment")?.split(",")
          : [],
      })
    );
  }, [dispatch, searchParams]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const elements = event.target.elements;
    const location = elements.location.value.trim();
    const type = elements.type.value;

    // Collect all checked equipment checkboxes
    const equipment = [];
    Object.keys(EQUIPMENTS).forEach((name) => {
      if (elements[name] && elements[name].checked) {
        equipment.push(name);
      }
    });

    setSearchParams({
      location,
      type,
      equipment: equipment.join(","),
    });
  };

  return (
    <section className={style.container}>
      <form onSubmit={handleSubmit}>
        <label className={style.labelLocation}>
          Location
          <div className={style.inputWrapper}>
            <input
              className={style.inputLocation}
              type="text"
              name="location"
              defaultValue={searchParams.get("location") || ""}
              placeholder="City"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={style.iconMap}
              width="20"
              height="20"
              viewBox="0 0 20 20"
            >
              <use href={"/icons.svg#map"}></use>
            </svg>
          </div>
        </label>

        <fieldset className={style.fieldset}>
          <legend className={style.legend}>Vehicle equipment</legend>
          <Divider width={360} />
          <ul className={style.filterList}>
            {Object.keys(EQUIPMENTS).map((equipment, idx) => (
              <li className={style.item} key={`equipment-${idx}`}>
                <input
                  id={`equipment-${idx}`}
                  className={style.visuallyHidden}
                  type="checkbox"
                  name={equipment}
                  defaultChecked={searchParams
                    .get("equipment")
                    ?.includes(equipment)}
                />
                <label
                  className={style.labelCheckbox}
                  htmlFor={`equipment-${idx}`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                  >
                    <use href={`/icons.svg#${equipment}`}></use>
                  </svg>
                  {EQUIPMENTS[equipment]}
                </label>
              </li>
            ))}
          </ul>
        </fieldset>

        <fieldset className={style.fieldsetType}>
          <legend className={style.legend}> Vehicle Type</legend>
          <Divider width={360} />
          <ul className={style.filterList}>
            {Object.keys(TYPE).map((type, idx) => (
              <li className={style.item} key={`type-${idx}`}>
                <input
                  className={style.visuallyHidden}
                  id={`type-${idx}`}
                  type="radio"
                  name="type"
                  value={type}
                  defaultChecked={searchParams.get("type") === type}
                />
                <label className={style.labelCheckbox} htmlFor={`type-${idx}`}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                  >
                    <use href={`/icons.svg#${type}`}></use>
                  </svg>
                  {TYPE[type]}
                </label>
              </li>
            ))}
          </ul>
        </fieldset>
        <button className={style.searchBtn} type="submit">
          Search
        </button>
      </form>
    </section>
  );
};

export default SearchBox;
