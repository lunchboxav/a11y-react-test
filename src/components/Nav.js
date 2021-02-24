import React from "react";
import { Link } from "react-router-dom";
import { styled } from "../stitches.config";
import List from "./List";

const SideNav = styled("div", {
  backgroundColor: "gainsboro",
  fontSize: "13px",
  lineHeight: "1",
  fontWeight: 500,
  paddingLeft: "16px",
  paddingRight: "16px",
  border: "0",
  height: "100vh",
  width: "96px"
});

function Nav() {
  return (
    <SideNav>
      <List>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/notes">Notes</Link>
        </li>
      </List>
    </SideNav>
  );
}

export default Nav
