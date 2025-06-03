import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCampersThunk } from "../../redux/campers/campersOps";
import CampersList from "../../components/CampersList/CampersList";

const CatalogPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCampersThunk());
  }, [dispatch]);
  return (
    <div>
      <CampersList />
    </div>
  );
};

export default CatalogPage;
