import { useContext } from "react";
import logo from "../assets/logo.jpg";
import Button from "./UI/Button";
import CartContext from "../store/CartContext";

const Header = () => {
  const cartCtx = useContext(CartContext);

  const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity;
  }, 0);

  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="A reastaurant" />
        <h1>ReactFood</h1>
      </div>
      <nav>
        <Button textOnly>CART ({totalCartItems})</Button>
      </nav>
    </header>
  );
};

export default Header;
