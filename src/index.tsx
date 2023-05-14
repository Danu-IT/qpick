import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App/App";
import { Provider } from "react-redux";
import { setupStore } from "./store";
import { AnimatePresence } from "framer-motion";

const store = setupStore();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <AnimatePresence>
      <App />
    </AnimatePresence>
  </Provider>
);
