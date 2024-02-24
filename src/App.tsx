/* import "./App.css"; */
import { Routes, Route } from "react-router-dom";
import Products from "./Pages/Products/Products";
import Login from "./Pages/Login/LoginPage";
import DetailsProduct from "../src/Pages/DetailsProduct/DetailsProduct";
import Cart from "../src/Pages/Cart/Cart";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Products />} />
      <Route path="login" element={<Login />} />
      <Route path="details" element={<DetailsProduct />} />
      <Route path="cart" element={<Cart />} />
    </Routes>
  );
}

export default App;
