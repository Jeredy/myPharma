import React from "react";
import { Formik } from "formik";

import FormInput from "../../../form-input/form-input.component";
import FormSelect from "../../../form-select/form-select.component";

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
        touched,
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
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              error={errors.name}
              errorMessage={errors.name}
              label="Name"
            />
            <FormInput
              type="description"
              name="description"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.description}
              error={errors.description}
              errorMessage={errors.description}
              label="Description"
            />
          </FormSubContainer>
          <FormSubContainer>
            <FormSelect name="categories" id="categories" label="Categoria">
              <option value="">Categoria</option>
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </FormSelect>

            <FormSelect name="brands" id="brands" label="Brands">
              <option value="">Categoria</option>
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </FormSelect>
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
