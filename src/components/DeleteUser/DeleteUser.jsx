import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { usersAction } from "../../redux/users";

function DeleteUser({ userId }) {
  const dispatch = useDispatch();

  return (
    <div style={{ padding: "10px 0 10px 0" }}>
      <h2
        style={{
          borderBottom: "1px solid #b8b8b8",
          margin: 0,
          padding: "0 0 10px 10px",
        }}
      >
        Delete
      </h2>
      <p
        style={{ padding: "0 0 10px 10px", borderBottom: "1px solid #b8b8b8" }}
      >
        You actually want to remove this user. It will not be possible to
        restore.
      </p>
      <div
        style={{
          display: "flex",
          padding: "0 10px 0 0",
          width: 200,
          marginLeft: "auto",
          justifyContent: "space-between",
        }}
      >
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#6e6e6e",
            "&:hover": {
              backgroundColor: "#4d4d4d",
            },
          }}
          onClick={() => dispatch(usersAction.closeModal())}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#bd0000",
            "&:hover": {
              backgroundColor: "#8a0000",
            },
          }}
          onClick={() => {
            dispatch(usersAction.deleteUser(userId));
            dispatch(usersAction.closeModal());
          }}
        >
          Delete
        </Button>
      </div>
    </div>
  );
}

export default DeleteUser;
