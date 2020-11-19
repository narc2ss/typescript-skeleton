import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react";

import App from "./App";
import RootStore from "./Stores";

const store = new RootStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider {...store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
