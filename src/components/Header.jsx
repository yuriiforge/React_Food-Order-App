import logo from "../assets/logo.jpg";

const Header = () => {
  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="A reastaurant" />
        <h1>ReactFood</h1>
      </div>
      <nav>
        <button>CART (0)</button>
      </nav>
    </header>
  );
};

export default Header;
