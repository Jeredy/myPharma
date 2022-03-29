import styled from "styled-components";

const subColor = "gray";

export const Container = styled.div`
  position: relative;
  margin: 20px 0px;
  width: 100%;

  .error-input {
    border: 1px solid rgb(242, 68, 37);
  }

  .error-label {
    font-size: 13px;
    color: rgb(242, 68, 37);
  }
`;

export const Label = styled.label`
  color: ${subColor};
  font-size: 16px;
  font-weight: normal;
`;

export const Option = styled.option``;

export const Select = styled.select`
  width: ${({ fullscreen }) => (fullscreen ? "50vw" : "100%")};
  background: none;
  background-color: #fff;
  color: ${subColor};
  font-size: 18px;
  display: block;
  border: none;
  border-radius: 0;
  border: 1px solid ${subColor};
  margin-top: 0.5rem;
  height: 35px;
  border-radius: 2px;

  &:focus {
    outline: none;
  }

  @media (max-width: 480px) {
    .form-input {
      width: 100%;
    }
  }
`;
