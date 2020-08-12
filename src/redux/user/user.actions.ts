import { UserActions, SET_ACCESSKEY } from "./user.types";

export const setAccessToken = (accessToken: string): UserActions => ({
  type: SET_ACCESSKEY,
  payload: accessToken,
});
