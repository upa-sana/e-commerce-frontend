import { combineReducers } from "redux";

export const titleReducer = (state = { title: "Admin" }, action) => {
  switch (action.type) {
    case "TITLE":
      return {
        ...state,
        title: action.title,
      };

    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  pageTitle: titleReducer,
});

// not working on change pageTitle to title on the reducer
// absolute path config not working
