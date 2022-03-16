import React from "react";
import { Formik } from "formik";

import FormInput from "../../../../components/form-input/form-input.component";
import axios from "../../../../api/api";

import {
  Container,
  FormContainer,
  FormSubContainer,
  Title,
  ForgotPassword,
  ButtonContainer,
} from "./form-group.styles";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../../components/button/button.styles";

const FormGroup = () => {
  const navigate = useNavigate();

  const onSubmit = (values) => {
    try {
      return axios.put("/signin", values);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <Title>Novo Adminstrador</Title>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        validate={(values) => {
          const errors = {};
          if (!values.name) {
            errors.name = "Required";
          }
          if (!values.email) {
            errors.email = "Required";
          }
          if (!values.password) {
            errors.password = "Required";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          onSubmit(values);
          setSubmitting(false);
        }}
      >
        {({
          values,
          errors,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <FormContainer onSubmit={handleSubmit}>
            <FormSubContainer>
            <FormInput
                type="name"
                name="name"
                handleChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                error={errors.name}
                errorMessage={errors.name}
                label="Nome"
              />
              <FormInput
                type="email"
                name="email"
                handleChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                error={errors.email}
                errorMessage={errors.email}
                label="E-mail"
              />
              <FormInput
                type="password"
                name="password"
                handleChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                error={errors.password}
                errorMessage={errors.password}
                label="Senha"
              />
            </FormSubContainer>
            <button
              id="button-submit"
              type="submit"
              disabled={isSubmitting}
              style={{ display: "none" }}
            ></button>
          </FormContainer>
        )}
      </Formik>
      <ButtonContainer>
        <Button
          border="1px solid #282828"
          color="#282828"
          colorFont="#fff"
          fullscreen
        >
          Registrar
        </Button>
        <Button
          border="1px solid #282828"
          color="#fff"
          colorFont="#282828"
          fullscreen
          onClick={() => navigate(-1)}
        >
          Já Tenho Conta
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default FormGroup;