import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCampersThunk,
  fetchCampersThunkNextPage,
} from "../../redux/campers/campersOps";
import CampersList from "../../components/CampersList/CampersList";
import SearchBox from "../../components/SearchBox/SearchBox";
import style from "./CatalogPage.module.css";
import { changePage, selectFilters } from "../../redux/filtersSlice";
import { useSearchParams } from "react-router-dom";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);
  const [searchParams, _] = useSearchParams();

  useEffect(() => {
    const urlFilters = {};
    for (const [key, value] of searchParams.entries()) {
      urlFilters[key] = value;
    }

    // Перетворення типів для порівняння
    const filtersToCompare = { ...filters };
    Object.keys(urlFilters).forEach((key) => {
      if (filtersToCompare[key] === true || filtersToCompare[key] === false) {
        urlFilters[key] = urlFilters[key] === "true"; // порівняння булевих значень
      }
    });

    const areFiltersEqual = Object.keys(urlFilters).every(
      (key) => filtersToCompare[key] === urlFilters[key]
    );

    if (searchParams.size !== 0 && !areFiltersEqual) {
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
      <SearchBox />
      <CampersList nextPage={nextPage} />
    </div>
  );
};

export default CatalogPage;
