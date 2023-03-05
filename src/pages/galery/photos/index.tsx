import { Loader, Button } from "../../../components";
import { Album, Photo, useAddPhotoMutation } from "../../../store";
import { useGetPhotosQuery } from "../../../store";
import { Container, Header, List } from "../users/style";
import PhotoListItem from "./PhotoListItem";

interface PhotosListProps {
  album: Album;
}

const Photos = ({ album }: PhotosListProps) => {
  const { data, error, isFetching } = useGetPhotosQuery(album);
  const [addPhoto, results] = useAddPhotoMutation();

  const handleClick = () => addPhoto(album);

  return (
    <Container>
      {isFetching && <Loader />}
      {error ? (
        <h1>Error loading photos</h1>
      ) : (
        <>
          <Header>
            <h2>Photos List</h2>
            <Button handleClick={handleClick} disabled={false}>
              + Add Photo
            </Button>
          </Header>

          <List>
            {data?.map((photo: Photo) => (
              <PhotoListItem key={photo.id} photo={photo} />
            ))}
          </List>
        </>
      )}
    </Container>
  );
};

export default Photos;
