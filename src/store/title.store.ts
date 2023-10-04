import { createStore } from "redux";
import { rootReducer } from "./title.reducer";

export const storeTitle = createStore(rootReducer);
