import { combineReducers } from "redux";

import adminReducer from "./admin/admin.resources";

const rootReducer = combineReducers({
  admin: adminReducer,
});

export default rootReducer;
