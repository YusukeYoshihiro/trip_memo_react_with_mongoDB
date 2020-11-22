import { combineReducers } from "redux";
import authReducer from "./authReducer";

// combineReducers() can be used to organize multiple reducers
// In this case, there is one reducer but it also can use
export default combineReducers({
    auth: authReducer,
})
