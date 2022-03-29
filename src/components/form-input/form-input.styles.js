import styled from "styled-components";

const subColor = "gray";

export const Container = styled.div`
  position: relative;
  margin: ${({ small }) => (small ? "0rem" : "0.8rem 0rem")};
  height: ${({ small }) => (small ? "2rem" : "4rem")};
  width: 100%;

  .error-input {
    border: 1px solid rgb(242, 68, 37);
  }
`;

export const ErrorLabel = styled.div`
  font-size: 13px;
  color: rgb(242, 68, 37);
`;

export const Label = styled.label`
  color: ${subColor};
  font-size: 16px;
  font-weight: normal;
`;

export const Input = styled.input`
  height: 4rem;
  width: ${({ fullscreen }) => (fullscreen ? "50vw" : "100%")};
  background: none;
  background-color: #fff;
  color: ${subColor};
  font-size: ${({ small }) => (small ? ".8rem" : "1.2rem")};
  display: block;
  border: none;
  border: ${({ noBorder }) => (noBorder ? "none" : `1px solid ${subColor}`)};
  margin-top: ${({ small }) => (small ? "0rem" : ".5rem")};
  height: 35px;
  border-radius: 0.1rem;
  padding-left: 0.5rem;
  border-radius: 0.1rem;

  &:focus {
    outline: none;
  }

  @media (max-width: 750px) {
    width: 100%;
  }
`;
