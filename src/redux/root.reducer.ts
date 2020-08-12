import { combineReducers } from "redux";

import { UserState } from "./user/user.types";
import userReducer from "./user/user.reducer";

export interface IState {
  user: UserState;
}

const rootReducer = combineReducers({
  user: userReducer,
});

export default rootReducer;
