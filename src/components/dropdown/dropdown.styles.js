import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export const DropdownContainer = styled.div`
  width: ${({ isOpen }) => (isOpen ? "60px" : "180px")};
  height: 100vh;
  background: #fff;
  display: grid;
  align-items: flex-start;
  transition: 0.4s ease-in-out;
  -moz-box-shadow: 0 4px 4px rgba(0, 0, 0, 0.4);
  -webkit-box-shadow: 0 4px 4px rgba(0, 0, 0, 0.4);
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.4);
  jussify-content: center;
`;

export const IconContainer = styled.div`
  position: flex;
  height: 50px;
  font-size: 2rem;
  cursor: poiter;
  outline: none;
  padding-left: 1rem;
`;

export const Icon = styled.span`
  display: flex;
  align-items: center;
  margin: 0rem 1rem 0rem 0.5rem;
  height: 30px;
`;

export const CloseIcon = styled(FaBars)`
  fill: #18171c;
  display: block;
  cursor: pointer;
  transform: translateY(55%);
`;

export const DropdownWrapper = styled.div`
  display: flex;
  width: ${({ isOpen }) => (isOpen ? "60px" : "180px")};
  flex-direction: column;
`;

export const DropdownMenu = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-bottom: 1rem;
`;

export const DropdownLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: #18171c;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  font-weight: 500;
  text-shadow: 0px 1px 4px rgba(0, 0, 0, 0.2);
  margin: 0.5rem 0.5rem;
  height: 45px;

  &.active {
    background: rgba(24, 23, 28, 0.3);

    &:before {
      content: ".";
      color: #18171c;
      width: 6px;
      height: 100%;
      background: #18171c;
    }
  }

  &:hover {
    color: #000d1a;
  }
`;

export const DropdownName = styled.p`
  opacity: ${({ isOpen }) => (isOpen ? "0" : "1")};
  margin-left: -0.5rem;
  transition: 0.2s ease-in-out;
  font-size: 0.8rem;
`;
export const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;