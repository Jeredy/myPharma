import React from "react";
import axios from "../../../api/api";
import { BRAND } from "../../../data/brandData";
import ProductItem from "../brand-item/brand-item.component";

import { Container, TitleContainer, Item } from "./directory.styles";

const Directory = ({ checkboxDeleteList }) => {
  const [brands, setBrands] = React.useState([]);

  /**
   * Get brands from data base and set it in a variable.
   */
  const getProducts = async () => {
    try {
      await axios.get("/brand").then((res) => {
        const data = res.data;
        setBrands(data);
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
        <Item>Marca</Item>
        <Item>Opções</Item>
      </TitleContainer>
      {brands.map((categoryItem) => (
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
