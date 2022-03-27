import { createReducer } from "@reduxjs/toolkit";
import {
  addNewUser,
  deleteUser,
  closeFormForNewUser,
  showFormForNewUser,
  openModal,
  closeModal,
  changeUserInfo,
  initUsersSuccess,
  sortFromAtoZ,
  sortFromZtoA,
} from "./users-actions";

const usersReducer = createReducer([], {
  [initUsersSuccess]: (_, { payload }) => [...payload],
  [addNewUser]: (state, { payload }) => [...state, payload],
  [deleteUser]: (state, { payload }) =>
    state.filter((contact) => contact.id !== payload),
  [changeUserInfo]: (state, { payload }) =>
    state.map((user) =>
      user.id !== payload.id ? user : { ...user, ...payload }
    ),
});

const sortedReducer = createReducer(null, {
  [sortFromAtoZ]: () => "A-Z",
  [sortFromZtoA]: () => "Z-A",
});

const modalReducer = createReducer(false, {
  [openModal]: () => true,
  [closeModal]: () => false,
});

const newUserFormReducer = createReducer(false, {
  [showFormForNewUser]: () => true,
  [closeFormForNewUser]: () => false,
  [addNewUser]: () => false,
});

const reducers = {
  usersReducer,
  modalReducer,
  newUserFormReducer,
  sortedReducer,
};

export default reducers;
