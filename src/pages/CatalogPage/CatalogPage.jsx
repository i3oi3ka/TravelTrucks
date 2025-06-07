import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { fetchCampersThunk } from "../../redux/campers/campersOps";
import CampersList from "../../components/CampersList/CampersList";
import SearchBox from "../../components/SearchBox/SearchBox";
import style from "./CatalogPage.module.css";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(fetchCampersThunk());
  }, [dispatch]);

  return (
    <div className={style.container}>
      <SearchBox key={location.key} />
      <CampersList />
    </div>
  );
};

export default CatalogPage;
