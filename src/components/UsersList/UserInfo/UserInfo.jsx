import React from "react";
import { TableCell, TableRow, Button } from "@mui/material";

function UserInfo({
  sortedUsers,
  setDeletedUserId,
  deleteUser,
  editUser,
  setEditedUser,
}) {
  return sortedUsers.map(({ id, name, username, email, address }) => (
    <TableRow key={id}>
      <TableCell component="th" scope="row">
        {id}
      </TableCell>
      <TableCell component="th" scope="row" align="center">
        {name}
      </TableCell>
      <TableCell align="center">{username}</TableCell>
      <TableCell align="center">{email}</TableCell>
      <TableCell align="center">{address.city}</TableCell>
      <TableCell align="center">
        <Button
          variant="contained"
          sx={{
            width: 100,
            height: 40,
            backgroundColor: "#ffa724",
            "&:hover": {
              backgroundColor: "#db8400",
            },
          }}
          onClick={() => {
            setEditedUser({
              id,
              name,
              username,
              email,
              address: { city: address.city },
            });
            editUser();
          }}
        >
          edit
        </Button>
      </TableCell>
      <TableCell align="center">
        <Button
          variant="contained"
          sx={{
            width: 100,
            height: 40,
            backgroundColor: "#bd0000",
            "&:hover": {
              backgroundColor: "#8a0000",
            },
          }}
          onClick={() => {
            setDeletedUserId(id);
            deleteUser();
          }}
        >
          delete
        </Button>
      </TableCell>
    </TableRow>
  ));
}

export default UserInfo;
