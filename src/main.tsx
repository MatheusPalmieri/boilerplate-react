// React
import React from "react";
import ReactDOM from "react-dom/client";

// Router
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

// Mantine
import { MantineProvider } from "@mantine/core";
import { theme } from "./styles/theme";

// Styles
import "@mantine/core/styles.css";
import "./styles/reset.css";
import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MantineProvider theme={theme}>
      <RouterProvider router={router} />
    </MantineProvider>
  </React.StrictMode>
);
