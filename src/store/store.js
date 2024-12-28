import { configureStore } from '@reduxjs/toolkit'
import { ApiServices } from '../services/ApiServices'
import { bookmarkSlice } from './features/bookmarkSlice'
import { favoriteSlice } from './features/favoriteSlice'

const store = configureStore({
    reducer: {
        bookmarks: bookmarkSlice.reducer,
        favorites: favoriteSlice.reducer,
        [ApiServices.reducerPath]: ApiServices.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(ApiServices.middleware)
})

export default store