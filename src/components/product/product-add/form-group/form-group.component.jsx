import React from "react";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";

import FormInput from "../../../form-input/form-input.component";
import FormSelect from "../../../form-select/form-select.component";
import axios from "../../../../api/api";
import {
  addProduct,
  updateProduct,
} from "../../../../redux/products/product.actions";

import {
  Container,
  FormContainer,
  FormSubContainer,
} from "./form-group.styles";

const ProductFormGroup = ({
  state,
  brands,
  categoriesList,
  addProduct,
  updateProduct,
}) => {
  const { _id, category, brand, name, description, price, inventory } =
    state ?? "";

  const navigate = useNavigate();

  const onSubmit = async (values) => {
    values.price = parseFloat(values.price);
    values.inventory = parseFloat(values.inventory);

    try {
      if (!!state) {
        values._id = _id;

        await axios.put("/product/update", values);
        updateProduct(values);
        return navigate(-1);
      }

      const { data } = await axios.post("/product/store", values);
      addProduct(data.response);

      navigate(-1);
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
          if (values.description.length > 100) {
            errors.description = "Max length 100 Characters";
          }
          if (!values.category) {
            errors.category = "Required";
          }
          if (values.category === "Selecionar..") {
            errors.category = "Required";
          }
          if (!values.brand) {
            errors.brand = "Required";
          }
          if (values.brand === "Selecionar..") {
            errors.brand = "Required";
          }
          if (!values.price) {
            errors.price = "Required";
          }
          if (typeof values.price !== "number") {
            errors.price = "Price must be a number.";
          }
          if (!values.inventory) {
            errors.inventory = "Required";
          }
          if (typeof values.inventory !== "number") {
            errors.inventory = "Inventory must be a number.";
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
                type="text"
                name="name"
                handleChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                error={errors.name}
                errorMessage={errors.name}
                label="Nome"
              />
              <FormInput
                type="text"
                name="description"
                handleChange={handleChange}
                onBlur={handleBlur}
                value={values.description}
                error={errors.description}
                errorMessage={errors.description}
                label="Descri????o"
              />{" "}
              <FormInput
                type="number"
                name="price"
                handleChange={handleChange}
                onBlur={handleBlur}
                value={values.price}
                error={errors.price}
                errorMessage={errors.price}
                label="Pre??o"
              />
            </FormSubContainer>
            <FormSubContainer>
              <FormSelect
                name="brand"
                id="brand"
                label="Marca"
                options={brands}
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
                options={categoriesList}
                selected={category}
                handleChange={handleChange}
                onBlur={handleBlur}
                error={errors.category}
                errorMessage={errors.category}
              />
              <FormInput
                type="number"
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

const mapStateToProps = (state) => ({
  brands: state.brand.brands,
  categoriesList: state.category.categories,
});

const mapDispatchToProps = (dispatch) => ({
  addProduct: (product) => dispatch(addProduct(product)),
  updateProduct: (product) => dispatch(updateProduct(product)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductFormGroup);
