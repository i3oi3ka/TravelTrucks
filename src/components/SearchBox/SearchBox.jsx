import { useDispatch, useSelector } from "react-redux";
import { changeFilters, selectFilters } from "../../redux/filtersSlice";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

import style from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    dispatch(
      changeFilters({
        location: searchParams.get("location") || "",
        type: searchParams.get("type") || "",
        transmission: searchParams.get("transmission") || "",
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
    const transmission = elements.automatic.checked ? "automatic" : "";
    const type = elements.type.value;

    // Collect all checked equipment checkboxes
    const equipment = [];
    ["AC", "kitchen", "TV", "bathroom"].forEach((name) => {
      if (elements[name] && elements[name].checked) {
        equipment.push(name);
      }
    });

    setSearchParams({
      location,
      type,
      transmission,
      equipment: equipment.join(","),
    });
  };

  return (
    <section className={style.container}>
      <form onSubmit={handleSubmit}>
        <label>
          Location
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={style.iconMap}
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <use href={"icons.svg#map"}></use>
          </svg>
          <input
            type="text"
            name="location"
            defaultValue={searchParams.get("location") || ""}
            placeholder="City"
          />
        </label>

        <fieldset>
          <legend>Vehicle equipment</legend>

          <label>
            ac
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={style.iconMap}
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <use href={"/src/assets/icons.svg#wind"}></use>
            </svg>
            <input
              type="checkbox"
              name="AC"
              defaultChecked={searchParams.get("equipment")?.includes("AC")}
            />
          </label>
          <label>
            automatic
            <input
              type="checkbox"
              name="automatic"
              defaultChecked={searchParams.get("transmission") === "automatic"}
            />
          </label>
          <label>
            kitchen
            <input
              type="checkbox"
              name="kitchen"
              defaultChecked={searchParams
                .get("equipment")
                ?.includes("kitchen")}
            />
          </label>
          <label>
            tv
            <input
              type="checkbox"
              name="TV"
              defaultChecked={searchParams.get("equipment")?.includes("TV")}
            />
          </label>
          <label>
            bathroom
            <input
              type="checkbox"
              name="bathroom"
              defaultChecked={searchParams
                .get("equipment")
                ?.includes("bathroom")}
            />
          </label>
        </fieldset>

        <fieldset>
          <legend>Vehicle Type</legend>
          <label>
            Van
            <input
              type="radio"
              name="type"
              value="panelTruck"
              defaultChecked={searchParams.get("type") === "panelTruck"}
            />
          </label>
          <label>
            Fully integrated
            <input
              type="radio"
              name="type"
              value="fullyIntegrated"
              defaultChecked={searchParams.get("type") === "fullyIntegrated"}
            />
          </label>
          <label>
            Alcove
            <input
              type="radio"
              name="type"
              value="alcove"
              defaultChecked={searchParams.get("type") === "alcove"}
            />
          </label>
        </fieldset>
        <button type="submit">Search</button>
      </form>
    </section>
  );
};

export default SearchBox;
