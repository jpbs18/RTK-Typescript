import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { moviesReducer } from "./slices/moviesSlice";
import { songsReducer } from "./slices/songsSlice";
import { carsReducer } from "./slices/carsSlice";
import { usersReducer } from "./slices/usersSlice";
import { albumsApi } from "./apis/albumsApi";
import { photosApi } from "./apis/photosApi";

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    songs: songsReducer,
    cars: carsReducer,
    users: usersReducer,
    [albumsApi.reducerPath]: albumsApi.reducer,
    [photosApi.reducerPath]: photosApi.reducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(albumsApi.middleware)
      .concat(photosApi.middleware);
  },
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
type DispatchFunc = () => AppDispatch;

export const useAppDispatch: DispatchFunc = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export * from "./apis/photosApi";
export * from "./apis/albumsApi";
export * from "./slices/moviesSlice";
export * from "./slices/songsSlice";
export * from "./slices/usersSlice";
export * from "./slices/carsSlice";
export * from "./thunks/users";
