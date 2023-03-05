import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { faker } from "@faker-js/faker";

interface Photo {
  id: number;
  albumId: number;
  url: string;
}

export const photosApi = createApi({
  reducerPath: "photos",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3005" }),
  tagTypes: ["Photo", "AlbumPhotos"],
  endpoints: (builder) => ({
    getPhotos: builder.query({
      providesTags: (result, error, album) => {
        const tags = result.map((photo: Photo) => {
          return { type: "Photo", id: photo.id };
        });

        return [...tags, { type: "AlbumPhotos", id: album.id }];
      },
      query: (album) => {
        return {
          url: "/photos",
          params: { albumId: album.id },
          method: "GET",
        };
      },
    }),
    addPhoto: builder.mutation({
        invalidatesTags: (result, error, album) => {
            return [{ type: "AlbumPhotos", id: album.id }];
          },
        query: (album) => {
            return {
                url: "/photos",
                method: "POST",
                body: {
                    albumId: album.id,
                    url: faker.image.abstract(150, 150, true)
                }
            }
        }
    }),
    deletePhoto: builder.mutation({
        invalidatesTags: (result, error, photo) => {
            return [{ type: "Photo", id: photo.id }];
          },
          query: (photo) => {
            return {
                url: `/photos/${photo.id}`,
                method: "DELETE"
            }
          }
    })
  }),
});

export const { useGetPhotosQuery, useAddPhotoMutation, useDeletePhotoMutation } = photosApi;
export type { Photo };