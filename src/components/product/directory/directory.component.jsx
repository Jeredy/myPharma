import React from "react";
import axios from "../../../api/api";
import { PRODUCTS } from "../../../data/productsData";
import ProductItem from "../product-item/product-item.component";

import { Container } from "./directory.styles";

const Directory = ({ checkboxDeleteList }) => {
  const [products, setProducts] = React.useState([]);

  /**
   * Get products from data base and set it in a variable.
   */
  const getProducts = async () => {
    // try {
    //   await axios.get("/").then((res) => {
    //     const data = res.data;
    //     setProducts(data);
    //   });
    // } catch (e) {
    //   console.log("error: ", e);
    // }

    setProducts(PRODUCTS);
  };

  React.useEffect(() => {
    getProducts();
  }, []);

  return (
    <Container>
      {products.map((productItem) => (
        <ProductItem
          key={productItem.id}
          productItem={productItem}
          checkboxDeleteList={checkboxDeleteList}
        />
      ))}
    </Container>
  );
};

export default Directory;
