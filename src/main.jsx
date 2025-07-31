import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AuthContextProvider } from "./contexts/AuthContext.jsx";
import { FormCollapseContextProvider } from "./contexts/FormCollapseContext.jsx";

import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthContextProvider>
      <FormCollapseContextProvider>
        <App />
      </FormCollapseContextProvider>
    </AuthContextProvider>
  </StrictMode>
);
