import { Album, useGetAlbumsQuery, useCreateAlbumMutation,  User } from "../../../store";
import { Button, Loader } from "../../../components";
import { Container, Header, List } from "../users/style";
import AlbumListItem from "./AlbumListItem"

interface AlbumsProps {
  user: User;
}

const Albums = ({ user }: AlbumsProps) => {
  const { data, error, isFetching } = useGetAlbumsQuery(user);
  const [addAlbum, results] = useCreateAlbumMutation()

  const handleClick = () => addAlbum(user);

  return (
    <Container>
    {isFetching && <Loader />}
      {error ? (
        <h1>Error loading albums</h1>
      ) : (
        <>
          <Header>
            <h2>Albums List</h2>
            <Button handleClick={handleClick} disabled={false}>
              + Add Album
            </Button>
          </Header>

          <List>
            {data?.map((album: Album) => <AlbumListItem key={album.id} album={album}/>)}
          </List>
        </>
      )}
    </Container>
  );
};

export default Albums;
