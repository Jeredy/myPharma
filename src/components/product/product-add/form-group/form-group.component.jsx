import React from "react";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";

import FormInput from "../../../form-input/form-input.component";
import FormSelect from "../../../form-select/form-select.component";
import { BRAND } from "../../../../data/brandData";
import axios from "../../../../api/api";

import {
  Container,
  FormContainer,
  FormSubContainer,
} from "./form-group.styles";

const Basic = ({ state }) => {
  const { _id, category, brand, name, description, price, inventory } =
    state ?? "";

  const navigate = useNavigate();

  const onSubmit = (values) => {
    try {
      if (!!state) {
        values._id = _id;
        return axios.put("/product/update", values);
      }

      axios.post("/product/store", values);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <Formik
        initialValues={{
          name: name,
          description: description,
          category: category,
          brand: brand,
          price: price,
          inventory: inventory,
        }}
        validate={(values) => {
          const errors = {};
          if (!values.name) {
            errors.name = "Required";
          }
          if (!values.description) {
            errors.description = "Required";
          }
          if (!values.category) {
            errors.category = "Required";
          }
          if (!values.brand) {
            errors.brand = "Required";
          }
          if (!values.price) {
            errors.price = "Required";
          }
          if (!values.inventory) {
            errors.inventory = "Required";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          onSubmit(values);
          setSubmitting(false);
          navigate(-1);
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
              />{" "}
              <FormInput
                type="price"
                name="price"
                handleChange={handleChange}
                onBlur={handleBlur}
                value={values.price}
                error={errors.price}
                errorMessage={errors.price}
                label="Preço"
              />
            </FormSubContainer>
            <FormSubContainer>
              <FormSelect
                name="brand"
                id="brand"
                label="Marca"
                options={BRAND}
                selected={brand}
                handleChange={handleChange}
                onBlur={handleBlur}
                error={errors.brand}
                errorMessage={errors.brand}
              />

              <FormSelect
                name="category"
                id="category"
                label="Categorias"
                options={BRAND}
                selected={category}
                handleChange={handleChange}
                onBlur={handleBlur}
                error={errors.category}
                errorMessage={errors.category}
              />
               <FormInput
                type="inventory"
                name="inventory"
                handleChange={handleChange}
                onBlur={handleBlur}
                value={values.inventory}
                error={errors.inventory}
                errorMessage={errors.inventory}
                label="Estoque"
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
};

export default Basic;
