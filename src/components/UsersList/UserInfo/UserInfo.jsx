import React from "react";
import { TableCell, TableRow, Button } from "@mui/material";

function UserInfo({ user }) {
  return (
    <TableRow key={user.id}>
      <TableCell component="th" scope="row">
        {user.id}
      </TableCell>
      <TableCell component="th" scope="row" align="center">
        {user.name}
      </TableCell>
      <TableCell align="center">{user.username}</TableCell>
      <TableCell align="center">{user.email}</TableCell>
      <TableCell align="center">{user.adress.city}</TableCell>
      <TableCell align="center">
        <Button
          variant="contained"
          sx={{ width: 100, height: 40, bgcolor: "#ffa724" }}
        >
          edit
        </Button>
      </TableCell>
      <TableCell align="center">
        <Button
          variant="contained"
          sx={{ width: 100, height: 40 }}
          color="error"
        >
          delete
        </Button>
      </TableCell>
    </TableRow>
  );
}

export default UserInfo;
