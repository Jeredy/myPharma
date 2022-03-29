import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 750px) {
    // flex-direction: column-reverse;
  }
`;
