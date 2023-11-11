import { UserModel } from "@/models";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const WorkerAPI = createApi({
  reducerPath: "WorkerAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "https://example.com" }),
  tagTypes: ["Worker"],
  endpoints: (builder) => ({
    getUsers: builder.query<UserModel[], void>({
      query: () => ({
        url: "/users",
      }),
      providesTags: ["Worker"],
    }),
    getUser: builder.query<UserModel, string>({
      query: (id) => ({
        url: `/users/${id}`,
      }),
      providesTags: ["Worker"],
    }),
  }),
});

export const { useGetUsersQuery, useGetUserQuery } = WorkerAPI;