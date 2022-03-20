import { ProductActionsTypes } from "../src/redux/products/product.types";
import {
  setProducts,
  addProduct,
  updateProduct,
  deleteProducts,
} from "../src/redux/products/product.actions";

describe("Testing Product Actions - Redux", () => {
  describe("Testing Type Values", () => {
    it("Should return a type === ProductActionsTypes.SET_PRODUCTS", () => {
      const response = setProducts([{}]);
      expect(response).toHaveProperty("payload");
      expect(response).toHaveProperty("type");
      expect(response.type).toEqual(ProductActionsTypes.SET_PRODUCTS);
    });

    it("Should return a type === ProductActionsTypes.ADD_PRODUCTS", () => {
      const response = addProduct([{}]);
      expect(response).toHaveProperty("payload");
      expect(response).toHaveProperty("type");
      expect(response.type).toEqual(ProductActionsTypes.ADD_PRODUCT);
    });

    it("Should return a type === ProductActionsTypes.UPDATE_PRODUCT", () => {
      const response = updateProduct([{}]);
      expect(response).toHaveProperty("payload");
      expect(response).toHaveProperty("type");
      expect(response.type).toEqual(ProductActionsTypes.UPDATE_PRODUCT);
    });

    it("Should return a type === ProductActionsTypes.DELETE_PRODUCTS", () => {
      const response = deleteProducts([{}]);
      expect(response).toHaveProperty("payload");
      expect(response).toHaveProperty("type");
      expect(response.type).toEqual(ProductActionsTypes.DELETE_PRODUCTS);
    });
  });
});
