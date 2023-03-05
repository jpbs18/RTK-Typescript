import React, { useRef, MutableRefObject } from "react";
import { addMovie, Movie, removeMovie, selectMovies, useAppDispatch, useAppSelector } from "../../../store";
import { Form, Button } from "../../../components";

const Movies = () => {
  const dispatch = useAppDispatch();
  const { movies } = useAppSelector(selectMovies);
  const movieName =
    useRef<HTMLInputElement>() as MutableRefObject<HTMLInputElement>;

  const config = [{ id: 1, label: "Movie", type: "text", ref: movieName }];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (movieName.current.value !== "") {
      dispatch(addMovie(movieName.current.value));
      movieName.current.value = "";
    }
  };

  const handleRemove = (movie: Movie) => dispatch(removeMovie(movie));

  return (
    <div>
      <h2>Movies List</h2>
      <Form config={config} onSubmit={handleSubmit}>
        <Button>Add Movie</Button>
      </Form>

      <div>
        <ul>
          {movies.map((movie) => {
            return (
              <li key={movie.id}>
                <h4>{movie.name}</h4>
                <button onClick={() => handleRemove(movie)}>
                  Remove Movie
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Movies;
