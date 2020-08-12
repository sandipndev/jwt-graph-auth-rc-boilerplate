import React from "react";
import ReactDOM from "react-dom";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

import store from "./redux/store";
import { Provider } from "react-redux";

import jwtDecode from "jwt-decode";
import getNewToken from "./tokens";

import App from "./App";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  credentials: "include",
  request: async (operation) => {
    let accessToken = store.getState().user.accessKey;
    if (accessToken !== "") {
      const { exp } = jwtDecode(accessToken);

      if (Date.now() >= exp * 1000) {
        const { ok } = await getNewToken();
        if (!ok) return console.log("You have been logged out!");
        accessToken = store.getState().user.accessKey;
      }

      operation.setContext({
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
      });
    }
  },
});

ReactDOM.render(
  <Provider store={store}>
    <ApolloProvider client={client as any}>
      <App />
    </ApolloProvider>
  </Provider>,
  document.getElementById("root")
);
