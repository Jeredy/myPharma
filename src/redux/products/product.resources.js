import { ProductActionsTypes } from "./product.types";

const INITIAL_STATE = {
  products: null,
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
      console.log(action.payload._id);
      console.log(state.products);
      console.log(productIndex);

      // if (productIndex === -1) return { ...state };

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
    default:
      return state;
  }
};

export default productsResources;