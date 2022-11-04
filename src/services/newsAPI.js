import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const newsApiHeaders = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': '25dbecf2femsh0e0b444150c2d86p1ebbe1jsn82d7b42359d2',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
}

const baseUrl = 'https://bing-news-search1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: newsApiHeaders });

export const cryptoNewsApi = createApi({
    reducerPath: "cryptoNewsApi",
    baseQuery: fetchBaseQuery({ baseUrl }),
      endpoints: (builder) => ({
          getNews: builder.query({
              query: ({newsCategory, count}) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
           }),
              
      }),
  });

export const { useGetNewsQuery } = cryptoNewsApi;