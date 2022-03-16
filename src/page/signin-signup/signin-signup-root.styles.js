import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  background: rgba(143, 138, 166, 0.1);
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const Header = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  height: 60px;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  -moz-box-shadow: 0 2px 3px rgba(0, 0, 0, 0.4);
  -webkit-box-shadow: 0 2px 3px rgba(0, 0, 0, 0.4);
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.4);
`;

export const Title = styled.p`
  font-size: 1.2rem;
  color: #383838;
  text-shadow: 0px 1px 4px rgba(0, 0, 0, 0.2);
`;
