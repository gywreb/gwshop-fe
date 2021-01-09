import { combineReducers } from "redux";
import login from "./login.reducer";
import register from "./register.reducer";

const reducer = combineReducers({
  register,
  login,
});

export default reducer;
