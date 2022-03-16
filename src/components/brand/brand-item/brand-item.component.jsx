import React from "react";
import {
  Container,
  Checkbox,
  Product,
  Item,
  ButtonLink,
} from "./brand-item.styles.js";
import axios from "../../../api/api";

import { Button } from "../../button/button.styles";

const ProductItem = ({ categoryItem: { _id, name }, checkboxDeleteList }) => {
  const [checkbox, setCheckbox] = React.useState(false);

  const toggleCheckbox = () => {
    setCheckbox(!checkbox);
  };

  /**
   * Delete product from database
   * @param {array} checkboxId
   * @return boolean
   */
  const deleteProduct = async (id) => {
    try {
      await axios
        .delete("/brand/delete", {
          data: {
            idList: JSON.stringify(id),
          },
        })
        .then(() => window.location.reload());
    } catch (error) {
      console.log({ error });
    }
    return true;
  };

  return (
    <Container>
      <Checkbox
        onClick={() => {
          toggleCheckbox(_id);
          checkboxDeleteList(_id);
        }}
      >
        {checkbox ? <span>&#9745;</span> : <span>&#9744;</span>}
      </Checkbox>
      <Product>
        <Item>{name}</Item>
        <Item>
          <ButtonLink
            to="add-brand"
            state={{
              _id,
              name,
            }}
          >
            <Button color="green">Edit</Button>
          </ButtonLink>
          <Button
            color="#fff"
            colorFont="#f31"
            border="1px solid #f31"
            onClick={() => deleteProduct(_id)} 
          >
            Delete
          </Button>
        </Item>
      </Product>
    </Container>
  );
};

export default ProductItem;
