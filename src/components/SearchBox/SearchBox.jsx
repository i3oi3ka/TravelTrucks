import { useDispatch } from "react-redux";
import { changeFilters } from "../../redux/filtersSlice";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

const SearchBox = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  console.log("searchParams >>>", searchParams);
  useEffect(() => {
    if (searchParams.size > 0) {
      console.log("equipment:", searchParams.get("equipment")?.split(","));

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
    }
  }, [dispatch, searchParams]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const elements = event.target.elements;
    const location = elements.location.value.trim();

    // Collect all checked equipment checkboxes
    const equipment = [];
    ["AC", "kitchen", "tv", "bathroom"].forEach((name) => {
      if (elements[name] && elements[name].checked) {
        equipment.push(name);
      }
    });

    const transmission = elements.automatic.checked ? "automatic" : "";
    const type = elements.type.value;

    setSearchParams({
      location,
      type,
      transmission,
      equipment: equipment.join(","),
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Location
          <input
            type="text"
            name="location"
            defaultValue={searchParams.get("location") || ""}
          />
        </label>

        <fieldset>
          <legend>Vehicle equipment</legend>
          <label>
            ac
            <input
              type="checkbox"
              name="AC"
              defaultChecked={searchParams.get("equipment")?.includes("ac")}
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
    </div>
  );
};

export default SearchBox;
