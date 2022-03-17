import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;

  @media (max-width: 480px) {
    justify-content: center;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  height: 60px;
  align-items: center;
  justify-content: center;
  width: 98%;
  background: #fff;
  border-radius: 2px;
  -webkit-box-shadow: 0px 0px 15x 0px rgba(0, 0, 0, 0.17);
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.17);
`;

export const Item = styled.p`
  display: flex;
  align-items: center;
  font-size: 1rem;
  color: #686868;
  justify-content: center;
  flex: 33%;
  inline-size: 130px;
  overflow-wrap: break-word;
`;

export const Pagination = styled.div`
  margin-top: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  width: 98%;
  height: 2.8rem;
  border-radius: 0.1rem;
  margin: 2rem 0rem;
  -webkit-box-shadow: 0px 0px 15x 0px rgba(0, 0, 0, 0.17);
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.17);
`;

export const Page = styled.div`
  font-size: ${({ isCcurrentPage }) => (isCcurrentPage ? "1rem" : "0.7rem")};
  display: flex;
  align-items: center;
  justify-content: center;
  background: blue;
  margin: 0rem 0.4rem;
  padding: 0.5rem 0.8rem;
  cursor: pointer;
  border-radius: 0.1rem;
  text-shadow: 0px 1px 4px rgba(0, 0, 0, 0.2);
  transition: .2s ease-in-out;  
  text-transform: capitalize;
  background: ${({ isCcurrentPage }) =>
    isCcurrentPage ? "#fff" : "rgba(24, 23, 28, 0.3)"};
  color: #282828;

  -webkit-box-shadow: 0px 0px 15x 0px rgba(0, 0, 0, 0.17);
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.17);
  &:hover {
    -webkit-box-shadow: 0px 0px 15x 0px rgba(0, 0, 0, 0.17);
    box-shadow: ${({ isCcurrentPage }) =>
      isCcurrentPage ? "0px 0px 5px 0px rgba(0, 0, 0, 0.17)" : "none"};
    color: #111;
    transform: scale(1.1);
  }
`;
