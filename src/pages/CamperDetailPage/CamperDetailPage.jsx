import { useEffect, useState } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { fetchCamperById } from "../../api/api";

const CamperDetailPage = () => {
  const [camper, setCamper] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const getCamper = async () => {
      try {
        setIsLoading(true);
        const data = await fetchCamperById(id);
        setCamper(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getCamper();
  }, [id]);

  return (
    <div>
      <NavLink to="features">Features</NavLink>
      <NavLink to="reviews">Reviews</NavLink>
      <Outlet context={camper} />
    </div>
  );
};

export default CamperDetailPage;
