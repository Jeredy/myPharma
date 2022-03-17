import { CategoryActionsTypes } from "./category.types";

export const setCategories = (category) => ({
  type: CategoryActionsTypes.SET_CATEGORIES,
  payload: category,
});

export const addCategory = (product) => ({
  type: CategoryActionsTypes.ADD_CATEGORY,
  payload: product,
});

export const updateCategory = (product) => ({
  type: CategoryActionsTypes.UPDATE_CATEGORY,
  payload: product,
});

export const deleteCategories = (category) => ({
  type: CategoryActionsTypes.DELETE_CATEGORIES,
  payload: category,
});
