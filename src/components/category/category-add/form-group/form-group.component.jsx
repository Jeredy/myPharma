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
      initialValues={{ name: "", description: "", categories: "", brands: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.name) {
          errors.name = "Required";
        }
        if (!values.description) {
          errors.description = "Required";
        }
        if (!values.categories) {
          errors.categories = "Required";
        }
        if (!values.brands) {
          errors.brands = "Required";
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
              type="description"
              name="description"
              handleChange={handleChange}
              onBlur={handleBlur}
              value={values.description}
              error={errors.description}
              errorMessage={errors.description}
              label="Descrição"
            />
          </FormSubContainer>
          <FormSubContainer>
            <FormSelect
              name="brands"
              id="brands"
              label="Marca"
              options={BRAND}
              handleChange={handleChange}
              onBlur={handleBlur}
              error={errors.brands}
              errorMessage={errors.brands}
            />

            <FormSelect
              name="categories"
              id="categories"
              label="Categorias"
              options={BRAND}
              handleChange={handleChange}
              onBlur={handleBlur}
              error={errors.categories}
              errorMessage={errors.categories}
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
  </Container>
);

export default Basic;
