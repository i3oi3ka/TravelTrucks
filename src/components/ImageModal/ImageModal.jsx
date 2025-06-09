import Modal from "react-modal";
import style from "./ImageModal.module.css";

Modal.setAppElement("#root");

const ImageModal = ({ modalIsOpen, closeModal, selectedPhoto }) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      className={style.modal}
      overlayClassName={style.overlay}
      contentLabel="Imgae Modal"
    >
      <button onClick={closeModal} className={style.closeBtn}>
        x
      </button>
      {selectedPhoto && (
        <div>
          <img src={selectedPhoto} alt="camper photo" className={style.image} />
        </div>
      )}
    </Modal>
  );
};

export default ImageModal;
