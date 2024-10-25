import { apiSlice } from "./apiSlice.js";
import { CONTACT_URL } from "../constants.js";

export const contactSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createContact: builder.mutation({
      query: (newContact) => ({
        url: `${CONTACT_URL}`,
        method: "POST",
        body: newContact,
      }),
      invalidatesTags: ["Contact"],
    }),

    getContact: builder.query({
      query: () => ({
        url: CONTACT_URL,
      }),
      providesTags: ["Contact"],
    }),
  }),
});

export const { useCreateContactMutation, useGetContactQuery } = contactSlice;
