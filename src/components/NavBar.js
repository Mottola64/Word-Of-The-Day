import React from "react";
import { NavLink as RRNavLink } from "react-router-dom";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

const NavBar = () => {
  return (
    <Navbar>
      <NavbarBrand href="/">Words App!</NavbarBrand>
      <Nav>
        <NavItem>
          <NavLink tag={RRNavLink} to="/">
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={RRNavLink} to="/word-of-the-day">
            Word Of The Day
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={RRNavLink} to="/words">
            Words
          </NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default NavBar;
