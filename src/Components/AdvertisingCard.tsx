import "./advertisingCard.css";
import superman from "../assets/funkoSuperman.png";
import groot from "../assets/funkoGrud.png";

const AdvertisingCard = () => {
  return (
    <div className="all_page">
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

      <hr />

      <div className="card__img">
        <div className="card__img--imgAndIcon">
          <img src={groot} alt="groot funko" />
          <i className="bi bi-suit-heart-fill"></i>
        </div>

        <div className="radio-input">
          <input type="radio" id="value-1" name="value-radio" value="value-1" />
          <div className="circle"></div>
          <input
            className=""
            type="radio"
            id="value-2"
            name="value-radio"
            value="value-2"
          />
          <div className="circle"></div>
          <input type="radio" id="value-3" name="value-radio" value="value-3" />
          <div className="circle"></div>
        </div>
      </div>

      <div className="detailsCard">
        <div className="detailsCard__text">
          <p>MARVEL</p>
          <p>GROOT THE AVENGER</p>
        </div>
        <div className="detailsCard__price">
          <p>EXCLUSIVE</p>
          <p>30.00€</p>
        </div>
      </div>

      {/* button */}
      <div className="details__button">
        <button type="submit">ADD TO CART</button>
      </div>
    </div>
  );
};

export default AdvertisingCard;
