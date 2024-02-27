import "./detailsCart.css";
import groot from "../assets/funkoGrud.png";
import logoFunko from "../assets/funkoLogo.png";

const DetailsCart = () => {
  return (
    <div className="all__page">
      <h2>MY CART</h2>
      <div className="data__articles">
        <p>ITEM</p>
        <p>QTY</p>
        <p>TOTAL</p>
      </div>
      <hr />

      <div className="details__articles">
        <div className="details__articles--img">
          <img src={groot} alt="funko groot" />
        </div>
        <div className="details__articles--details">
          <img src={logoFunko} alt="funko logo" />
          <p className="title__article">MARVEL</p>
          <p className="subtitle__article">GROOT THE AVENGER</p>
        </div>
      </div>

      <div className="totals">
        <i className="bi bi-trash3-fill"></i>
        <span>
          <p>1</p>
          <i className="bi bi-arrow-down"></i>
        </span>
        <p className="totals__price">30.00€</p>
      </div>

      <div className="payment">
        <div className="payment--total">
          <p>ESTIMATED TOTAL</p>
          <p>30.30€</p>
        </div>
        <button className="btn-checkout" type="submit">
          SECURE CHECKOUT
        </button>
        <button className="btn-applePay" type="submit">
          <i className="bi bi-apple">Pay</i>
        </button>
      </div>
    </div>
  );
};

export default DetailsCart;
