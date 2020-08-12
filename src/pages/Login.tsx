import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { connect } from "react-redux";
import { setAccessToken } from "../redux/user/user.actions";

import { useLoginMutation } from "../generated/graphql";

interface LoginProps {
  setAccessToken: (accessToken: string) => void;
}

function Login({ setAccessToken }: LoginProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login] = useLoginMutation();

  const history = useHistory();

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        const { data } = await login({
          variables: { email: email, password: password },
        });
        const accessToken = data?.login.accessToken;
        if (!accessToken) return;
        setAccessToken(accessToken);
        history.push("/");
      }}
    >
      <div>Login</div>
      <div>
        <input
          type="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <input
          type="password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
}

const mapDispatchToProps = (dispatch: Function) => ({
  setAccessToken: (accessToken: string) =>
    dispatch(setAccessToken(accessToken)),
});

export default connect(null, mapDispatchToProps)(Login);
