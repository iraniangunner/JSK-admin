import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ConfigProvider } from "antd";


const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ConfigProvider direction="rtl">
      <App />
    </ConfigProvider>
  </React.StrictMode>
);
