import { BrandActionsTypes } from "../../src/redux/brands/brand.types";

describe("Testing Brand Types - Redux", () => {
  it("Should return a action type SET_BRANDS", () => {
    expect(BrandActionsTypes.SET_BRANDS).toEqual("SET_BRANDS");
  });

  it("Should return a action type DELETE_BRANDS", () => {
    expect(BrandActionsTypes.DELETE_BRANDS).toEqual("DELETE_BRANDS");
  });

  it("Should return a action type ADD_BRAND", () => {
    expect(BrandActionsTypes.ADD_BRAND).toEqual("ADD_BRAND");
  });

  it("Should return a action type UPDATE_BRAND", () => {
    expect(BrandActionsTypes.UPDATE_BRAND).toEqual("UPDATE_BRAND");
  });

  it("Should return a action type SET_BRANDS_TOTAL_PAGES", () => {
    expect(BrandActionsTypes.SET_BRANDS_TOTAL_PAGES).toEqual(
      "SET_BRANDS_TOTAL_PAGES"
    );
  });

  it("Should return a action type SET_BRANDS_PAGE", () => {
    expect(BrandActionsTypes.SET_BRANDS_PAGE).toEqual(
      "SET_BRANDS_PAGE"
    );
  });

  it("Should return a action type SET_BRANDS_SEARCH_NAME", () => {
    expect(BrandActionsTypes.SET_BRANDS_SEARCH_NAME).toEqual(
      "SET_BRANDS_SEARCH_NAME"
    );
  });

  it("Should return a action type SET_BRANDS_CLEAR_SEARCH", () => {
    expect(BrandActionsTypes.SET_BRANDS_CLEAR_SEARCH).toEqual(
      "SET_BRANDS_CLEAR_SEARCH"
    );
  });
});
