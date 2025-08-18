import { useContext } from "react";
import logo from "../assets/logo.jpg";
import Button from "./UI/Button";
import CartContext from "../store/CartContext";
import UserProgressContext from "../store/UserProgressContext";

const Header = () => {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity;
  }, 0);

  const handleShowCart = () => {
    userProgressCtx.showCart();
  };

  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="A reastaurant" />
        <h1>ReactFood</h1>
      </div>
      <nav>
        <Button textOnly onClick={handleShowCart}>
          CART ({totalCartItems})
        </Button>
      </nav>
    </header>
  );
};

export default Header;
