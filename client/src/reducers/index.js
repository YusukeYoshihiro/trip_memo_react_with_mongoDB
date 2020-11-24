// Whole reducers are able to combine using { combineReducers }
import { combineReducers } from "redux";
import authReducer from "./authReducer";

// combineReducers() can be used to combine multiple reducers, which comes from "redux"
// In this case, there is one reducer but it also can be stored multiple reducers
export default combineReducers({
    auth: authReducer,
    // auth2: authSecondReducer,
    // auth3: authThirdReducer,
    // auth4: authFourthReducer,
    // auth5: authFifthReducer,
})

