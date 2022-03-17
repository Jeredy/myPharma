import React from "react";
import { connect } from "react-redux";
import {
  Container,
  Subcontainer,
  Image,
  Name,
  Position,
} from "./profile.styles";

const Profile = ({ currentAdmin }) => {
  const { name } = currentAdmin;
  return (
    <Container>
      <Subcontainer>
        <Name>{name}</Name>
        <Position>Admin</Position>
      </Subcontainer>
      <Image src="https://images.pexels.com/photos/842980/pexels-photo-842980.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
    </Container>
  );
};

const mapStateToProps = (state) => ({
  currentAdmin: state.admin.currentAdmin,
});

export default connect(mapStateToProps)(Profile);
