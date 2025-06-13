import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCampersThunk,
  fetchCampersThunkNextPage,
} from "../../redux/campers/campersOps";
import CampersList from "../../components/CampersList/CampersList";
import SearchBox from "../../components/SearchBox/SearchBox";
import style from "./CatalogPage.module.css";
import {
  changeFilters,
  changePage,
  selectFilters,
} from "../../redux/filtersSlice";
import { useLocation, useSearchParams } from "react-router-dom";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);
  const [searchParams] = useSearchParams();
  const location = useLocation();

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

  useEffect(() => {
    if (
      searchParams.size !== 0 &&
      Object.keys(filters).some(
        (filter) =>
          filter !== "page" &&
          filter !== "limit" &&
          filters[filter] != searchParams.get(filter)
      )
    ) {
      return;
    }

    if (filters.page === 1) {
      dispatch(fetchCampersThunk(filters));
    } else {
      dispatch(fetchCampersThunkNextPage(filters));
    }
  }, [dispatch, filters, searchParams]);

  const nextPage = () => {
    dispatch(changePage(filters.page + 1));
  };

  return (
    <div className={style.container}>
      <SearchBox key={location.key} />
      <CampersList nextPage={nextPage} />
    </div>
  );
};

export default CatalogPage;
