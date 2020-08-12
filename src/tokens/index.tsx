import store from "../redux/store";
import { setAccessToken } from "../redux/user/user.actions";

export default function () {
  return fetch("http://localhost:4000/refresh_token", {
    method: "POST",
    credentials: "include",
  })
    .then((x) => x.json())
    .then(({ accessToken, ok }) => {
      if (ok) store.dispatch(setAccessToken(accessToken));
      return { accessToken, ok };
    });
}
