import React from "react";
import { connect } from "react-redux";
import {
  Container,
  Checkbox,
  Product,
  Item,
  ButtonLink,
} from "./product-item.styles.js";
import { Button } from "../../button/button.styles";
import axios from "../../../api/api";
import { deleteProducts } from "../../../redux/products/product.actions";

const ProductItem = ({
  productItem: { _id, category, brand, name, description, price, inventory },
  checkboxDeleteList,
  deleteProducts,
}) => {
  const [checkbox, setCheckbox] = React.useState(false);

  const toggleCheckbox = () => {
    setCheckbox(!checkbox);
  };

  /**
   * Delete product from database
   * @param {array} checkboxId
   * @return boolean
   */
  const deleteProductApi = async (id) => {
    try {
      await axios.delete("/product/delete", {
        data: {
          idList: JSON.stringify(id),
        },
      });
      deleteProducts(id);
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
        <Item>{category}</Item>
        <Item>{brand}</Item>
        <Item>
          <ButtonLink
            to="add-product"
            state={{
              _id,
              category,
              brand,
              name,
              description,
              price,
              inventory,
            }}
          >
            <Button color="green">Edit</Button>
          </ButtonLink>
          <Button
            color="#fff"
            colorFont="#f31"
            border="1px solid #f31"
            onClick={() => deleteProductApi(_id)}
          >
            Delete
          </Button>
        </Item>
      </Product>
    </Container>
  );
};

const mapDispatchToProps = (dispatch) => ({
  deleteProducts: (deleteList) => dispatch(deleteProducts(deleteList)),
});
export default connect(null, mapDispatchToProps)(ProductItem);
