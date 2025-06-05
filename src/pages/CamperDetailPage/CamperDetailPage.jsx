import { useEffect, useState } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { fetchCamperById } from "../../api/api";
import Loader from "../../components/Loader/Loader";
import BookingForm from "../../components/BookingForm/BookingForm";

const CamperDetailPage = () => {
  const [camper, setCamper] = useState(null);
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
      {isLoading && <Loader />}
      {error && <p>error</p>}
      {camper && (
        <div>
          <section>
            <div>
              <h2>{camper.name}</h2>
              <p>{camper.rating}</p>
              <p>{camper.location}</p>
              <p>{camper.price}</p>
            </div>
            <ul>
              {camper.gallery.map((image, idx) => (
                <li key={idx}>
                  <img src={image.thumb} alt={camper.name} />
                </li>
              ))}
            </ul>
            <div>
              <p>{camper.description}</p>
            </div>
          </section>
          <div>
            <NavLink to="features">Features</NavLink>
            <NavLink to="reviews">Reviews</NavLink>
            <Outlet context={camper} />
          </div>
          <BookingForm />
        </div>
      )}
    </div>
  );
};

export default CamperDetailPage;
