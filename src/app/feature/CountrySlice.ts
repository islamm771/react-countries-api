import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ICountry, IGetCountry, IGetCountriesParams } from "../../interface";

export const countrySlice = createApi({
    reducerPath: 'country',
    tagTypes: ['Country'],
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://restcountries.com/v3.1',
    }),
    endpoints: (builder) => ({
        getCountries: builder.query<ICountry[], IGetCountriesParams | void>({
            query: (args) => {
                if (args?.region) {
                    return `/region/${args?.region}`;
                }
                if (args?.search) {
                    return `/name/${args?.search}`;
                }
                return '/all';
            },
        }),
        getCountry: builder.query<ICountry[], IGetCountry>({
            query: (arg) => `/name/${arg.name}`,
        }),
    }),
})


export const { useGetCountriesQuery, useGetCountryQuery } = countrySlice

