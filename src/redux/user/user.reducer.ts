import { UserState, UserActions, SET_ACCESSKEY } from "./user.types";

const initialState: UserState = {
  accessKey: "",
};

const userReducer = (state = initialState, action: UserActions): UserState => {
  switch (action.type) {
    case SET_ACCESSKEY:
      return {
        ...state,
        accessKey: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
