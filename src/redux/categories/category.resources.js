import { CategoryActionsTypes } from "./category.types";

const INITIAL_STATE = {
  categories: null,
  totalPageNumbers: 0,
  pageNumber: 0,
  searchName: "",
  searchDescription: "",
  clearSearch: false,
};

const categoriesResources = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CategoryActionsTypes.SET_CATEGORIES:
      const settingCategories = action.payload;

      settingCategories?.unshift({
        _id: "select",
        name: "Selecionar..",
        description: "select",
      });

      return {
        ...state,
        categories: settingCategories,
      };
    case CategoryActionsTypes.ADD_CATEGORY:
      return {
        ...state,
        categories: [...state.categories, action.payload],
      };
    case CategoryActionsTypes.UPDATE_CATEGORY:
      const categoryIndex = state.categories.findIndex(
        ({ _id }) => _id == action.payload._id
      );

      if (categoryIndex === -1) return { ...state };

      const updatedCategoryList = state.categories;
      updatedCategoryList.splice(categoryIndex, 1, action.payload);

      return {
        ...state,
        categories: updatedCategoryList,
      };
    case CategoryActionsTypes.DELETE_CATEGORIES:
      const deleteList = action.payload;

      const newCategoryList = state.categories.filter(
        ({ _id }) => !deleteList.includes(_id)
      );
      return {
        ...state,
        categories: newCategoryList,
      };
    case CategoryActionsTypes.SET_CATEGORIES_TOTAL_PAGES:
      return {
        ...state,
        totalPageNumbers: action.payload,
      };
    case CategoryActionsTypes.SET_CATEGORIES_PAGE:
      return {
        ...state,
        pageNumber: action.payload,
      };
    case CategoryActionsTypes.SET_CATEGORIES_SEARCH_NAME:
      return {
        ...state,
        searchName: action.payload,
      };
    case CategoryActionsTypes.SET_CATEGORIES_SEARCH_DESCRIPTION:
      return {
        ...state,
        searchDescription: action.payload,
      };
    case CategoryActionsTypes.SET_CATEGORIES_CLEAR_SEARCH:
      return {
        ...state,
        clearSearch: !state.clearSearch,
      };
    default:
      return state;
  }
};

export default categoriesResources;
