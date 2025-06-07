import { Link, useNavigate } from "react-router-dom";
import style from "./HomePage.module.css";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <section className={style.container}>
      <div>
        <h1 className={style.title}>Campers of your dreams</h1>
        <h2 className={style.slogan}>
          You can find everything you want in our catalog
        </h2>
        <button className={style.HeroBtn} onClick={() => navigate("/catalog")}>
          View Now
        </button>
      </div>
    </section>
  );
};

export default HomePage;
