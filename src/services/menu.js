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
                    url: 'menu',
                    method: 'POST',
                    body: {
                        // token: token
                    },
                })
            },
        }),
        getSupplierCatagory: builder.mutation({
            query: (data) => {
                // const token = getCookie('token')
                const jsonString = JSON.stringify(data); // Stringify the object
                return ({
                    url: 'own_products/listSupplierCategory',
                    method: 'POST',
                    body: {
                        data: jsonString,
                        // token: token
                    },
                })
            },
        }),
  
    }),
});

export const { useGetSupplierCategoryQuery, useGetSupplierCatagoryMutation } = menuProductApi;
