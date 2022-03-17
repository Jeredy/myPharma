import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding-bottom: 4rem;

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
