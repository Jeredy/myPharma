import { CategoryActionsTypes } from "../../src/redux/categories/category.types";
import {
  setCategories,
  addCategory,
  updateCategory,
  deleteCategories,
} from "../../src/redux/categories/category.actions";

describe("Testing Category Actions - Redux", () => {
  describe("Testing Type Values", () => {
    it("Should return a type === CategoryActionsTypes.SET_CATEGORIES", () => {
      const response = setCategories([{}]);
      expect(response).toHaveProperty("payload");
      expect(response).toHaveProperty("type");
      expect(response.type).toEqual(CategoryActionsTypes.SET_CATEGORIES);
    });

    it("Should return a type === CategoryActionsTypes.ADD_CATEGORIES", () => {
      const response = addCategory([{}]);
      expect(response).toHaveProperty("payload");
      expect(response).toHaveProperty("type");
      expect(response.type).toEqual(CategoryActionsTypes.ADD_CATEGORY);
    });

    it("Should return a type === CategoryActionsTypes.UPDATE_CATEGORY", () => {
      const response = updateCategory([{}]);
      expect(response).toHaveProperty("payload");
      expect(response).toHaveProperty("type");
      expect(response.type).toEqual(CategoryActionsTypes.UPDATE_CATEGORY);
    });

    it("Should return a type === CategoryActionsTypes.DELETE_CATEGORIES", () => {
      const response = deleteCategories([{}]);
      expect(response).toHaveProperty("payload");
      expect(response).toHaveProperty("type");
      expect(response.type).toEqual(CategoryActionsTypes.DELETE_CATEGORIES);
    });
  });
});
