//import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//Get the headers from Rapid Api
const cryptoNewsHeaders = {
  "X-BingApis-SDK": "true",
  "X-RapidAPI-Key": "c6c6022522msh84d463a9644dcfdp124846jsn8f43bba9a2c8",
  "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
};

//Get the url from Rapid Api
const baseUrl = "https://bing-news-search1.p.rapidapi.com";

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory, count }) =>
        createRequest(
          `/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`
        ),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
