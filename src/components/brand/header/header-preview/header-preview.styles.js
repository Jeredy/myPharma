import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 98%;
  height: 80px;
  margin: 0.5rem 0rem 0.5rem 0rem;
  padding: 1.5rem;

  @media screen and (max-width: 750px) {
    flex-direction: column;
    height: 110px;
    justify-content: center;
  }
`;

export const Title = styled.h2`
  margin-bottom: 1rem;
  display: flex;
  font-size: 1.5rem;
  color: #383838;
  text-shadow: 0px 1px 4px rgba(0, 0, 0, 0.2);
`;

export const ButtonContainer = styled.div`
  display: flex;
`;
