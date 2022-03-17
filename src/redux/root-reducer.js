import { combineReducers } from "redux";

import adminReducer from "./admin/admin.resources";
import productReducer from "./products/product.resources";
import categoryReducer from "./categories/category.resources";
import brandReducer from "./brands/brand.resources";

const rootReducer = combineReducers({
  admin: adminReducer,
  product: productReducer,
  category: categoryReducer,
  brand: brandReducer,
});

export default rootReducer;
