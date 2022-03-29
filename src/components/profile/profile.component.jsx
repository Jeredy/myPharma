import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentAdmin } from "../../redux/admin/admin.selector";

import {
  Container,
  Subcontainer,
  Image,
  Name,
  Position,
} from "./profile.styles";

const Profile = ({ currentAdmin }) => {
  const [showUserInfo, setShowUserInfo] = React.useState(false);
  const { name } = currentAdmin ?? "test";
  return (
    <Container>
      <Subcontainer showUserInfo={showUserInfo}>
        <Name>{name}</Name>
        <Position>Admin</Position>
      </Subcontainer>
      <Image
        onClick={() =>
          window.innerWidth <= 600 ? setShowUserInfo(!showUserInfo) : {}
        }
        src="https://images.pexels.com/photos/842980/pexels-photo-842980.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      />
    </Container>
  );
};

const mapStateToProps = createStructuredSelector({
  currentAdmin: selectCurrentAdmin,
});

export default connect(mapStateToProps)(Profile);
