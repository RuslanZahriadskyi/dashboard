import { createAction } from "@reduxjs/toolkit";

const initUsersRequest = createAction("initUsersRequest");
const initUsersSuccess = createAction("initUsersSuccess");
const initUsersError = createAction("initUsersError");

const addNewUser = createAction("addNewUser");

const changeUserInfo = createAction("changeUserInfo");

const deleteUser = createAction("deleteUser");

const openModal = createAction("openModal");
const closeModal = createAction("closeModal");

const sortFromAtoZ = createAction("sort/A-Z");
const sortFromZtoA = createAction("sort/Z-A");

const showFormForNewUser = createAction("showForm");
const closeFormForNewUser = createAction("closeForm");

export {
  initUsersRequest,
  initUsersSuccess,
  initUsersError,
  addNewUser,
  changeUserInfo,
  deleteUser,
  openModal,
  closeModal,
  showFormForNewUser,
  closeFormForNewUser,
  sortFromAtoZ,
  sortFromZtoA,
};
