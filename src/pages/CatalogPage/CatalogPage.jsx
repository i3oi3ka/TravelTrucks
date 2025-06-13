import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCampersThunk,
  fetchCampersThunkNextPage,
} from "../../redux/campers/campersOps";
import CampersList from "../../components/CampersList/CampersList";
import SearchBox from "../../components/SearchBox/SearchBox";
import style from "./CatalogPage.module.css";
import { changePage, selectFilters } from "../../redux/filtersSlice";
import { useLocation } from "react-router-dom";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);
  const location = useLocation();

  const isFirstRender = useRef(true);
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (filters.page === 1) {
      dispatch(fetchCampersThunk(filters));
    } else {
      dispatch(fetchCampersThunkNextPage(filters));
    }
  }, [dispatch, filters]);

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
