import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { registerSW } from "virtual:pwa-register";
import App from "./app/App";
import { ThemeProvider } from "./context/ThemeProvider";
import "./styles/globals.css";

registerSW({
  onNeedRefresh() {
    if (confirm("New update available. Reload?")) {
      globalThis.location.reload();
    }
  },
  onOfflineReady() {
    console.log("App ready to work offline");
  },
});

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);
