import { combineReducers } from "redux";
import user from "./userReducer";
import lang from "./langReducer";
import theme from "./themeReducer";
import category from "./categoryReducer";
export default combineReducers({
  user,
  lang,
  theme,
  category,
});
