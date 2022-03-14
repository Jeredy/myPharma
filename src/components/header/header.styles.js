import styled, { css } from "styled-components/macro";
import { Link } from "react-router-dom";
import { SiArlo } from "react-icons/si";

export const Nav = styled.nav`
  height: 55px;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  z-index: 100;
  position: fixed;
  width: 100%;
  background: red;

  transition: all 0.5s ease;

  &.active {
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    background-color: rgba(255, 255, 255, 0.5);
    -webkit-filter: drop-shadow(0 1px 8px rgba(0, 0, 0, 0.1));
    filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.1));
  }

  @media screen and (max-width: 768px) {
    max-width: 100vw;
    min-width: 100vw;
  }
`;

const NavLink = css`
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.5s ease;
  text-shadow: 0px 2px 10px rgba(0, 0, 0, 1);

  &.active {
    color: #18171c;
    text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
  }
`;

export const LogoIcon = styled(SiArlo)`
  font-size: 2rem;
  fill: white;
  margin-right: 0.5rem;
  transition: all 0.5s ease;

  &.active {
    fill: #18171c;
  }
`;

export const Logo = styled(Link)`
  ${NavLink}
  margin-left: -1rem;
  font-style: italic;
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -40px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavMenuLinks = styled(Link)`
  ${NavLink}
`;

export const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
