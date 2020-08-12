import React from "react";
import { useLogoutMutation } from "../generated/graphql";

import { connect } from "react-redux";
import { setAccessToken } from "../redux/user/user.actions";

interface DashboardProps {
  setAccessToken: (accessToken: string) => void;
}

function Dashboard({ setAccessToken }: DashboardProps) {
  const [logout] = useLogoutMutation();

  return (
    <div>
      <div>Dashboard</div>
      <div>
        <button
          onClick={async () => {
            await logout();
            setAccessToken("");
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch: Function) => ({
  setAccessToken: (accessToken: string) =>
    dispatch(setAccessToken(accessToken)),
});

export default connect(null, mapDispatchToProps)(Dashboard);
