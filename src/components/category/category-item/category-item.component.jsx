import React from "react";
import {
  Container,
  Checkbox,
  Product,
  Item,
  ButtonLink,
} from "./category-item.styles.js";
import { Button } from "../../button/button.styles";
import axios from "../../../api/api";

const CategoryItem = ({
  categoryItem: { _id, description, name },
  checkboxDeleteList,
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
  const deleteCategory = async (id) => {
    try {
      await axios
        .delete("/category/delete", {
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
        <Item>{description}</Item>
        <Item>
          <ButtonLink
            to="add-category"
            state={{
              _id,
              name,
              description,
            }}
          >
            <Button color="green">Edit</Button>
          </ButtonLink>
          <Button
            color="#fff"
            colorFont="#f31"
            border="1px solid #f31"
            onClick={() => deleteCategory(_id)} 
          >
            Delete
          </Button>
        </Item>
      </Product>
    </Container>
  );
};

export default CategoryItem;
