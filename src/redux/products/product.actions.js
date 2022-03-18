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

export const setProductsTotalPages = (totalPages) => ({
  type: ProductActionsTypes.SET_PRODUCTS_TOTAL_PAGES,
  payload: totalPages,
});

export const setProductsPage = (currentPage) => ({
  type: ProductActionsTypes.SET_PRODUCTS_PAGE,
  payload: currentPage,
});

export const setProductsSearchName = (searchName) => ({
  type: ProductActionsTypes.SET_PRODUCTS_SEARCH_NAME,
  payload: searchName,
});

export const setProductsSearchBrand = (searchBrand) => ({
  type: ProductActionsTypes.SET_PRODUCTS_SEARCH_BRAND,
  payload: searchBrand,
});
export const setProductsSearchCategory = (searchCategory) => ({
  type: ProductActionsTypes.SET_PRODUCTS_SEARCH_CATEGORY,
  payload: searchCategory,
});