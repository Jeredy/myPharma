import React from "react";
import { Formik } from "formik";

import FormInput from "../../../form-input/form-input.component";
import FormSelect from "../../../form-select/form-select.component";
import { BRAND } from "../../../../data/brandData";

import {
  Container,
  FormContainer,
  FormSubContainer,
} from "./form-group.styles";

const Basic = () => (
  <Container>
    <Formik
      initialValues={{ name: "", description: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.name) {
          errors.name = "Required";
        }else if (values.name.length > 30) {
          errors.name = "Max length 30 characters";
        }
        if (!values.description) {
          errors.description = "Required";
        } else if (values.description.length > 100) {
          errors.description = "Max length 100 characters";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
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
            type="description"
            name="description"
            handleChange={handleChange}
            onBlur={handleBlur}
            value={values.description}
            error={errors.description}
            errorMessage={errors.description}
            label="Descrição"
          />
          <button
            id="button-submit"
            type="submit"
            disabled={isSubmitting}
            style={{ display: "none" }}
          ></button>
        </FormContainer>
      )}
    </Formik>
  </Container>
);

export default Basic;
