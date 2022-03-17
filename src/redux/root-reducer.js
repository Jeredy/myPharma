import { combineReducers } from "redux";

import adminReducer from "./admin/admin.resources";
import productReducer from "./products/product.resources";
import categoryReducer from "./categories/category.resources";

const rootReducer = combineReducers({
  admin: adminReducer,
  product: productReducer,
  category: categoryReducer,
});

export default rootReducer;
