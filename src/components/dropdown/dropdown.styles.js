import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const LinkContainer = css`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: #18171c;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  text-shadow: 0px 1px 4px rgba(0, 0, 0, 0.2);
  height: 45px;
  margin: 0.2rem 0.5rem;
  z-index: 999;

  @media screen and (max-width: 900px) {
    margin: 0rem;
    height: 50px;
  }
`;

export const DropdownContainer = styled.div`
  width: ${({ isOpen }) => (isOpen ? "72px" : "180px")};
  padding: .6rem 0rem;
  background: #fff;
  display: flex;
  align-items: flex-start;
  transition .2s ease-in-out;
  -moz-box-shadow: 0 4px 4px rgba(0, 0, 0, 0.4);
  -webkit-box-shadow: 0 4px 4px rgba(0, 0, 0, 0.4);
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.4);
  min-height: 100vh;
  z-index: 999;

  @media screen and (max-width: 900px) {
    position: absolute;
    left: 0;
    bottom: 0rem;
    min-height: 50px;
    min-width: 100%;
    padding: 0rem 0rem;
    justify-content: center;

    -moz-box-shadow: 0 -1px 4px rgba(0, 0, 0, 0.4);
    -webkit-box-shadow: 0 -1px 4px rgba(0, 0, 0, 0.4);
    box-shadow: 0 -1px -4px rgba(0, 0, 0, 0.4);
  }
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  font-size: 2rem;
  cursor: poiter;
  outline: none;
  padding-left: 1rem;

  @media screen and (max-width: 900px) {
    padding-left: 0rem;
  }
`;

export const Title = styled.span`
  color: #282828;
  text-shadow: 0px 1px 4px rgba(0, 0, 0, 0.17);
  opacity: ${({ isOpen }) => (isOpen ? "0" : "1")};
  display: ${({ isOpen }) => (isOpen ? "none" : "flex")};

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

export const Icon = styled.span`
  display: flex;
  align-items: center;
  margin: 0rem 1rem 0rem 0.5rem;
  height: 30px;

  @media screen and (max-width: 900px) {
    margin: 0rem;
  }
`;

export const CloseIcon = styled(FaBars)`
  fill: #18171c;
  display: flex;
  cursor: pointer;
  margin-right: 0.5rem;

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

export const DropdownWrapper = styled.div`
  position: fixed;
  display: flex;
  max-width: ${({ isOpen }) => (isOpen ? "60px" : "180px")};
  height: 100%;
  flex-direction: column;

  @media screen and (max-width: 900px) {
    flex-direction: row;
  }
`;

export const DropdownMenu = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 1rem 0rem;
  max-width: ${({ isOpen }) => (isOpen ? "50px" : "150px")};

  @media screen and (max-width: 900px) {
    flex-direction: row;
    width: 100%;
    height: 50px;
    margin: 0rem;
  }
`;

export const DropdownLink = styled(Link)`
  ${LinkContainer}
  width: ${({ isOpen }) => (isOpen ? "50px" : "150px")};
  position: relative;

  &.active {
    background: rgba(24, 23, 28, 0.3);

    &:before {
      display; block;
      content: "";
      color: #18171c;
      width: 6px;
      height: 100%;
      background: #18171c;
    }
  }

  &:hover {
    box-shadow: 0px 1px 2px #999;
  }

  @media screen and (max-width: 900px) {
    align-items:center;
    justify-content: center;

    &.active {
      background: rgba(24, 23, 28, 0.3);

      &:before {
        display; block;
        content: "";
        color: #18171c;
        height: 6px;
        background: #18171c;
        position: absolute;
        width: 50px;
        bottom: 0;
      }
    }
  }
`;

export const DropdownName = styled.p`
  opacity: ${({ isOpen }) => (isOpen ? "0" : "1")};
  margin-left: -0.5rem;
  transition: 0.2s ease-in-out;
  font-size: 0.8rem;

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

export const BtnWrap = styled.div`
  ${LinkContainer}
  width: ${({ isOpen }) => (isOpen ? "50px" : "150px")};

  margin: auto 0.5rem 1.5rem 0.5rem;
  background: rgba(24, 23, 28, 0.2);

  &:hover {
    box-shadow: 0px 1px 2px #999;
  }

  @media screen and (max-width: 900px) {
    min-width: 45px;
    align-items: center;
    justify-content: center;
    margin: 0rem;
    background: transparent;
  }
`;

export const Logout = styled.p`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: #18171c;
  transition: 0.2s ease-in-out;
  text-shadow: 0px 1px 4px rgba(0, 0, 0, 0.2);
  opacity: ${({ isOpen }) => (isOpen ? "0" : "1")};
  margin-left: -0.5rem;
  margin-right: 0.6rem;
  transition: 0.2s ease-in-out;
  font-size: 0.8rem;

  @media screen and (max-width: 900px) {
    display: none;
  }
`;
