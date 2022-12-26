import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import logger from "redux-logger";

import cartReducer from "../reducers/cartReducer";
import userReducer from "../reducers/userReducer";

export default configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
  },
  middleware: [thunk, logger],
});
