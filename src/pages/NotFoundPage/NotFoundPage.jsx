import style from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <section className={style.container}>
      <div>
        <h1 className={style.title}>404</h1>
        <h2 className={style.slogan}>Page not found</h2>
      </div>
    </section>
  );
};

export default NotFoundPage;
