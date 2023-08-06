import { Navbar, NavbarBrand } from "reactstrap";
import { useNavigate } from "react-router-dom";
import "./index.css";
const Navbarcontainer = () => {
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(id);
  };

  return (
    <Navbar className="my-2" color="dark" dark style={{ color: "white" }}>
      <NavbarBrand href="/">
        <img src="https://allplay.uz/logo.svg" alt="logo" />
      </NavbarBrand>

      <div className="logan">
        <p onClick={() => handleClick("/")}>Films</p>
        <p onClick={() => handleClick("cartoon")}>Cartoon</p>
        <p onClick={() => handleClick("science")}>Science Fiction</p>
        <p onClick={() => handleClick("fantasy")}>Fantasy</p>
      </div>
    </Navbar>
  );
};

export default Navbarcontainer;
