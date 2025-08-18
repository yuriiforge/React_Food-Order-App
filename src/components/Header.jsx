import logo from "../assets/logo.jpg";
import Button from "./UI/Button";

const Header = () => {
  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="A reastaurant" />
        <h1>ReactFood</h1>
      </div>
      <nav>
        <Button textOnly>CART (0)</Button>
      </nav>
    </header>
  );
};

export default Header;
