import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  fetchCampersThunk,
  fetchCampersThunkNextPage,
} from "../../redux/campers/campersOps";
import CampersList from "../../components/CampersList/CampersList";
import SearchBox from "../../components/SearchBox/SearchBox";
import style from "./CatalogPage.module.css";
import { changePage, selectFilters } from "../../redux/filtersSlice";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const filters = useSelector(selectFilters);

  useEffect(() => {
    if (filters.page === 1) {
      dispatch(fetchCampersThunk());
      return;
    }
    dispatch(fetchCampersThunkNextPage(filters));
  }, [dispatch, filters]);

  const nextPage = () => {
    dispatch(changePage());
  };

  return (
    <div className={style.container}>
      <SearchBox key={location.key} />
      <CampersList nextPage={nextPage} />
    </div>
  );
};

export default CatalogPage;
