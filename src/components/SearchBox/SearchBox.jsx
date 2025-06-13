import { useDispatch } from "react-redux";
import style from "./SearchBox.module.css";
import Divider from "../Divider/Divider";
import { EQUIPMENTS, TYPE } from "../../constants/constants";
import { clearCampers } from "../../redux/campers/campersSlice";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { changeFilters } from "../../redux/filtersSlice";

const SearchBox = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const newFilters = {
      page: 1,
      location: searchParams.get("location") || "",
      form: searchParams.get("form") || "",
      AC: searchParams.get("AC") || "",
      transmission: searchParams.get("transmission") || "",
      kitchen: searchParams.get("kitchen") || "",
      TV: searchParams.get("TV") || "",
      bathroom: searchParams.get("bathroom") || "",
    };
    dispatch(changeFilters(newFilters));
  }, [dispatch, searchParams]);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(clearCampers());
    const elements = event.target.elements;
    const location = elements.location.value.trim();
    const form = elements.form.value;
    setSearchParams({
      location,
      form,
      AC: elements.AC.checked ? true : "",
      transmission: elements.transmission.checked ? "automatic" : "",
      kitchen: elements.kitchen.checked ? true : "",
      TV: elements.TV.checked ? true : "",
      bathroom: elements.bathroom.checked ? true : "",
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
                  defaultChecked={searchParams.get(equipment)}
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
                  name="form"
                  value={type}
                  defaultChecked={searchParams.get("form") === type}
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
