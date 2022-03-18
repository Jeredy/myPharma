import { ProductActionsTypes } from "./product.types";

const INITIAL_STATE = {
  products: null,
  pageNumber: 0,
  totalPageNumbers: 0,
  searchName: "",
  searchCategory: "",
  searchBrand: "",
  clearSearch: "",
};

const productsResources = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ProductActionsTypes.SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case ProductActionsTypes.ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case ProductActionsTypes.UPDATE_PRODUCT:
      const productIndex = state.products.findIndex(
        ({ _id }) => _id == action.payload._id
      );
      if (productIndex === -1) return { ...state };

      const updatedProductsList = state.products;
      updatedProductsList.splice(productIndex, 1, action.payload);

      return {
        ...state,
        products: updatedProductsList,
      };
    case ProductActionsTypes.DELETE_PRODUCTS:
      const deleteList = action.payload;

      const newProductsList = state.products.filter(
        ({ _id }) => !deleteList.includes(_id)
      );

      return {
        ...state,
        products: newProductsList,
      };
    case ProductActionsTypes.SET_PRODUCTS_TOTAL_PAGES:
      return {
        ...state,
        totalPageNumbers: action.payload,
      };
    case ProductActionsTypes.SET_PRODUCTS_PAGE:
      return {
        ...state,
        pageNumber: action.payload,
      };
    case ProductActionsTypes.SET_PRODUCTS_SEARCH_NAME:
      return {
        ...state,
        searchName: action.payload,
      };
    case ProductActionsTypes.SET_PRODUCTS_SEARCH_CATEGORY:
      return {
        ...state,
        searchCategory: action.payload,
      };
    case ProductActionsTypes.SET_PRODUCTS_SEARCH_BRAND:
      return {
        ...state,
        searchBrand: action.payload,
      };
    case ProductActionsTypes.SET_PRODUCTS_CLEAR_SEARCH:
      return {
        ...state,
        clearSearch: !state.clearSearch,
      };
    default:
      return state;
  }
};

export default productsResources;
