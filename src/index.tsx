import React from "react";
import ReactDOM from "react-dom/client";
import App from "./containers/App/App";
import { Provider } from "react-redux";
import ourStore from "./store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={ourStore}>
      <App />
  </Provider>
);
