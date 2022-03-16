import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background: #fff;
  -moz-box-shadow: 0 2px 3px rgba(0, 0, 0, 0.4);
  -webkit-box-shadow: 0 2px 3px rgba(0, 0, 0, 0.4);
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.4);
  border-radius: 0.1rem;
  margin-top: 3rem;

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
`;

export const FormSubContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.p`
  display: flex;
  font-size: 1.6rem;
  color: #383838;
  text-shadow: 0px 1px 4px rgba(0, 0, 0, 0.2);
  margin-bottom: 1rem;
`;

export const ForgotPassword = styled.p`
  display: flex;
  font-size: 0.9rem;
  color: #484848;
  text-shadow: 0px 1px 4px rgba(0, 0, 0, 0.2);
  margin: 0rem 0rem 2rem auto;
  text-decoration: none;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 80px;
  width: 100%;
  margin-top: 2rem;
`;

export const LinkButton = styled(Link)`
  text-decoration: none;
  width: 102%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
