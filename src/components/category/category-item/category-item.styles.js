import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  position: relative;
  display: flex;
  width: 98%;
  height: 60px;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 2px;
  -webkit-box-shadow: 0px 0px 15x 0px rgba(0, 0, 0, 0.17);
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.17);
  margin-top: 0.1rem;
  background: #fff;

  @media (max-width: 480px) {
    min-width: 170px;
    margin: 10px 15px;
  }
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

  p:last-child {
    justify-content: flex-end;
    padding: .8rem;
  }
`;

export const Item = styled.p`
  display: flex;
  align-items: center;
  font-size: .9rem;
  color: #282828;
  justify-content: center;
  flex: 33%;  
  inline-size: 130px;
  max-lines: 1;
`;
