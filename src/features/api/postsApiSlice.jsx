import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const postsApiSlice = createApi({
    reducerPath: 'postsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
    endpoints: (builder) => ({
        getPosts: builder.query({
            query: () => 'posts',
        }),
        addPost: builder.mutation({
            query: (newPost) => ({
                url: 'posts',
                method: 'POST',
                body: newPost,
            }),
        }),
        updatePost: builder.mutation({
            query: ({ id, ...updatedPost }) => ({
                url: `posts/${id}`,
                method: 'PUT',
                body: updatedPost,
            }),
        }),
        deletePost: builder.mutation({
            query: (id) => ({
                url: `posts/${id}`,
                method: 'DELETE',
            }),
        }),
    }),
});

export const {
    useGetPostsQuery,
    useAddPostMutation,
    useUpdatePostMutation,
    useDeletePostMutation,
} = postsApiSlice;
