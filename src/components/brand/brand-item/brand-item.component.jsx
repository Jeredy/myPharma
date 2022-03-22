import React from "react";
import { connect } from "react-redux";

import axios from "../../../api/api";
import { deleteBrands } from "../../../redux/brands/brand.actions";

import { Button } from "../../button/button.styles";

import {
  Container,
  Checkbox,
  Product,
  Item,
  ButtonLink,
} from "./brand-item.styles.js";

const BrandItem = ({
  brandItem: { _id, name },
  checkboxDeleteList,
  deleteBrands,
  toggleColor,
}) => {
  const [checkbox, setCheckbox] = React.useState(false);

  const toggleCheckbox = () => {
    setCheckbox(!checkbox);
  };

  /**
   * Delete brand from database and redux store
   * @param {array} id
   * @return boolean
   */
  const deleteBrandApi = async (id) => {
    try {
      await axios.delete("/brand/delete", {
        data: {
          idList: JSON.stringify(id),
        },
      });
      deleteBrands(id);
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
            <Button color="#035956">Edit</Button>
          </ButtonLink>
          <Button
            color="#fff"
            colorFont="#b80f0a"
            border="1px solid #b80f0a"
            onClick={() => deleteBrandApi(_id)}
          >
            Delete
          </Button>
        </Item>
      </Product>
    </Container>
  );
};

const mapDispatchToProps = (dispatch) => ({
  deleteBrands: (deleteList) => dispatch(deleteBrands(deleteList)),
});
export default connect(null, mapDispatchToProps)(BrandItem);
