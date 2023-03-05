import { GoTrashcan } from "react-icons/go";
import { Button } from "../../../components";
import { Card, Section } from "../../../components/panel/style";
import { Photo } from "../../../store";
import { Config, Header } from "../users/style";
import { useDeletePhotoMutation } from "../../../store";

interface PhotoListItemProps {
  photo: Photo;
}

const PhotoListItem = ({ photo }: PhotoListItemProps) => {
  const [removePhoto, results] = useDeletePhotoMutation()
  const handleDelete = (photo: Photo) => removePhoto(photo);

  const config = (
    <Config>
      <Button handleClick={() => handleDelete(photo)} disabled={false}>
        <GoTrashcan />
      </Button>
      {results.error && "Error"}
      <img src={photo.url} alt="pic" />
    </Config>
  );

  return (
    <Card>
      <Header>
        <Section>{config}</Section>
      </Header>
    </Card>
  );
};

export default PhotoListItem;
