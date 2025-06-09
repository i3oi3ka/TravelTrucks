import { useSelector } from "react-redux";
import {
  selectError,
  selectFilteredCampers,
  selectIsLoading,
} from "../../redux/campers/campersSlice";
import Loader from "../Loader/Loader";
import Camper from "../Camper/Camper";
import style from "./CampersList.module.css";
import { PER_PAGE } from "../../constans/constans";
import { useEffect, useState } from "react";
import ImageModal from "../ImageModal/ImageModal";

const CampersList = () => {
  const [campersOnPage, setCampersOnPage] = useState(PER_PAGE);
  const campers = useSelector(selectFilteredCampers);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedPhoto, setselectedPhoto] = useState(null);

  const openModal = (photo) => {
    setselectedPhoto(photo);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setselectedPhoto(null);
  };

  useEffect(() => {
    setCampersOnPage(PER_PAGE);
  }, [campers]);

  return (
    <div className={style.container}>
      {isLoading && <Loader />}
      {error && <p className={style.message}>{error}</p>}
      {campers.length > 0 ? (
        <div>
          <ul className={style.camperList}>
            {campers.slice(0, campersOnPage).map((camper) => (
              <li key={camper.id} className={style.camperItem}>
                <Camper camper={camper} openModal={openModal} />
              </li>
            ))}
          </ul>
          {campers.length > campersOnPage && (
            <button
              className={style.loadMoreBtn}
              onClick={() => setCampersOnPage(campersOnPage + PER_PAGE)}
            >
              Load more
            </button>
          )}
        </div>
      ) : (
        <div>
          {!isLoading && <p className={style.message}>No trucks available.</p>}
        </div>
      )}
      <ImageModal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        selectedPhoto={selectedPhoto}
      />
    </div>
  );
};

export default CampersList;
