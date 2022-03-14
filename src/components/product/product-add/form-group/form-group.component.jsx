import React from "react";

import { useNavigate } from "react-router-dom";
import FormInput from "../../../form-input/form-input.component";
import axios from "../../../../api/api";

import Form from "react-bootstrap/Form";
import { validateForm, formatForm } from "../form-validation/form-validation";

import "./form-group.styles.scss";

const FormGroup = () => {
  const [product, setProduct] = React.useState({
    sku: "",
    name: "",
    price: "",
    product: "",
    size: "",
    height: "",
    width: "",
    length: "",
  });

  const [error, setError] = React.useState({
    sku: { value: false, message: "" },
    name: { value: false, message: "" },
    price: { value: false, message: "" },
    product: { value: false, message: "" },
    size: { value: false, message: "" },
    height: { value: false, message: "" },
    width: { value: false, message: "" },
    length: { value: false, message: "" },
  });

  const navigate = useNavigate();

  /**
   * Set new values to product on change.
   * @param {string} name
   * @param {string || number} value
   */
  const handleChange = (name, value) => {
    setProduct((prevValues) => {
      return { ...prevValues, [name]: value };
    });
  };

  /**
   * Set new values to select on change and clear all errors and values.
   * @param {object} event
   */
  const handleChangeSelect = (event) => {
    const { value, name } = event.target;

    setProduct((prevValues) => {
      return { ...prevValues, [name]: value };
    });

    Object.keys(product).map((key) => {
      if (!!["height", "width", "length", "size"].find((e) => e === key)) {
        setProduct((prevValues) => {
          return {
            ...prevValues,
            [key]: "",
          };
        });

        setError((prevValues) => {
          return {
            ...prevValues,
            [key]: { value: false, message: "" },
          };
        });
      }
    });
  };

  /**
   * Validade and form the data before submit it to database.
   * @param {object} event
   */
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (validateForm(product, setError)) return;

    const data = formatForm(product);

    try {
      await axios
        .post("/addProduct", JSON.stringify(data))
        .then(() => navigate(-1));
    } catch (error) {
      setError((prevResult) => {
        return {
          ...prevResult,
          sku: {
            value: true,
            message: `This 'sku' already exists.`,
          },
        };
      });
      setProduct((prevValues) => {
        return {
          ...prevValues,
          size: product.size.replace(/[^0-9]/g, ""),
        };
      });
    }
  };

  /**
   * Set an error to specific element in Error variable.
   * @param {string} element
   */
  const toggleSetError = (element) => {
    setError((prevValues) => {
      return { ...prevValues, [element]: false };
    });
  };

  /**
   * Dinamically show the Input based on product value
   * @param {string} { product, size, height, width, length }
   * @returns
   */
  const toggleSize = ({ product, size, height, width, length }) => {
    if (product.length) {
      const data = { label: "", type: "", id: "", subSize: "" };
      switch (product) {
        case "DVD":
          data.label = "Size (in MB)";
          data.id = "DVD";
          data.subSize = "size";
          break;
        case "Book":
          data.label = "Weight (in Kg)";
          data.id = "Book";
          data.subSize = "weight";
          break;
        default:
          data.label = "Dimensions (HxWxL)";
          data.id = "Forniture";
          break;
      }

      return (
        <>
          {product !== "Forniture" ? (
            <div id={data.id}>
              <FormInput
                id={data.subSize}
                label={data.label}
                name="size"
                type="number"
                value={size}
                handleChange={handleChange}
                onClick={() => toggleSetError("size")}
                error={error.size.value}
                errorMessage={error.size.message}
              />
            </div>
          ) : (
            <div id={data.id}>
              **Please provide information in HxWxL format.
              <FormInput
                id="height"
                label="Height (CM)"
                name="height"
                type="number"
                value={height}
                handleChange={handleChange}
                onClick={() => toggleSetError("height")}
                error={error.height.value}
                errorMessage={error.height.message}
              />
              <FormInput
                id="width"
                label="Width (CM)"
                name="width"
                type="number"
                value={width}
                handleChange={handleChange}
                onClick={() => toggleSetError("width")}
                error={error.width.value}
                errorMessage={error.width.message}
              />
              <FormInput
                id="length"
                label="Length (CM)"
                name="length"
                type="number"
                value={length}
                handleChange={handleChange}
                onClick={() => toggleSetError("length")}
                error={error.length.value}
                errorMessage={error.length.message}
              />
            </div>
          )}
        </>
      );
    }
  };

  return (
    <div className="product_form" id="product_form">
      <form onSubmit={handleSubmit}>
        <FormInput
          id="sku"
          label="SKU"
          name="sku"
          type="text"
          maxlength="12"
          value={product.sku}
          handleChange={handleChange}
          onClick={() => toggleSetError("sku")}
          error={error.sku.value}
          errorMessage={error.sku.message}
        />
        <FormInput
          id="name"
          label="Name"
          name="name"
          type="text"
          maxlength="50"
          value={product.name}
          handleChange={handleChange}
          onClick={() => toggleSetError("name")}
          error={error.name.value}
          errorMessage={error.name.message}
        />
        <FormInput
          id="price"
          label="Price ($)"
          name="price"
          type="text"
          value={product.price}
          handleChange={handleChange}
          maxLength="11"
          onClick={() => toggleSetError("price")}
          error={error.price.value}
          errorMessage={error.price.message}
        />
        <label htmlFor="productType">Type Switcher: </label>
        <Form.Select
          id="productType"
          name="product"
          onChange={handleChangeSelect}
          required
          aria-label="Default select example"
        >
          <option value="">Open this select menu</option>
          <option value="DVD">DVD-disc</option>
          <option value="Book">Book</option>
          <option value="Forniture">Forniture</option>
        </Form.Select>
        {toggleSize(product)}
        <button id="submit" type="submit" className="button-submit" />
      </form>
    </div>
  );
};

export default FormGroup;
