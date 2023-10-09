import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { titleStore } from "../src/pages/admin/store/title.store.ts";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={titleStore}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
