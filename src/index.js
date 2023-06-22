import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import store from './app/store'
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <Router>
  <Provider store={store}>
    <App />
    </Provider>
  </Router>
);
