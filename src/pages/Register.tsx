import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useRegisterMutation } from "../generated/graphql";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [register] = useRegisterMutation();
  const history = useHistory();

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        await register({
          variables: { email: email, password: password },
        });
        history.push("/");
      }}
    >
      <div>Register</div>
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
      <button type="submit">Register</button>
    </form>
  );
}

export default Register;
