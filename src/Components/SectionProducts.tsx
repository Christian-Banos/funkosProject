import "./SectionProducts.css";
import funkoGoku from "../assets/funkoGoku.png";
import pikachu from "../assets/funkoPIkachu.jpg";
import sasuke from "../assets/funkoSasuke.png";
import groot from "../assets/funkoGrud.png";
// import { products } from "../data/products";

export const SectionProduct = () => {
  return (
    <>
      <main className="mainProduct">
        <div className="mainProduct__card goku">
          <div className="card__iconHeart">
            <i className="bi bi-heart-fill"></i>
          </div>
          <div className="card__img">
            <img src={funkoGoku} alt="" />
          </div>
          <div className="card__DescriptionProduct">
            <p className="card__DescriptionProduct__anime">Dragon ball</p>
            <p className="card__DescriptionProduct__name">Pop! Goku</p>
            <p className="card__DescriptionProduct__price">30.00€</p>
          </div>
          <div className="card__btn">
            <button type="submit">ADD TO CART</button>
          </div>
        </div>
        <div className="mainProduct__card pikachu">
          <div className="card__iconHeart">
            <i className="bi bi-heart-fill"></i>
          </div>
          <div className="card__img">
            <img src={pikachu} alt="pikachu pokemon" />
          </div>
          <div className="card__DescriptionProduct">
            <p className="card__DescriptionProduct__anime">Pokemon</p>
            <p className="card__DescriptionProduct__name">Pikachu</p>
            <p className="card__DescriptionProduct__price">30.00€</p>
          </div>
          <div className="card__btn">
            <button type="submit">ADD TO CART</button>
          </div>
        </div>
        <div className="mainProduct__card sasuke">
          <div className="card__iconHeart">
            <i className="bi bi-heart-fill"></i>
          </div>
          <div className="card__img card__img--sasuke">
            <img src={sasuke} alt="sasuke, naruto shimpuden" />
          </div>
          <div className="card__DescriptionProduct">
            <p className="card__DescriptionProduct__anime">Dragon ball</p>
            <p className="card__DescriptionProduct__name">Pop! Goku</p>
            <p className="card__DescriptionProduct__price">30.00€</p>
          </div>
          <div className="card__btn">
            <button type="submit">ADD TO CART</button>
          </div>
        </div>
        <div className="mainProduct__card groot">
          <div className="card__iconHeart">
            <i className="bi bi-heart-fill"></i>
          </div>
          <div className="card__img">
            <img src={groot} alt="" />
          </div>
          <div className="card__DescriptionProduct">
            <p className="card__DescriptionProduct__anime">Dragon ball</p>
            <p className="card__DescriptionProduct__name">Pop! Goku</p>
            <p className="card__DescriptionProduct__price">30.00€</p>
          </div>
          <div className="card__btn">
            <button type="submit">ADD TO CART</button>
          </div>
        </div>
      </main>
      <div className="loadMore">
        <button type="submit">LOAD MORE</button>
      </div>
    </>
  );
};

export default SectionProduct;

/* ----------------------------------------------------- */
