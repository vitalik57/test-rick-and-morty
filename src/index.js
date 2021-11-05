import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import NotFound from "./Components/NotFound";
ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<NotFound />}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);
