import styled from "styled-components";

const mainColor = "black";
const subColor = "gray";

export const Container = styled.div`
  position: relative;
  margin: .8rem 0rem;
  height: 4rem;
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
  width: 350px;
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
