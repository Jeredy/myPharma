import { CategoryActionsTypes } from "./category.types";

const INITIAL_STATE = {
  categories: null,
};

const categoriesResources = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CategoryActionsTypes.SET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
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
        console.log(newCategoryList)
      return {
        ...state,
        categories: newCategoryList,
      };
    default:
      return state;
  }
};

export default categoriesResources;
