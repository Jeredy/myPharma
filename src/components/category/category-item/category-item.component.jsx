import React from "react";
import { Container, Checkbox, Product, Item } from "./category-item.styles.js";
import { Button } from "../../button/button.styles";

const ProductItem = ({
  categoryItem: { id, description, name },
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
        <Item>{description}</Item>
        <Item>
          <Button color="green">Edit</Button>
          <Button color="#fff" colorFont="#f31" border="1px solid #f31">
            Delete
          </Button>
        </Item>
      </Product>
    </Container>
  );
};

export default ProductItem;
