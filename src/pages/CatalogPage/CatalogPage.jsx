import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCampersThunk } from "../../redux/campers/campersOps";
import CampersList from "../../components/CampersList/CampersList";
import SearchBox from "../../components/SearchBox/SearchBox";
import { useLocation } from "react-router-dom";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(fetchCampersThunk());
  }, [dispatch]);

  return (
    <div>
      <SearchBox key={location.key} />
      <CampersList />
    </div>
  );
};

export default CatalogPage;
