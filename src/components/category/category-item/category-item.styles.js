import styled from "styled-components";
import { Link } from "react-router-dom";
import { BsFillCheckSquareFill } from "react-icons/bs";
import { ImCheckboxUnchecked } from "react-icons/im";
import { BiDotsVertical } from "react-icons/bi";

export const Container = styled.div`
  position: relative;
  display: flex;
  width: 98%;
  height: 55px;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 2px;
  -webkit-box-shadow: 0px 0px 3x 0px rgba(0, 0, 0, 0.17);
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.17);
  margin-top: 0.1rem;
  background: ${({ toggleColor }) => (toggleColor ? "#f7f7f7" : "#fff")};
`;

export const ButtonLink = styled(Link)`
  text-decoration: none;
`;

export const Checkbox = styled.div`
  position: absolute;
  top: 18px;
  margin: auto;
  left: 15px;

  span {
    font-size: 20px;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const Product = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-left: 2rem;

  div:nth-child(2) {
    flex: 60%;
  }

  &:hover {
    p {
      color: #282828;
    }
  }
`;

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 40%;

  @media screen and (max-width: 600px) {
    flex: 44%;
  }
`;

export const Item = styled.p`
  font-size: 0.9rem;
  inline-size: 90%;
  color: #484848;
  text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
  text-transform: capitalize;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const ButtonsOptions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  position: absolute;
  right: 3rem;
  bottom: 0.5;
  filter: drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.3));
  border-radius: 0.1rem;
  padding: 0.3rem;
`;

export const CheckboxFull = styled(BsFillCheckSquareFill)`
  display: flex;
  width: 1rem;
  height: 1rem;
  fill: #184d47;
`;

export const CheckboxEmpty = styled(ImCheckboxUnchecked)`
  display: flex;
  width: 1rem;
  height: 1rem;
  fill: #777;
`;

export const DotsContainer = styled.div`
  display: flex;
  flex: 5%;
`;

export const Dots = styled(BiDotsVertical)`
  display: flex;
  height: 1rem;
  width: 1rem;
  fill: #777;
  cursor: pointer;
`;
