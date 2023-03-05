import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { faker } from "@faker-js/faker";

interface Album {
  id: number;
  title: string;
  userId: number;
}

export const albumsApi = createApi({
  reducerPath: "albums",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3005" }),
  tagTypes: ["Album", "UserAlbums"],
  endpoints: (builder) => ({
    getAlbums: builder.query({
      providesTags: (result, error, user) => {
        const tags = result.map((album: Album) => {
          return { type: "Album", id: album.id };
        });

        return [...tags, { type: "UserAlbums", id: user.id }];
      },
      query: (user) => {
        return {
          url: "/albums",
          params: { userId: user.id },
          method: "GET"
        };
      },
    }),
    createAlbum: builder.mutation({
      invalidatesTags: (result, error, user) => {
        return [{ type: "UserAlbums", id: user.id }];
      },
      query: (user) => {
        return {
          url: "/albums",
          method: "POST",
          body: {
            userId: user.id,
            title: faker.commerce.productName(),
          },
        };
      },
    }),
    deleteAlbum: builder.mutation({
      invalidatesTags: (result, error, album) => {
        return [{ type: "Album", id: album.id }];
      },
      query: (album) => {
        return {
          url: `/albums/${album.id}`,
          method: "DELETE",
        };
      },
    }),
  }),
});

export const {
  useGetAlbumsQuery,
  useCreateAlbumMutation,
  useDeleteAlbumMutation,
} = albumsApi;
export type { Album };
