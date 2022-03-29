import React from "react";
import { Nav, Title, NavMenu } from "./header.styles";

import Profile from "../profile/profile.component";

function Navbar() {
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
