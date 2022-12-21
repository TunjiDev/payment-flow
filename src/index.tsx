import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import PaymentContextProvider from "./store/PaymentProvider";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <PaymentContextProvider>
      <App />
    </PaymentContextProvider>
  </React.StrictMode>
);
