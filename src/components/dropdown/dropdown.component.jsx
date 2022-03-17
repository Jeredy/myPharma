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

function Dropdown({ isOpen, toggle }) {
  const [selected, setSelected] = React.useState(0);

  const toggleSelect = (index) => {
    setSelected(index);
  };

  const clearStorage = () => {
    localStorage.removeItem('@admin')
  }

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
        <BtnWrap onClick={clearStorage}>
          <Icon>
            <BiLogOut fill={"#18171c"}/>
          </Icon>
          <Logout isOpen={isOpen}>LOGOUT</Logout>
        </BtnWrap>
      </DropdownWrapper>
    </DropdownContainer>
  );
}

export default Dropdown;
