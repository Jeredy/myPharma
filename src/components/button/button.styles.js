import styled from "styled-components";

export const Button = styled.div`
  background: ${({ color }) => (color ? color : "#17181c")};
  white-space: nowrap;
  outline: none;
  border: none;
  margin: 0.2rem;
  min-width: 70px;
  height: 35px;
  max-width: 180px;
  text-decoration: none;
  transition: 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  color: ${({ colorFont }) => (colorFont ? colorFont : "#fff")};
  border: ${({ border }) => (border ? border : "none")};
  font-size: 0.8rem;
  font-weight: 400;
  text-shadow: 0px 1px 1px rgba(255, 255, 255, 0.2);
  border-radius: 2px;

  &:hover {
    background: ${({ border, colorFont }) => (border ? colorFont : "#fff")};
    border: ${({ border, color }) => !border && `1px solid ${color}`};
    color: ${({ colorFont, color }) => (color ? color : colorFont)};
    cursor: pointer;
  }
`;
