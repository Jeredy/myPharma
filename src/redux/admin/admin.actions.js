import { AdminActionsTypes } from "./admin.types";

export const setCurrentAdmin = (admin) => ({
  type: AdminActionsTypes.SET_CURRENT_USER,
  payload: admin,
});
