import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css"
import searchIcon from "../../Assets/Images/searchImg.svg"
import logo from "../../Assets/Images/logo.jpg"
const MyNavbar = () => {
  return (
    <div className="nav-container">
      <Navbar className="mainNav" light expand="md" style={{width:'100%'}}>
        <NavbarBrand href="/"><img src={logo} alt="/" style={{width:'60px', height:'40px'}} /></NavbarBrand>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink className="NavLink" href="/films">Films</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="NavLink" href="/series">Series</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="NavLink" href="/cartoons">Cartoons</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="NavLink"href="/actions">Actions</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="NavLink" href="/horros">Horrors</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="NavLink" href="/romance">Romance</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="NavLink"href="/war">War</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="NavLink" href="/tranding">Tranding</NavLink>
          </NavItem>
          <NavItem className="last">
            <NavLink href="/contact"><img src={searchIcon} style={{width:'20px', height:'20px'}} alt="/" /></NavLink>
          </NavItem>
        </Nav>
      </Navbar>

    </div>
  );
};

export default MyNavbar;
