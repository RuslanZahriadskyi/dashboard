import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { usersAction } from "../../redux/users";

function Container({ title, children }) {
  const dispatch = useDispatch();

  return (
    <div
      style={{
        border: "1px solid #b8b8b8",
        borderRadius: 10,
        boxShadow: "0px 0px 6px 5px rgba(0, 0, 0, 0.37)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 10,
          borderBottom: "1px solid #b8b8b8",
        }}
      >
        <h2>{title}</h2>
        {title === "User list" && (
          <Button
            variant="contained"
            sx={{ width: 150, height: 40 }}
            onClick={() => dispatch(usersAction.showFormForNewUser())}
          >
            Add new
          </Button>
        )}
      </div>
      {children}
    </div>
  );
}

export default Container;
