import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import { useFormik } from "formik";
import { Button, TextField } from "@mui/material";
import { usersAction, usersSelectors } from "../../redux/users";
import "./AddNewUser.css";

const validationSchema = yup.object({
  email: yup
    .string()
    .matches(
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
      "Please write corrrect format"
    )
    .email()
    .required("Email is required"),
  name: yup.string("Enter your name").required("Name is required"),
});

function AddNewUser() {
  const dispatch = useDispatch();
  const users = useSelector(usersSelectors.getAllUsers);

  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
    },
    validationSchema: validationSchema,
    onSubmit: ({ email, name }) => {
      dispatch(
        usersAction.addNewUser({
          email,
          name,
          username: "",
          address: { city: "" },
          id: users.length + 1,
        })
      );
    },
  });

  return (
    <div className="Form__container">
      <form onSubmit={formik.handleSubmit}>
        <div>
          <div className="Input__container">
            <h3 style={{ paddingRight: 120 }}>Name</h3>
            <TextField
              id="name"
              name="name"
              type="name"
              fullWidth
              placeholder="User Name"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
          </div>
          <div className="Input__container">
            <h3 style={{ paddingRight: 125 }}>Email</h3>
            <TextField
              id="email"
              name="email"
              fullWidth
              placeholder="example@gmail.com    "
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </div>
        </div>
        <div className="Form__buttons">
          <Button
            sx={{ width: 130 }}
            color="error"
            variant="outlined"
            onClick={() => {
              dispatch(usersAction.closeFormForNewUser());
            }}
          >
            Cancel
          </Button>
          <Button
            sx={{ width: 130 }}
            color="success"
            variant="contained"
            type="submit"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}

export default AddNewUser;
