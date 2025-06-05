const VehaicleDetails = ({ details }) => {
  return (
    <div>
      <h3>VehaicleDetails</h3>
      <ul>
        {Object.entries(details).map(([key, value], idx) => (
          <li key={idx}>
            {key} {value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VehaicleDetails;
