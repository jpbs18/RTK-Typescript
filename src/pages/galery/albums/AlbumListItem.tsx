import { GoTrashcan } from "react-icons/go";
import { Button, ExpandablePanel } from "../../../components";
import { Album, useDeleteAlbumMutation } from "../../../store";
import Photos from "../photos";
import { Config } from "../users/style";

interface AlbumListItemProps {
  album: Album
}

const AlbumListItem = ({ album }: AlbumListItemProps) => {
  const [removeAlbum, results] = useDeleteAlbumMutation();

  const handleDelete = () => removeAlbum(album)

  const config = (
    <Config>
      <Button handleClick={handleDelete} disabled={results.isLoading}>
        <GoTrashcan />
      </Button>
      {results.error && "Error"}
      <p>{album.title}</p>
    </Config>
  );

  return (
    <ExpandablePanel config={config}>
      <Photos album={album}/>
    </ExpandablePanel>
  );
};

export default AlbumListItem;
