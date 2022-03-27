import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import UsersList from "./components/UsersList";
import AddNewUser from "./components/AddNewUser";
import Container from "./components/Container";
import { usersOperations, usersSelectors } from "./redux/users";
import "./App.css";

function App() {
  const formForNewUser = useSelector(usersSelectors.getFormValue);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(usersOperations.initUsers());
  }, [dispatch]);

  return (
    <div className="App__container">
      <h1 className="App__title">Dashboard</h1>
      {formForNewUser ? (
        <Container title="Form">
          <AddNewUser />
        </Container>
      ) : (
        <Container title="User list">
          <UsersList />
        </Container>
      )}
    </div>
  );
}

export default App;
