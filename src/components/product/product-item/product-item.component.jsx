import React from "react";
import { Container, Checkbox, Product, Item } from "./product-item.styles.js";
import { Button } from "../../button/button.styles";

const ProductItem = ({
  productItem: { id, category, brand, name },
  checkboxDeleteList,
}) => {
  const [checkbox, setCheckbox] = React.useState(false);

  const toggleCheckbox = () => {
    setCheckbox(!checkbox);
  };

  return (
    <Container>
      <Checkbox
        onClick={() => {
          toggleCheckbox(id);
          checkboxDeleteList(id);
        }}
      >
        {checkbox ? <span>&#9745;</span> : <span>&#9744;</span>}
      </Checkbox>
      <Product>
        <Item>{name}</Item>
        <Item>{category}</Item>
        <Item>{brand}</Item>
        <Button color="green">Edit</Button>
        <Button color="#fff" colorFont="#f31" border="1px solid #f31">
          Delete
        </Button>
      </Product>
    </Container>
  );
};

export default ProductItem;
