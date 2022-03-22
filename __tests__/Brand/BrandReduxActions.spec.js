import { BrandActionsTypes } from "../../src/redux/brands/brand.types";
import {
  setBrands,
  addBrand,
  updateBrand,
  deleteBrands,
} from "../../src/redux/brands/brand.actions";

describe("Testing Brand Actions - Redux", () => {
  describe("Testing Type Values", () => {
    it("Should return a type === BrandActionsTypes.SET_BRANDS", () => {
      const response = setBrands([{}]);
      expect(response).toHaveProperty("payload");
      expect(response).toHaveProperty("type");
      expect(response.type).toEqual(BrandActionsTypes.SET_BRANDS);
    });

    it("Should return a type === BrandActionsTypes.ADD_BRANDS", () => {
      const response = addBrand([{}]);
      expect(response).toHaveProperty("payload");
      expect(response).toHaveProperty("type");
      expect(response.type).toEqual(BrandActionsTypes.ADD_BRAND);
    });

    it("Should return a type === BrandActionsTypes.UPDATE_BRAND", () => {
      const response = updateBrand([{}]);
      expect(response).toHaveProperty("payload");
      expect(response).toHaveProperty("type");
      expect(response.type).toEqual(BrandActionsTypes.UPDATE_BRAND);
    });

    it("Should return a type === BrandActionsTypes.DELETE_BRANDS", () => {
      const response = deleteBrands([{}]);
      expect(response).toHaveProperty("payload");
      expect(response).toHaveProperty("type");
      expect(response.type).toEqual(BrandActionsTypes.DELETE_BRANDS);
    });
  });
});
