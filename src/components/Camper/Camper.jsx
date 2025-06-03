const Camper = ({ camper }) => {
  return (
    <div>
      <img src={camper.gallery[0].thumb}></img>
      <div>
        <div>
          <h3>{camper.name}</h3>
          <p>{camper.price}</p>
        </div>
        <div>
          <p>{camper.rating}</p>
          <p>{camper.location}</p>
        </div>
        <div>
          <p>{camper.description}</p>
        </div>
        <ul></ul>
      </div>
    </div>
  );
};

export default Camper;
