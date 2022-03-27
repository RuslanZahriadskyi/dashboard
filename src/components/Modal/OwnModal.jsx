import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal, Box } from "@mui/material";
import { usersSelectors, usersAction } from "../../redux/users";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  borderRadius: 2,
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
  padding: 0,
};

function OwnModal({ children }) {
  const dispatch = useDispatch();
  const modalValue = useSelector(usersSelectors.getModalValue);

  const closeModal = useCallback(
    () => dispatch(usersAction.closeModal()),
    [dispatch]
  );

  return (
    <Modal
      open={modalValue}
      onClose={closeModal}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <Box sx={{ ...style, width: 600 }}>{children}</Box>
    </Modal>
  );
}

export default OwnModal;
