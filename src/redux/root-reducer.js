import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

import adminReducer from "./admin/admin.resources";
import productReducer from "./products/product.resources";
import categoryReducer from "./categories/category.resources";
import brandReducer from "./brands/brand.resources";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["admin"],
};

const rootReducer = combineReducers({
  admin: adminReducer,
  product: productReducer,
  category: categoryReducer,
  brand: brandReducer,
});

export default persistReducer(persistConfig, rootReducer);
