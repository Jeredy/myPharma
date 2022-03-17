import React from "react";
import { menuData } from "../../data/menuData";
import { Button } from "../button/button.styles";
import {
  BtnWrap,
  CloseIcon,
  DropdownContainer,
  DropdownLink,
  DropdownName,
  DropdownMenu,
  DropdownWrapper,
  IconContainer,
  Icon,
  Title,
  Logout,
} from "./dropdown.styles";
import { BiLogOut } from "react-icons/bi";
import { connect } from "react-redux";
import { setCurrentAdmin } from "../../redux/admin/admin.actions";
import { useNavigate } from "react-router-dom";

function Dropdown({ setCurrentAdmin, isOpen, toggle }) {
  const [selected, setSelected] = React.useState(0);
  const navigation = useNavigate();

  const toggleSelect = (index) => {
    setSelected(index);
  };

  const logout = () => {
    setCurrentAdmin();
    navigation('/')
  };

  return (
    <DropdownContainer isOpen={isOpen}>
      <DropdownWrapper isOpen={isOpen}>
        <IconContainer onClick={toggle}>
          <CloseIcon />
          <Title isOpen={isOpen}>MyPharma </Title>
        </IconContainer>
        <DropdownMenu>
          {menuData.map((item, index) => (
            <DropdownLink
              to={item.link}
              key={index}
              onClick={() => toggleSelect(index)}
              className={selected === index && "active"}
            >
              <Icon>{item.icon}</Icon>
              <DropdownName isOpen={isOpen}>
                {item.title.toUpperCase()}
              </DropdownName>
            </DropdownLink>
          ))}
        </DropdownMenu>
        <BtnWrap onClick={logout}>
          <Icon>
            <BiLogOut fill={"#18171c"} />
          </Icon>
          <Logout isOpen={isOpen}>LOGOUT</Logout>
        </BtnWrap>
      </DropdownWrapper>
    </DropdownContainer>
  );
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentAdmin: () => dispatch(setCurrentAdmin(null)),
});

export default connect(null, mapDispatchToProps)(Dropdown);
