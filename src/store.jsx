import { configureStore } from '@reduxjs/toolkit';
import { postsApiSlice } from './features/api/postsApiSlice';

export const store = configureStore({
    reducer: {
        [postsApiSlice.reducerPath]: postsApiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(postsApiSlice.middleware),
});
