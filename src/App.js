import React from "react";
import { Routes, Route } from "react-router-dom";

import ProductPreview from "./page/product/product-preview/product-preview.component";
import Header from "./components/header/header.component";
import GlobalStyle from "./globalStyles";

// import Footer from "./components/footer/footer.component";
// import ProductAddPage from "./page/product/product-add/product-add.component";

import { Container, SubContainer } from "./App.styles.js";
import Dropdown from "./components/dropdown/dropdown.component";

function App() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container>
      <GlobalStyle />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <SubContainer>
        <Header toggle={toggle} />
        <Routes>
          <Route path="/" element={<ProductPreview />} />
          {/* <Route path="/add-product" element={<ProductAddPage />} /> */}
        </Routes>
      </SubContainer>
      {/* <Footer /> */}
    </Container>
  );
}

export default App;
