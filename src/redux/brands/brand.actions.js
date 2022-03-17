import { BrandActionsTypes } from "./brand.types";

export const setBrands = (brand) => ({
  type: BrandActionsTypes.SET_BRANDS,
  payload: brand,
});

export const addBrand = (brand) => ({
  type: BrandActionsTypes.ADD_BRAND,
  payload: brand,
});

export const updateBrand = (brand) => ({
  type: BrandActionsTypes.UPDATE_BRAND,
  payload: brand,
});

export const deleteBrands = (brand) => ({
  type: BrandActionsTypes.DELETE_BRANDS,
  payload: brand,
});
