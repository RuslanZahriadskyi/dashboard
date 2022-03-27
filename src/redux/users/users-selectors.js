import { createSelector } from "reselect";

const getAllUsers = (state) => state.users;

const getModalValue = (state) => state.modal;

const getFormValue = (state) => state.showForm;

const getSortedValue = (state) => state.sortedValue;

const getSortedUsers = createSelector(
  [getAllUsers, getSortedValue],
  (users, sorted) => {
    if (!sorted) {
      return users;
    }
    if (sorted === "A-Z") {
      return users.slice().sort((a, b) => {
        return a.username.toLowerCase() > b.username.toLowerCase()
          ? 1
          : a.username.toLowerCase() === b.username.toLowerCase()
          ? 0
          : -1;
      });
    }
    if (sorted === "Z-A") {
      return users.slice().sort((a, b) => {
        return a.username.toLowerCase() > b.username.toLowerCase()
          ? -1
          : a.username.toLowerCase() === b.username.toLowerCase()
          ? 0
          : 1;
      });
    }
  }
);

export { getAllUsers, getModalValue, getFormValue, getSortedUsers };
