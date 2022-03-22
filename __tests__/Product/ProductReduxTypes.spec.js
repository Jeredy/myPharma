import { ProductActionsTypes } from "../../src/redux/products/product.types";

describe("Testing Product Types - Redux", () => {
  it("Should return a action type SET_PRODUCTS", () => {
    expect(ProductActionsTypes.SET_PRODUCTS).toEqual("SET_PRODUCTS");
  });

  it("Should return a action type DELETE_PRODUCTS", () => {
    expect(ProductActionsTypes.DELETE_PRODUCTS).toEqual("DELETE_PRODUCTS");
  });

  it("Should return a action type ADD_PRODUCT", () => {
    expect(ProductActionsTypes.ADD_PRODUCT).toEqual("ADD_PRODUCT");
  });

  it("Should return a action type UPDATE_PRODUCT", () => {
    expect(ProductActionsTypes.UPDATE_PRODUCT).toEqual("UPDATE_PRODUCT");
  });

  it("Should return a action type SET_PRODUCTS_TOTAL_PAGES", () => {
    expect(ProductActionsTypes.SET_PRODUCTS_TOTAL_PAGES).toEqual(
      "SET_PRODUCTS_TOTAL_PAGES"
    );
  });

  it("Should return a action type SET_PRODUCTS_PAGE", () => {
    expect(ProductActionsTypes.SET_PRODUCTS_PAGE).toEqual("SET_PRODUCTS_PAGE");
  });

  it("Should return a action type SET_PRODUCTS_SEARCH_NAME", () => {
    expect(ProductActionsTypes.SET_PRODUCTS_SEARCH_NAME).toEqual(
      "SET_PRODUCTS_SEARCH_NAME"
    );
  });

  it("Should return a action type SET_PRODUCTS_SEARCH_BRAND", () => {
    expect(ProductActionsTypes.SET_PRODUCTS_SEARCH_BRAND).toEqual(
      "SET_PRODUCTS_SEARCH_BRAND"
    );
  });

  it("Should return a action type SET_PRODUCTS_SEARCH_CATEGORY", () => {
    expect(ProductActionsTypes.SET_PRODUCTS_SEARCH_CATEGORY).toEqual(
      "SET_PRODUCTS_SEARCH_CATEGORY"
    );
  });

  it("Should return a action type SET_PRODUCTS_CLEAR_SEARCH", () => {
    expect(ProductActionsTypes.SET_PRODUCTS_CLEAR_SEARCH).toEqual(
      "SET_PRODUCTS_CLEAR_SEARCH"
    );
  });
});
