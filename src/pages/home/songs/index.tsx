import React, { MutableRefObject, useRef } from "react";
import { addSong, removeSong, selectSongs, Song, useAppSelector, useAppDispatch } from "../../../store";
import { Form, Button } from "../../../components";

const Songs = () => {
  const dispatch = useAppDispatch();
  const { songs } = useAppSelector(selectSongs);
  const songName =
    useRef<HTMLInputElement>() as MutableRefObject<HTMLInputElement>;

  const config = [{ id: 1, label: "Songs", type: "text", ref: songName }];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (songName.current.value !== "") {
      dispatch(addSong(songName.current.value));
      songName.current.value = "";
    }
  };

  const handleRemove = (song: Song) => dispatch(removeSong(song));

  return (
    <div>
      <h2>Songs List</h2>
      <Form config={config} onSubmit={handleSubmit}>
        <Button>Add Song</Button>
      </Form>

      <div>
        <ul>
          {songs.map((song) => {
            return (
              <li key={song.id}>
                <h3>{song.name}</h3>
                <button onClick={() => handleRemove(song)}>Remove Song</button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Songs;
