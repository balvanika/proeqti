import React from "react";
import ReactDOM from "react-dom/client";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import App from "./App.jsx";
import Shop from "./routes/Shop.jsx";

import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<App />}
        />

        <Route
          path="/shop"
          element={<Shop />}
        />

      </Routes>

    </BrowserRouter>

  </React.StrictMode>
);