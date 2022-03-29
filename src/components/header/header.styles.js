import styled from "styled-components/macro";

export const Nav = styled.div`
  display: flex;
  height: 60px;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  padding-right: 3rem;
  width: 100%;
  background: #fff;
  -moz-box-shadow: 3px 1px 4px rgba(0, 0, 0, 0.4);
  -webkit-box-shadow: 3px 1px 4px rgba(0, 0, 0, 0.4);
  box-shadow: 3px 1px 4px rgba(0, 0, 0, 0.4);

  @media screen and (max-width: 600px) {
    padding-left: 1rem;
  }
`;

export const Title = styled.h1`
  color: #484848;
  font-size: clamp(0.9rem, 7vw, 1.8rem);
  font-weight: 600;
  text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -40px;
`;

