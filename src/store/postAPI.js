import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {API_BASE_URL, API_USER_ID, postMockData} from "../api/api.js";

// Define your API service using RTK Query
export const postAPI = createApi({
    reducerPath: 'postAPI',
    baseQuery: fetchBaseQuery({baseUrl: API_BASE_URL}), // Ensure baseUrl is spelled correctly
    endpoints: (builder) => ({
        getPosts: builder.query({
            query: () => 'posts'
        }),
        getPostById: builder.query({
            query: (postId = 1) => `posts/${postId}`
        }),
        createPost: builder.mutation({
            query: (data = postMockData) => ({
                url: 'posts',
                method: 'POST',
                body: {
                    title: data.title,
                    body: data.body,
                    userId: API_USER_ID
                }
            })
        })
    })
});

export const {
    useGetPostsQuery,
    useLazyGetPostsQuery,
    useGetPostByIdQuery,
    useCreatePostMutation
} = postAPI;
