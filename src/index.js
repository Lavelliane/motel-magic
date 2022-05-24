import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { HunelProvider, HunelCreditCard } from "reactjs-credit-card";

const hunel = new HunelCreditCard();

ReactDOM.render(
  <React.StrictMode>
    <HunelProvider config={hunel}>
      <App />
    </HunelProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
