import { configureStore, combineReducers } from "@reduxjs/toolkit";

import reducers from "./users/users-reducer";

const contactsReducer = combineReducers({
  users: reducers.usersReducer,
  modal: reducers.modalReducer,
  showForm: reducers.newUserFormReducer,
  sortedValue: reducers.sortedReducer,
});

let store = configureStore({
  reducer: contactsReducer,
});

export { store };
