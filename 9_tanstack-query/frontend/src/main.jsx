import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// query kurulum importu
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./index.css";
// dev tools importu
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// queryClient class'ından örnek aldık
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* provider ile app bileşenini kapsadık */}
    <QueryClientProvider client={queryClient}>
      <App />
      {/* devtools bileşeni (ekranın sağ altına gelir) */}
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>
);
