import React from "react";
import axios from "../../../api/api";
import { CATEGORY } from "../../../data/categoryData";
import ProductItem from "../category-item/category-item.component";

import { Container, TitleContainer, Item } from "./directory.styles";

const Directory = ({ checkboxDeleteList }) => {
  const [products, setProducts] = React.useState([]);

  /**
   * Get products from data base and set it in a variable.
   */
  const getProducts = async () => {
    try {
      await axios.get("/category").then((res) => {
        const data = res.data;
        setProducts(data);
      });
    } catch (e) {
      console.log("error: ", e);
    }
  };

  React.useEffect(() => {
    getProducts();
  }, []);

  return (
    <Container>
      <TitleContainer>
        <Item>Categoria</Item>
        <Item>Descrição</Item>
        <Item>Opções</Item>
      </TitleContainer>
      {products.map((categoryItem) => (
        <ProductItem
          key={categoryItem._id}
          categoryItem={categoryItem}
          checkboxDeleteList={checkboxDeleteList}
        />
      ))}
    </Container>
  );
};

export default Directory;
