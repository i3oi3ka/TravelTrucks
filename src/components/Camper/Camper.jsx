import { useDispatch, useSelector } from "react-redux";
import {
  addFavorite,
  deleteFavorite,
  selectFavoriteList,
} from "../../redux/favoriteSlice";
import Categories from "../Categories/Categories";
import { Navigate, useNavigate } from "react-router-dom";

const categoriesList = [
  "AC",
  "bathroom",
  "kitchen",
  "TV",
  "radio",
  "refregirator",
  "microwave",
  "gas",
  "water",
];

const Camper = ({ camper }) => {
  const dispatch = useDispatch();
  const favoriteList = useSelector(selectFavoriteList);
  const navigate = useNavigate();
  const handleAddFavoriteBtn = (id) => {
    dispatch(addFavorite(id));
  };

  const handleDeleteFavoriteBtn = (id) => {
    dispatch(deleteFavorite(id));
  };

  return (
    <div>
      <img src={camper.gallery[0].thumb} alt={camper.description}></img>
      <div>
        <div>
          <h3>{camper.name}</h3>
          <p>{camper.price}</p>
          {favoriteList.includes(camper.id) ? (
            <button
              type="button"
              onClick={() => handleDeleteFavoriteBtn(camper.id)}
            >
              DeleteFavorite
            </button>
          ) : (
            <button
              type="button"
              onClick={() => handleAddFavoriteBtn(camper.id)}
            >
              AddFavorite
            </button>
          )}
        </div>
        <div>
          <p>{camper.rating}</p>
          <p>{camper.location}</p>
        </div>
        <div>
          <p>{camper.description}</p>
        </div>
        <Categories
          transmission={camper.transmission}
          engine={camper.engine}
          categories={categoriesList.filter((category) => camper[category])}
        />
        <button onClick={() => navigate(`${camper.id}`)}>Show more</button>
      </div>
    </div>
  );
};

export default Camper;
