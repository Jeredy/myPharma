import React from "react";
import { Nav, Title, NavMenu, NavMenuLinks, NavBtn } from "./header.styles";
import { Button } from "../button/button.styles";

import { menuData } from "../../data/menuData";
import Profile from "../profile/profile.component";

function Navbar({ toggle }) {
  return (
    <Nav>
      <Title to="/">Dashboard</Title>
      <NavMenu>
        <Profile />
      </NavMenu>
    </Nav>
  );
}

export default Navbar;
