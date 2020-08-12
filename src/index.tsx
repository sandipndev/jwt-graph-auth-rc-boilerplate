import React from "react";
import ReactDOM from "react-dom";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

import store from "./redux/store";
import { Provider } from "react-redux";

import App from "./App";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  onError: (...x) => console.log("GQLERR", x),
});

ReactDOM.render(
  <Provider store={store}>
    <ApolloProvider client={client as any}>
      <App />
    </ApolloProvider>
  </Provider>,
  document.getElementById("root")
);
