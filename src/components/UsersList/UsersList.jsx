import React, { useCallback, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { usersAction, usersSelectors } from "../../redux/users";
import DeleteUser from "../DeleteUser";
import OwnModal from "../Modal/OwnModal";
import EditUser from "../EditUser";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";

function UsersList() {
  const sortedUsers = useSelector(usersSelectors.getSortedUsers);
  const [deletedUserId, setDeletedUserId] = useState(null);
  const [editedUser, setEditedUser] = useState(null);
  const modalValue = useSelector(usersSelectors.getModalValue);
  const dispatch = useDispatch();

  const deleteUser = useCallback(() => {
    dispatch(usersAction.openModal());
  }, [dispatch]);

  const editUser = useCallback(() => {
    dispatch(usersAction.openModal());
  }, [dispatch]);

  return (
    <div style={{ padding: 10 }}>
      <TableContainer component={Paper}>
        <Table sx={{ border: "1px solid #b8b8b8" }}>
          <TableHead>
            <TableRow sx={{ bgcolor: "#dedede" }}>
              <TableCell>Id</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">
                <div style={{ display: "flex", justifyContent: "center" }}>
                  Username
                  <ArrowCircleUpIcon
                    sx={{ "&:hover": { cursor: "pointer" } }}
                    onClick={() => {
                      dispatch(usersAction.sortFromZtoA());
                    }}
                  />
                  <ArrowCircleDownIcon
                    sx={{ "&:hover": { cursor: "pointer" } }}
                    onClick={() => {
                      dispatch(usersAction.sortFromAtoZ());
                    }}
                  />
                </div>
              </TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">City</TableCell>
              <TableCell align="center">Delete</TableCell>
              <TableCell align="center">Edit</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedUsers.map(({ id, name, username, email, address }) => (
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
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {modalValue && deletedUserId && (
        <OwnModal>
          <DeleteUser userId={deletedUserId} />
        </OwnModal>
      )}
      {modalValue && editedUser && (
        <OwnModal>
          <EditUser editUser={editedUser} setEditedUser={setEditedUser} />
        </OwnModal>
      )}
    </div>
  );
}

export default UsersList;
