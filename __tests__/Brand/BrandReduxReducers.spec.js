import { BrandActionsTypes } from "../../src/redux/brands/brand.types";
import reducer, { INITIAL_STATE } from "../../src/redux/brands/brand.resources";

describe("Testing Brand Reducers - Redux", () => {
  it("Should return the INITIAL_STATE with no changes", () => {
    expect(reducer(undefined, {})).toEqual({
      brands: null,
      totalPageNumbers: 0,
      pageNumber: 0,
      searchName: "",
      clearSearch: false,
    });
  });
  describe("Testing Functions", () => {
    beforeEach(() => {
      INITIAL_STATE.brands = [
        {
          _id: "123456",
          name: "brand 1",
        },
      ];
    });

    afterEach(() => {
      INITIAL_STATE.brands = null;
    });

    it("Should set the values to 'brands' on INITIAL_STATE", () => {
      expect(
        reducer(undefined, {
          type: BrandActionsTypes.SET_BRANDS,
          payload: [
            {
              _id: "123456",
              name: "brand 1",
            },
          ],
        })
      ).toEqual({
        totalPageNumbers: 0,
        pageNumber: 0,
        searchName: "",
        clearSearch: false,
        brands: [
          {
            _id: "select",
            name: "Selecionar..",
          },
          {
            _id: "123456",
            name: "brand 1",
          },
        ],
      });
    });

    it("Should return the INITIAL_STATE with the brand added to 'brands'", () => {
      expect(
        reducer(INITIAL_STATE, {
          type: BrandActionsTypes.ADD_BRAND,
          payload: {
            _id: "654321",
            name: "brand 2",
          },
        })
      ).toEqual({
        totalPageNumbers: 0,
        pageNumber: 0,
        searchName: "",
        clearSearch: false,
        brands: [
          {
            _id: "123456",
            name: "brand 1",
          },
          {
            _id: "654321",
            name: "brand 2",
          },
        ],
      });
    });

    it("Should return the INITIAL_STATE with update the specific brand", () => {
      expect(
        reducer(INITIAL_STATE, {
          type: BrandActionsTypes.UPDATE_BRAND,
          payload: {
            _id: "123456",
            name: "brand 2",
          },
        })
      ).toEqual({
        brands: [
          {
            _id: "123456",
            name: "brand 2",
          },
        ],
        totalPageNumbers: 0,
        pageNumber: 0,
        searchName: "",
        clearSearch: false,
      });
    });

    it("Should return the INITIAL_STATE with no updated brands - beacause the id passed is invalid", () => {
      expect(
        reducer(INITIAL_STATE, {
          type: BrandActionsTypes.UPDATE_BRAND,
          payload: {
            _id: "1234568",
          },
        })
      ).toEqual({
        brands: [
          {
            _id: "123456",
            name: "brand 1",
          },
        ],
        totalPageNumbers: 0,
        pageNumber: 0,
        searchName: "",
        clearSearch: false,
      });
    });

    it("Should return the INITIAL_STATE with out the deleted brand", () => {
      expect(
        reducer(INITIAL_STATE, {
          type: BrandActionsTypes.DELETE_BRANDS,
          payload: ["123456"],
        })
      ).toEqual({
        brands: [],
        totalPageNumbers: 0,
        pageNumber: 0,
        searchName: "",
        clearSearch: false,
      });
    });
  });
});
