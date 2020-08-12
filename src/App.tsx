import React, { useState, useEffect } from "react";

import getNewToken from "./tokens";

import Routes from "./Routes";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getNewToken().then(() => {
      setLoading(false);
    });
  }, [setLoading]);

  return loading ? <>Loading...</> : <Routes />;
}

export default App;
