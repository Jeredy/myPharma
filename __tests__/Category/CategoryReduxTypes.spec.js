import { CategoryActionsTypes } from "../../src/redux/categories/category.types";

describe("Testing Category Types - Redux", () => {
  it("Should return a action type SET_CATEGORIES", () => {
    expect(CategoryActionsTypes.SET_CATEGORIES).toEqual("SET_CATEGORIES");
  });

  it("Should return a action type DELETE_CATEGORIES", () => {
    expect(CategoryActionsTypes.DELETE_CATEGORIES).toEqual("DELETE_CATEGORIES");
  });

  it("Should return a action type ADD_CATEGORY", () => {
    expect(CategoryActionsTypes.ADD_CATEGORY).toEqual("ADD_CATEGORY");
  });

  it("Should return a action type UPDATE_CATEGORY", () => {
    expect(CategoryActionsTypes.UPDATE_CATEGORY).toEqual("UPDATE_CATEGORY");
  });

  it("Should return a action type SET_CATEGORIES_TOTAL_PAGES", () => {
    expect(CategoryActionsTypes.SET_CATEGORIES_TOTAL_PAGES).toEqual(
      "SET_CATEGORIES_TOTAL_PAGES"
    );
  });

  it("Should return a action type SET_CATEGORIES_PAGE", () => {
    expect(CategoryActionsTypes.SET_CATEGORIES_PAGE).toEqual(
      "SET_CATEGORIES_PAGE"
    );
  });

  it("Should return a action type SET_CATEGORIES_SEARCH_NAME", () => {
    expect(CategoryActionsTypes.SET_CATEGORIES_SEARCH_NAME).toEqual(
      "SET_CATEGORIES_SEARCH_NAME"
    );
  });

  it("Should return a action type SET_CATEGORIES_CLEAR_SEARCH", () => {
    expect(CategoryActionsTypes.SET_CATEGORIES_CLEAR_SEARCH).toEqual(
      "SET_CATEGORIES_CLEAR_SEARCH"
    );
  });
});
