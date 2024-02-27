import superman from "../assets/funkoSuperman.png";
import "./publicityCard.css";

const PublicityCard = () => {
  return (
    <>
      <div className="advertisingCard">
        <div className="advertisingCard__img">
          <img src={superman} alt="Superman funko" />
        </div>
        <div className="advertisingCard__text">
          <p>NEW EXCLUSIVE:</p>
          <p>SUPERMAN</p>
          <p>DC</p>
        </div>
        <div className="advertisingCard__icon">
          <i className="bi bi-arrow-down-circle-fill"></i>
        </div>
      </div>
    </>
  );
};

export default PublicityCard;
