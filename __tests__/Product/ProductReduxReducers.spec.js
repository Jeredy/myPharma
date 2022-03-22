import { ProductActionsTypes } from "../../src/redux/products/product.types";
import reducer, {
  INITIAL_STATE,
} from "../../src/redux/products/product.resources";

describe("Testing Product Reducers - Redux", () => {
  it("Should return the INITIAL_STATE with no changes", () => {
    expect(reducer(undefined, {})).toEqual({
      products: null,
      pageNumber: 0,
      totalPageNumbers: 0,
      searchName: "",
      searchCategory: "",
      searchBrand: "",
      clearSearch: "",
    });
  });
  describe("Testing Functions", () => {
    beforeEach(() => {
      INITIAL_STATE.products = [
        {
          _id: "123456",
          name: "product 1",
          description: "description 1",
          category: "category 1",
          brand: "brand 1",
          price: 28.99,
          inventory: 45,
        },
      ];
    });

    afterEach(() => {
      INITIAL_STATE.products = null;
    });

    it("Should set the values to 'products' on INITIAL_STATE", () => {
      expect(
        reducer(undefined, {
          type: ProductActionsTypes.SET_PRODUCTS,
          payload: {
            _id: "123456",
            name: "product 1",
            description: "description 1",
            category: "category 1",
            brand: "brand 1",
            price: 28.99,
            inventory: 45,
          },
        })
      ).toEqual({
        products: null,
        pageNumber: 0,
        totalPageNumbers: 0,
        searchName: "",
        searchCategory: "",
        searchBrand: "",
        clearSearch: "",
        products: {
          _id: "123456",
          name: "product 1",
          description: "description 1",
          category: "category 1",
          brand: "brand 1",
          price: 28.99,
          inventory: 45,
        },
      });
    });

    it("Should return the INITIAL_STATE with the product added to 'products'", () => {
      expect(
        reducer(INITIAL_STATE, {
          type: ProductActionsTypes.ADD_PRODUCT,
          payload: {
            _id: "654321",
            name: "product 2",
            description: "description 2",
            category: "category 2",
            brand: "brand 2",
            price: 30.99,
            inventory: 57,
          },
        })
      ).toEqual({
        products: null,
        pageNumber: 0,
        totalPageNumbers: 0,
        searchName: "",
        searchCategory: "",
        searchBrand: "",
        clearSearch: "",
        products: [
          {
            _id: "123456",
            name: "product 1",
            description: "description 1",
            category: "category 1",
            brand: "brand 1",
            price: 28.99,
            inventory: 45,
          },
          {
            _id: "654321",
            name: "product 2",
            description: "description 2",
            category: "category 2",
            brand: "brand 2",
            price: 30.99,
            inventory: 57,
          },
        ],
      });
    });

    it("Should return the INITIAL_STATE with update the specific product", () => {
      expect(
        reducer(INITIAL_STATE, {
          type: ProductActionsTypes.UPDATE_PRODUCT,
          payload: {
            _id: "123456",
            name: "product 2",
            description: "description 2",
            category: "category 2",
            brand: "brand 2",
            price: 30.99,
            inventory: 57,
          },
        })
      ).toEqual({
        products: [
          {
            _id: "123456",
            name: "product 2",
            description: "description 2",
            category: "category 2",
            brand: "brand 2",
            price: 30.99,
            inventory: 57,
          },
        ],
        pageNumber: 0,
        totalPageNumbers: 0,
        searchName: "",
        searchCategory: "",
        searchBrand: "",
        clearSearch: "",
      });
    });

    it("Should return the INITIAL_STATE with no updated products - beacause the id passed is invalid", () => {
      expect(
        reducer(INITIAL_STATE, {
          type: ProductActionsTypes.UPDATE_PRODUCT,
          payload: {
            _id: "1234568",
          },
        })
      ).toEqual({
        products: [
          {
            _id: "123456",
            name: "product 1",
            description: "description 1",
            category: "category 1",
            brand: "brand 1",
            price: 28.99,
            inventory: 45,
          },
        ],
        pageNumber: 0,
        totalPageNumbers: 0,
        searchName: "",
        searchCategory: "",
        searchBrand: "",
        clearSearch: "",
      });
    });

    it("Should return the INITIAL_STATE with out the deleted product", () => {
      expect(
        reducer(INITIAL_STATE, {
          type: ProductActionsTypes.DELETE_PRODUCTS,
          payload: ["123456"],
        })
      ).toEqual({
        products: [],
        pageNumber: 0,
        totalPageNumbers: 0,
        searchName: "",
        searchCategory: "",
        searchBrand: "",
        clearSearch: "",
      });
    });
  });
});
