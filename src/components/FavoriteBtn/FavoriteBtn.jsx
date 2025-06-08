import { useDispatch, useSelector } from "react-redux";
import {
  addFavorite,
  deleteFavorite,
  selectFavoriteList,
} from "../../redux/favoriteSlice";

import style from "./FavoriteBtn.module.css";

const FavoriteBtn = ({ id }) => {
  const dispatch = useDispatch();
  const favoriteList = useSelector(selectFavoriteList);

  const handleAddFavoriteBtn = (id) => {
    dispatch(addFavorite(id));
  };

  const handleDeleteFavoriteBtn = (id) => {
    dispatch(deleteFavorite(id));
  };

  return (
    <>
      {favoriteList.includes(id) ? (
        <button type="button" onClick={() => handleDeleteFavoriteBtn(id)}>
          <svg
            className={style.addBtn}
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="24"
            viewBox="0 0 26 24"
          >
            <use href={"/icons.svg#hearth"}></use>
          </svg>
        </button>
      ) : (
        <button type="button" onClick={() => handleAddFavoriteBtn(id)}>
          <svg
            className={style.deleteBtn}
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="24"
            viewBox="0 0 26 24"
          >
            <use href={"/icons.svg#hearth"}></use>
          </svg>
        </button>
      )}
    </>
  );
};

export default FavoriteBtn;
