import React from "react";
import axios from "../../../api/api";
import ProductItem from "../product-item/product-item.component";

import { Container, TitleContainer, Item } from "./directory.styles";

const Directory = ({ checkboxDeleteList }) => {
  const [products, setProducts] = React.useState([]);

  /**
   * Get products from data base and set it in a variable.
   */
  const getProducts = async () => {
    try {
      await axios.get("/product").then((res) => {
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
        <Item>Produto</Item>
        <Item>Categoria</Item>
        <Item>Marca</Item>
        <Item>Opções</Item>
      </TitleContainer>
      {products.map((productItem) => (
        <ProductItem
          key={productItem._id}
          productItem={productItem}
          checkboxDeleteList={checkboxDeleteList}
        />
      ))}
    </Container>
  );
};

export default Directory;
