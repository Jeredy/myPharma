import { AdminActionsTypes } from "./admin.types";

const INITIAL_STATE = {
  currentAdmin: null,
};

const adminReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AdminActionsTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentAdmin: action.payload,
      };
    default:
      return state;
  }
};

export default adminReducer;
