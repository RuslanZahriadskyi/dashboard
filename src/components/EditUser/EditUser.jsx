import * as yup from "yup";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { Button, TextField } from "@mui/material";
import { usersAction } from "../../redux/users";

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
  username: yup.string("Must by string"),
  city: yup.string("Must by string"),
});

function EditUser({ editUser, setEditedUser }) {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: editUser.email,
      name: editUser.name,
      username: editUser.username,
      city: editUser.address.city,
    },
    validationSchema: validationSchema,
    onSubmit: ({ email, name, username, city }) => {
      dispatch(
        usersAction.changeUserInfo({
          email,
          name,
          username,
          address: { city },
          id: editUser.id,
        })
      );
      setEditedUser(null);

      dispatch(usersAction.closeModal());
    },
  });

  return (
    <div style={{ padding: "10px 0" }}>
      <h2
        style={{
          margin: 0,
          padding: "0 0 10px 10px",
        }}
      >
        Edit
      </h2>
      <form onSubmit={formik.handleSubmit}>
        <div
          style={{
            padding: 10,
            borderTop: "1px solid #b8b8b8",
            borderBottom: "1px solid #b8b8b8",
          }}
        >
          <div style={{ display: "flex", justifyContent: " space-between" }}>
            <h3 style={{ paddingRight: 30 }}>Name</h3>
            <TextField
              id="name"
              name="name"
              sx={{ width: 400 }}
              placeholder="User Name"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
          </div>
          <div style={{ display: "flex", justifyContent: " space-between" }}>
            <h3 style={{ paddingRight: 30 }}>Username</h3>
            <TextField
              id="username"
              name="username"
              sx={{ width: 400 }}
              placeholder="write your username"
              value={formik.values.username}
              onChange={formik.handleChange}
              error={formik.touched.username && Boolean(formik.errors.username)}
              helperText={formik.touched.username && formik.errors.username}
            />
          </div>
          <div style={{ display: "flex", justifyContent: " space-between" }}>
            <h3 style={{ paddingRight: 30 }}>Email</h3>
            <TextField
              id="email"
              name="email"
              sx={{ width: 400 }}
              placeholder="example@gmail.com    "
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </div>
          <div style={{ display: "flex", justifyContent: " space-between" }}>
            <h3 style={{ paddingRight: 30 }}>City</h3>
            <TextField
              id="city"
              name="city"
              sx={{ width: 400 }}
              placeholder="write your city"
              value={formik.values.city}
              onChange={formik.handleChange}
              error={formik.touched.city && Boolean(formik.errors.city)}
              helperText={formik.touched.city && formik.errors.city}
            />
          </div>
        </div>
        <div
          style={{
            padding: 10,
            width: 300,
            marginLeft: "auto",
            display: "flex",
            justifyContent: " space-between",
          }}
        >
          <Button
            sx={{
              width: 130,
              height: 40,
              borderColor: "#bd0000",
              "&:hover": {
                borderColor: "#db8400",
              },
            }}
            color="error"
            variant="outlined"
            onClick={() => {
              dispatch(usersAction.closeModal());
              setEditedUser(null);
            }}
          >
            Cancel
          </Button>
          <Button
            sx={{
              width: 130,
              height: 40,
              backgroundColor: "#ffa724",
              "&:hover": {
                backgroundColor: "#db8400",
              },
            }}
            color="success"
            variant="contained"
            type="submit"
          >
            Edit
          </Button>
        </div>
      </form>
    </div>
  );
}

export default EditUser;
