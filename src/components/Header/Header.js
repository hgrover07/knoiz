import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="title main_title_home">
      Knoiz
      </Link>
      <hr className="divider" />
    </div>
  );
};

export default Header;
