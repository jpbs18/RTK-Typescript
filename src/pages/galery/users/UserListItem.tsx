import { GoTrashcan } from "react-icons/go";
import { Button, ExpandablePanel } from "../../../components";
import useThunk from "../../../hooks/useThunk";
import { deleteUser, User } from "../../../store";
import Albums from "../albums";
import { Config } from "./style";

interface UserListItemProps {
  user: User;
}

const UserListItem = ({ user }: UserListItemProps) => {
  const [deletingUser, error, removeUser] = useThunk(deleteUser);

  const handleDelete = () => removeUser(user.id);

  const config = (
    <Config>
      <Button handleClick={handleDelete} disabled={deletingUser}>
        <GoTrashcan />
      </Button>
      {error && "Error"}
      <p>{user.name}</p>
    </Config>
  );

  return (
    <ExpandablePanel config={config}>
      <Albums user={user} />
    </ExpandablePanel>
  );
};

export default UserListItem;
