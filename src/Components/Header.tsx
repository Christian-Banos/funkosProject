import "./header.css";
import funkoLogo from "../assets/funkoLogo.png";

const Products = () => {
  return (
    <>
      <header className="header">
        <div className="header__nav">
          <i className="bi bi-list"></i>
        </div>
        <div className="header__logo">
          <img src={funkoLogo} alt="" />
        </div>
        <div className="header__icons">
          <div className="header__magnifyinGlass">
            <i className="bi bi-search"></i>
          </div>
          <div className="header__cart">
            <i className="bi bi-cart"></i>
          </div>
        </div>
      </header>
    </>
  );
};

export default Products;
