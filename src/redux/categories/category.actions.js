import { CategoryActionsTypes } from "./category.types";

export const setCategories = (category) => ({
  type: CategoryActionsTypes.SET_CATEGORIES,
  payload: category,
});

export const addCategory = (category) => ({
  type: CategoryActionsTypes.ADD_CATEGORY,
  payload: category,
});

export const updateCategory = (category) => ({
  type: CategoryActionsTypes.UPDATE_CATEGORY,
  payload: category,
});

export const deleteCategories = (category) => ({
  type: CategoryActionsTypes.DELETE_CATEGORIES,
  payload: category,
});

export const setCategoriesTotalPages = (totalPages) => ({
  type: CategoryActionsTypes.SET_CATEGORIES_TOTAL_PAGES,
  payload: totalPages,
});

export const setCategoriesPage = (currentPage) => ({
  type: CategoryActionsTypes.SET_CATEGORIES_PAGE,
  payload: currentPage,
});