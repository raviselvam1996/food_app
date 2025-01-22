import { createApi } from '@reduxjs/toolkit/query/react';
import BaseQueryInstance from '../rtk-base-setings/baseQuery';;
// import { getCookie } from 'cookies-next'

export const menuProductApi = createApi({
    reducerPath: 'menuProductApi',
    baseQuery: BaseQueryInstance,
    endpoints: (builder) => ({
        getSupplierCategory: builder.query({

            query: () => {
                // const token = getCookie('token')

                return ({
                    url: 'admin/menu',
                    method: 'GET',
                 
                })
            },
        }),
        menuStatusChange: builder.mutation({
            query: (data) => {
                // const token = getCookie('token')
                return ({
                    url: 'admin/menu/change_status',
                    method: 'POST',
                    body: data,
                })
            },
        }),
  
    }),
});

export const { useGetSupplierCategoryQuery, useMenuStatusChangeMutation } = menuProductApi;
