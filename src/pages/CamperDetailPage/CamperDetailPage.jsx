import { useEffect, useState } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { fetchCamperById } from "../../api/api";
import { Bounce, ToastContainer } from "react-toastify";
import Loader from "../../components/Loader/Loader";
import BookingForm from "../../components/BookingForm/BookingForm";
import style from "./CamperDetailPage.module.css";
import CamperRating from "../../components/CamperRating/CamperRating";
import Divider from "../../components/Divider/Divider";
import ImageModal from "../../components/ImageModal/ImageModal";

const CamperDetailPage = () => {
  const [camper, setCamper] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedPhoto, setselectedPhoto] = useState(null);
  const { id } = useParams();

  const openModal = (photo) => {
    setselectedPhoto(photo);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setselectedPhoto(null);
  };

  const navClasses = ({ isActive }) =>
    isActive ? `${style.link} ${style.active}` : style.link;

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
    <div className={style.container}>
      {isLoading && <Loader />}
      {error && <p className={style.message}>{error}</p>}
      {camper && (
        <div>
          <section>
            <div className={style.header}>
              <h2 className={style.title}>{camper.name}</h2>
              <CamperRating
                link="reviews"
                rating={camper.rating}
                reviews={camper.reviews}
                location={camper.location}
              />
              <p className={style.price}>€{camper.price}.00</p>
            </div>
            <ul className={style.gallery}>
              {camper.gallery.map((image, idx) => (
                <li key={`image-${idx}`}>
                  <img
                    className={style.image}
                    src={image.thumb}
                    alt={camper.name}
                    height="312"
                    onClick={() => openModal(image.original)}
                  />
                </li>
              ))}
            </ul>
            <div>
              <p className={style.description}>{camper.description}</p>
            </div>
          </section>
          <div className={style.nav}>
            <NavLink className={navClasses} to="features">
              Features
            </NavLink>
            <NavLink className={navClasses} to="reviews">
              Reviews
            </NavLink>
          </div>
          <Divider width={1312} />
          <div className={style.details}>
            <div className={style.detailsItem}>
              <Outlet context={camper} />
            </div>
            <div className={style.detailsItem}>
              <BookingForm camperName={camper.name} />
            </div>
          </div>
        </div>
      )}
      <ImageModal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        selectedPhoto={selectedPhoto}
      />
      <ToastContainer
        position="top-center"
        autoClose={8000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </div>
  );
};

export default CamperDetailPage;
