import React from "react";
import ReactDOM from "react-dom/client";
import Dashboard from "./Dashboard";

const container = document.getElementById("root");
if (container) {
  const root = ReactDOM.createRoot(container);
  root.render(
    <React.StrictMode>
      <Dashboard />
    </React.StrictMode>
  );
}
