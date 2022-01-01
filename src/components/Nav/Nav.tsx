import React from "react";
import NavMenu from "../NavMenu/NavMenu";
import { NavLink } from "react-router-dom";
import TopNav from "./components/TopNav/TopNav";
import BottomNav from "./components/BottomNav/BottomNav";
import { Container } from "react-bootstrap";
import { NavWrapper } from "./navStyles";

const Nav = () => {
  return (
    <NavWrapper className="nav">
      <Container>
        <TopNav />

        <BottomNav />
      </Container>

      {/* <NavMenu />

      <div className="sign-in">
        <NavLink to="/login">Login</NavLink>

        <NavLink to="/register">Register</NavLink>
      </div> */}
    </NavWrapper>
  );
};

export default Nav;
