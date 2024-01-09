import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { userLoggedIn } from "./authSlice"; // Import the correct action

const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:9000/api/v1" }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: ({ email, password }) => ({
        url: "login",
        method: "POST",
        body: {
          email,
          password,
        },
      }),
      onQueryStarted: async (arg, { queryFulfilled, dispatch }) => {
        try {
          const result = await queryFulfilled;
          dispatch(
            userLoggedIn({
              accessToken: result.accessToken,
              user: result.data.user,
            })
          );
        } catch (error) {
          console.log("error");
        }
      },
    }),
  }),
});

export const { useLoginMutation } = api;

export default api;
