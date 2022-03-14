import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 100%;

  @media (max-width: 480px) {
    justify-content: center;
  }
`;
