import { NavLink } from "react-router-dom";

// import "./styles.css";
import "./index.css";

export function NavBar() {
  return (
    <nav className="navbar-container">
      <NavLink to="/">Products</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/details">DetailsProduct</NavLink>
      <NavLink to="/cart">Cart</NavLink>
    </nav>
  );
}
