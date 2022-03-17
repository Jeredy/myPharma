import React from "react";
import { connect } from "react-redux";

import { deleteCategories } from "../../../redux/categories/category.actions";
import { Button } from "../../button/button.styles";
import axios from "../../../api/api";

import {
  Container,
  Checkbox,
  Product,
  Item,
  ButtonLink,
} from "./category-item.styles.js";

const CategoryItem = ({
  categoryItem: { _id, description, name },
  checkboxDeleteList,
  deleteCategories,
}) => {
  const [checkbox, setCheckbox] = React.useState(false);
  const toggleCheckbox = () => {
    setCheckbox(!checkbox);
  };

  /**
   * Delete product from database and from redux state
   * @param {array} id
   * @return boolean
   */
  const deleteCategoryApi = async (id) => {
    try {
      await axios.delete("/category/delete", {
        data: {
          idList: JSON.stringify(id),
        },
      });
      deleteCategories(id);
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
            onClick={() => deleteCategoryApi(_id)}
          >
            Delete
          </Button>
        </Item>
      </Product>
    </Container>
  );
};

const mapDispatchToProps = (dispatch) => ({
  deleteCategories: (deleteList) => dispatch(deleteCategories(deleteList)),
});
export default connect(null, mapDispatchToProps)(CategoryItem);
