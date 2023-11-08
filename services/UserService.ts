import { UserModel } from "@/models"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const UserAPI = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://example.com" }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    getUsers: builder.query<UserModel[], void>({
      query: () => ({
        url: "/users",
      }),
      providesTags: ["User"],
    }),
    getUser: builder.query<UserModel, string>({
      query: (id) => ({
        url: `/users/${id}`,
      }),
      providesTags: ["User"],
    }),
  }),
})