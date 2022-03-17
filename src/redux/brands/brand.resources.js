import { BrandActionsTypes } from "./brand.types";

const INITIAL_STATE = {
  brands: null,
};

const brandsResources = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BrandActionsTypes.SET_BRANDS:
      const settingBrands = action.payload;
      
      settingBrands.unshift({
        _id: "select",
        name: "Selecionar..",
        description: "select",
      });
      
      return {
        ...state,
        brands: settingBrands,
      };
    case BrandActionsTypes.ADD_BRANDS:
      return {
        ...state,
        brands: [...state.brands, action.payload],
      };
    case BrandActionsTypes.UPDATE_BRANDS:
      const categoryIndex = state.brands.findIndex(
        ({ _id }) => _id == action.payload._id
      );

      if (categoryIndex === -1) return { ...state };

      const updatedBrandList = state.brands;
      updatedBrandList.splice(categoryIndex, 1, action.payload);

      return {
        ...state,
        brands: updatedBrandList,
      };
    case BrandActionsTypes.DELETE_BRANDS:
      const deleteList = action.payload;

      const newBrandList = state.brands.filter(
        ({ _id }) => !deleteList.includes(_id)
      );
      return {
        ...state,
        brands: newBrandList,
      };
    default:
      return state;
  }
};

export default brandsResources;
