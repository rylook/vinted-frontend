import "../Header.scss";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container">
      <header>
        <Link to="/">
          <img src={logo} alt="vinted" />
        </Link>

        <input type="text" placeholder="Recherche des articles" />

        <div className="header-nav">
          <button>S'inscrire</button>
          <button>Se connecter</button>
          <button>Vends tes articles</button>
        </div>
      </header>
    </div>
  );
};

export default Header;
