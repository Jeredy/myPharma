import React from "react";
import {
  Container,
  Subcontainer,
  Image,
  Name,
  Position,
} from "./profile.styles";

const Profile = () => {
  return (
    <Container>
      <Subcontainer>
        <Name>Andre Rodrigues</Name>
        <Position>Admin</Position>
      </Subcontainer>
      <Image src="https://images.pexels.com/photos/842980/pexels-photo-842980.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
    </Container>
  );
};

export default Profile;
