import React from "react";
import { NavLink } from "react-router-dom";
import { styled } from "../stitches.config";
import List from "./List";

const SideNav = styled("div", {
  backgroundColor: "#cadff4",
  fontSize: "13px",
  lineHeight: "1",
  fontWeight: 500,
  paddingLeft: "16px",
  paddingRight: "16px",
  border: "0",
  height: "100vh",
  width: "96px",
});

const NavItem = styled(NavLink, {
  color: "black",
  fontSize: "20px",
  padding: "8px 0",
  textDecoration: "none",

  ":hover": {
    color: "darkblue",
  }
});

const NavList = styled("li", {
  margin: "16px 0"
})

function Nav() {
  return (
    <SideNav>
      <List>
        <NavList>
          <NavItem to="/">Home</NavItem>
        </NavList>
        <NavList>
          <NavItem to="/about">About</NavItem>
        </NavList>
        <NavList>
          <NavItem to="/notes">Notes</NavItem>
        </NavList>
      </List>
    </SideNav>
  );
}

export default Nav
