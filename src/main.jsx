import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider as ChakraUIProvider } from "./components/ui/provider";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { HashRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <HashRouter>
        <ChakraUIProvider>
          <App />
        </ChakraUIProvider>
      </HashRouter>
    </Provider>
  </StrictMode>
);
