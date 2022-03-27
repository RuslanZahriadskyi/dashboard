import axios from "axios";
import {
  initUsersError,
  initUsersRequest,
  initUsersSuccess,
} from "./users-actions";

const initUsers = () => async (dispatch) => {
  dispatch(initUsersRequest());

  try {
    const { data } = await axios.get(
      "https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data"
    );

    dispatch(initUsersSuccess(data));
  } catch (error) {
    dispatch(initUsersError(error.message));
  }
};

export { initUsers };
