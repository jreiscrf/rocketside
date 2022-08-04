import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./auth";
import RocketsReducer from "./rockets";

export default configureStore({
  reducer: {
    auth: AuthReducer,
    rockets: RocketsReducer,
  },
});
