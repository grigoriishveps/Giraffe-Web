import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Giraffe } from 'src/api/dto/Giraffe.dto'
import { Aviary } from 'src/api/dto/Aviary.dto'

const baseUrl = `/api/aviary`

console.log('baseUrl', baseUrl)
export const giraffeApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: `/api/giraffe` }),
  endpoints: (builder) => ({
    getGiraffe: builder.query<Giraffe, string>({
      query: (id) => `/${id}`
    }),
    createGiraffe: builder.mutation<void, void>({
      query: () => ({
        url: '',
        method: 'POST'
      })
    }),
    updateGiraffe: builder.mutation<void, void>({
      query: () => ({
        url: '',
        method: 'PATCH'
      })
    }),
    removeGiraffe: builder.mutation<void, string>({
      query: (id) => ({
        url: `/${id}`,
        method: 'POST'
      })
    })
  })
})

export const aviaryApi = createApi({
  reducerPath: 'aviaryApi',
  tagTypes: ['Aviary'],
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getAviary: builder.query<Giraffe, string>({
      query: (id) => `/${id}`
    }),
    getListAviary: builder.query<Aviary[], void>({
      query: () => '',
      providesTags: ['Aviary']
    }),
    createAviary: builder.mutation<Giraffe, void>({
      query: () => ({
        url: '',
        method: 'POST'
      }),
      invalidatesTags: () => [{ type: 'Aviary' }]
    })
  })
})

export const {
  useGetGiraffeQuery,
  useCreateGiraffeMutation,
  useUpdateGiraffeMutation,
  useRemoveGiraffeMutation
} = giraffeApi
export const {
  useGetAviaryQuery,
  useGetListAviaryQuery,
  useCreateAviaryMutation
} = aviaryApi
