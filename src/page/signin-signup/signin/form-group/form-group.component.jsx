import React from "react";
import { Formik } from "formik";
import { connect } from "react-redux";

import FormInput from "../../../../components/form-input/form-input.component";
import axios from "../../../../api/api";

import {
  Container,
  FormContainer,
  FormSubContainer,
  Title,
  ForgotPassword,
  ButtonContainer,
  LinkButton,
} from "./form-group.styles";
import { Button } from "../../../../components/button/button.styles";
import { setCurrentAdmin } from "../../../../redux/admin/admin.actions";

const FormGroup = ({ setCurrentAdmin }) => {
  const onSubmit = async (values) => {
    try {
      const {
        data: {
          admin: { _id, name, email },
        },
      } = await axios.post("/signin", values);
      
      setCurrentAdmin({ _id, name, email });
      return console.log("logged successfully");
    } catch (err) {
      console.log(err);
    }
  };

  const submiteClick = () => {
    document.getElementById("button-submit").click();
  };

  return (
    <Container>
      <Title>Acessar Conta</Title>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validate={(values) => {
          const errors = {};
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
      <ForgotPassword>Esqueceu a senha?</ForgotPassword>
      <ButtonContainer>
        <Button
          border="1px solid #282828"
          color="#282828"
          colorFont="#fff"
          fullscreen
          onClick={submiteClick}
        >
          Fazer Login
        </Button>
        <LinkButton to="signup">
          <Button
            border="1px solid #282828"
            color="#fff"
            colorFont="#282828"
            fullscreen
          >
            Criar Conta
          </Button>
        </LinkButton>
      </ButtonContainer>
    </Container>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setCurrentAdmin: (admin) => dispatch(setCurrentAdmin(admin)),
});

export default connect(null, mapDispatchToProps)(FormGroup);
