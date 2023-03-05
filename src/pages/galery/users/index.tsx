import { useEffect } from "react";
import {
  useAppSelector,
  fetchUsers,
  addUser,
  selectUsers,
} from "../../../store";
import useThunk from "../../../hooks/useThunk";
import { Button, Loader } from "../../../components";
import { Header, Container, List } from "./style";
import UserListItem from "./UserListItem";

const Users = () => {
  const { users } = useAppSelector(selectUsers);
  const [fetchUsersLoading, fetchUsersError, getUsers] = useThunk(fetchUsers);
  const [addUserLoading, addUserError, createUser] = useThunk(addUser);

  useEffect(() => {
    const controller = new AbortController();
    getUsers(controller.signal);

    return () => controller.abort();
  }, [getUsers]);

  const handleClick = () => createUser();

  return (
    <Container>
      {fetchUsersError ? (
        <h1>Error loading users</h1>
      ) : (
        <>
          <Header>
            <h1>Users List</h1>
            <Button handleClick={handleClick} disabled={addUserLoading}>
              + Add User
            </Button>
          </Header>
          {fetchUsersLoading && <Loader />}

          <List>
            {users?.map((user) => <UserListItem key={user.id} user={user}/>)}
          </List>
        </>
      )}
    </Container>
  );
};

export default Users;
