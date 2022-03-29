import React from "react";
import { connect } from "react-redux";
import {
  Container,
  Checkbox,
  Product,
  ItemContainer,
  Item,
  ButtonLink,
  CheckboxFull,
  CheckboxEmpty,
  ButtonsOptions,
  DotsContainer,
  Dots,
} from "./product-item.styles.js";
import { Button } from "../../button/button.styles";
import axios from "../../../api/api";
import { deleteProducts } from "../../../redux/products/product.actions";

const ProductItem = ({
  productItem: { _id, category, brand, name, description, price, inventory },
  toggleColor,
  checkboxDeleteList,
  deleteProducts,
}) => {
  const [checkbox, setCheckbox] = React.useState(false);
  const [showButtonOptions, setShowButtonsOptions] = React.useState(false);

  const toggleCheckbox = () => {
    setCheckbox(!checkbox);
  };

  /**
   * Delete product from database and redux store
   * @param {array} id
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
    <Container toggleColor={toggleColor}>
      <Checkbox
        onClick={() => {
          toggleCheckbox(_id);
          checkboxDeleteList(_id);
        }}
      >
        {!!checkbox ? <CheckboxFull /> : <CheckboxEmpty />}
      </Checkbox>
      <Product>
        <ItemContainer>
          <Item>{name}</Item>
        </ItemContainer>
        <ItemContainer>
          <Item>{category}</Item>
        </ItemContainer>
        <ItemContainer brand>
          <Item>{brand}</Item>
        </ItemContainer>
        {showButtonOptions && (
          <ButtonsOptions>
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
              <Button color="#035956">Edit</Button>
            </ButtonLink>
            <Button
              color="#fff"
              colorFont="#b80f0a"
              border="1px solid #b80f0a"
              onClick={() => deleteProductApi(_id)}
            >
              Delete
            </Button>
          </ButtonsOptions>
        )}
        <DotsContainer
          onClick={() => setShowButtonsOptions(!showButtonOptions)}
        >
          <Dots />
        </DotsContainer>
      </Product>
    </Container>
  );
};

const mapDispatchToProps = (dispatch) => ({
  deleteProducts: (deleteList) => dispatch(deleteProducts(deleteList)),
});
export default connect(null, mapDispatchToProps)(ProductItem);
