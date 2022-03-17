import { combineReducers } from "redux";

import adminReducer from "./admin/admin.resources";
import productReducer from "./products/product.resources";

const rootReducer = combineReducers({
  admin: adminReducer,
  product: productReducer,
});

export default rootReducer;
