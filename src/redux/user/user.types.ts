export const SET_ACCESSKEY = "SET_ACCESSKEY";

interface SetAccessKeyAction {
  type: typeof SET_ACCESSKEY;
  payload: string;
}

export type UserActions = SetAccessKeyAction;

interface IUserState {
  accessKey: string;
}

export type UserState = IUserState;
