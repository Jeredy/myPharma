import { ProductActionsTypes } from "./product.types";

export const setProducts = (products) => ({
  type: ProductActionsTypes.SET_PRODUCTS,
  payload: products,
});

export const addProduct = (product) => ({
  type: ProductActionsTypes.ADD_PRODUCT,
  payload: product,
});

export const updateProduct = (product) => ({
  type: ProductActionsTypes.UPDATE_PRODUCT,
  payload: product,
});

export const deleteProducts = (products) => ({
  type: ProductActionsTypes.DELETE_PRODUCTS,
  payload: products,
});
