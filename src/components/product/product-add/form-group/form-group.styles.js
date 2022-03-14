import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 98%;
  height: 100%;
  align-items: center;
  justify-content: center;
  padding-bottom: 50px;
  padding-top: 40px;
  background: #fff;
  -moz-box-shadow: 0 4px 4px rgba(0, 0, 0, 0.4);
  -webkit-box-shadow: 0 4px 4px rgba(0, 0, 0, 0.4);
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.4);

  @media (max-width: 480px) {
    min-width: 100%;
    padding: 0px 25px;
  }
`;

export const FormContainer = styled.form`
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;  
  max-width: 1000px;
`;

export const FormSubContainer = styled.div`
  display: flex;
  height: 100%;
  width: 50%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
