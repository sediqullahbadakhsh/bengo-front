import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import fetchIpAddress from "../tools/fetchIpAddress";

// this file contains all the api configurations using RTKQ

export const searchApi = createApi({
  reducerPath: "searchApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api/v1" }),
  endpoints: (builder) => ({
    search: builder.query({
      providesTags: (result, error, args) => {
        return [{ type: "Search", id: "List" }];
      },
      query: (query = "") => `search?query=${encodeURIComponent(query)}`,
      transformResponse: (response) => {
        return {
          data: response.results,
        };
      },
    }),
    createQuery: builder.mutation({
      queryFn: async (query) => {
        const ipAddress = await fetchIpAddress();
        const response = await fetch("http://localhost:3000/api/v1/search", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            search_query: { query: query.query, ip_address: ipAddress },
          }),
        });

        const data = await response.json();
        return { data };
      },
      invalidatesTags: (result, erro, args) => {
        return [{ type: "Search", id: "List" }];
      },
    }),
    getMostAskedByUser: builder.query({
      query: () => `search/most_asked_by_users`,
    }),
    getTopKeywords: builder.query({
      query: ({ timeRange = "today", limit = 5 }) =>
        `search/top_keywords?limit=${limit}&timeRange=${timeRange}`,
    }),
    getSearchsInAWeek: builder.query({
      query: () => `search/searches_by_hour_in_week`,
    }),
  }),
});

export const {
  useSearchQuery,
  useCreateQueryMutation,
  useGetMostAskedByUserQuery,
  useGetTopKeywordsQuery,
  useGetSearchsInAWeekQuery,
} = searchApi;
