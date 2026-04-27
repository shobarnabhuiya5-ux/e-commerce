import { fetchBaseQuery } from '@reduxjs/toolkit/query';
import { createApi } from '@reduxjs/toolkit/query/react'

export const apiService = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com",
  }),
  endpoints: (build) => ({
    getProducts: build.query({
      query: ({category ,limit, skip}) => `/products${category ? `/category/${category}` : ""}?limit=${limit}&skip=${skip}`,
      
    }),
    getCategoryList: build.query({
      query:() =>"/products/category-list"
    }),
    getProductsDetails:  build.query({
      query:(id) =>"/products/category-list"
    }),

  }),
});

export const { useGetProductsQuery, useGetCategoryListQuery, useGetProductsDetailsQuery} = apiService;