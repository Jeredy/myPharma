import { CategoryActionsTypes } from "../../src/redux/categories/category.types";
import reducer, {
  INITIAL_STATE,
} from "../../src/redux/categories/category.resources";

describe("Testing Category Reducers - Redux", () => {
  it("Should return the INITIAL_STATE with no changes", () => {
    expect(reducer(undefined, {})).toEqual({
      categories: null,
      totalPageNumbers: 0,
      pageNumber: 0,
      searchName: "",
      searchDescription: "",
      clearSearch: false,
    });
  });
  describe("Testing Functions", () => {
    beforeEach(() => {
      INITIAL_STATE.categories = [
        {
          _id: "123456",
          name: "category 1",
          description: "description 1",
        },
      ];
    });

    afterEach(() => {
      INITIAL_STATE.categories = null;
    });

    it("Should set the values to 'categories' on INITIAL_STATE", () => {
      expect(
        reducer(undefined, {
          type: CategoryActionsTypes.SET_CATEGORIES,
          payload: [{
            _id: "123456",
            name: "category 1",
            description: "description 1",
          }],
        })
      ).toEqual({
        totalPageNumbers: 0,
        pageNumber: 0,
        searchName: "",
        searchDescription: "",
        clearSearch: false,
        categories: [
          {
            _id: "select",
            name: "Selecionar..",
            description: "select",
          },
          {
            _id: "123456",
            name: "category 1",
            description: "description 1",
          },
        ],
      });
    });

    it("Should return the INITIAL_STATE with the category added to 'categories'", () => {
      expect(
        reducer(INITIAL_STATE, {
          type: CategoryActionsTypes.ADD_CATEGORY,
          payload: {
            _id: "654321",
            name: "category 2",
            description: "description 2",
          },
        })
      ).toEqual({
        totalPageNumbers: 0,
        pageNumber: 0,
        searchName: "",
        searchDescription: "",
        clearSearch: false,
        categories: [
          {
            _id: "123456",
            name: "category 1",
            description: "description 1",
          },
          {
            _id: "654321",
            name: "category 2",
            description: "description 2",
          },
        ],
      });
    });

    it("Should return the INITIAL_STATE with update the specific category", () => {
      expect(
        reducer(INITIAL_STATE, {
          type: CategoryActionsTypes.UPDATE_CATEGORY,
          payload: {
            _id: "123456",
            name: "category 2",
            description: "description 2",
          },
        })
      ).toEqual({
        categories: [
          {
            _id: "123456",
            name: "category 2",
            description: "description 2",
          },
        ],
        totalPageNumbers: 0,
        pageNumber: 0,
        searchName: "",
        searchDescription: "",
        clearSearch: false,
      });
    });

    it("Should return the INITIAL_STATE with no updated categories - beacause the id passed is invalid", () => {
      expect(
        reducer(INITIAL_STATE, {
          type: CategoryActionsTypes.UPDATE_CATEGORY,
          payload: {
            _id: "1234568",
          },
        })
      ).toEqual({
        categories: [
          {
            _id: "123456",
            name: "category 1",
            description: "description 1",
          },
        ],
        totalPageNumbers: 0,
        pageNumber: 0,
        searchName: "",
        searchDescription: "",
        clearSearch: false,
      });
    });

    it("Should return the INITIAL_STATE with out the deleted category", () => {
      expect(
        reducer(INITIAL_STATE, {
          type: CategoryActionsTypes.DELETE_CATEGORIES,
          payload: ["123456"],
        })
      ).toEqual({
        categories: [],
        totalPageNumbers: 0,
        pageNumber: 0,
        searchName: "",
        searchDescription: "",
        clearSearch: false,
      });
    });
  });
});
