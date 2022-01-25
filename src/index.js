import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import "./App.css";

import Store from "./store";
import App from "./components/App";

const { persistor, store } = Store();

// const GlobalStyle = createGlobalStyle`
// html {
//     background-color: none;
//     box-sizing: border-box;
//     transition: all 0.5s ease-in ease-out;
// }
// `;

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      {/* <GlobalStyle /> */}
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
