import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    bookmarks: JSON.parse(localStorage.getItem("bookmarks")) || [],
};

export const bookmarkSlice = createSlice({
    name: "bookmarks",
    initialState,
    reducers: {
        addBookmark: (state, action) => {

            const existed = state.bookmarks.find(item => item.mal_id === action.payload.mal_id);
            if (!existed) {
                state.bookmarks.push(action.payload);
                localStorage.setItem("bookmarks", JSON.stringify(state.bookmarks))
            }
        },
        removeBookmark: (state, action) => {

            state.bookmarks = state.bookmarks.filter(item => item.mal_id !== action.payload.mal_id);

            if (state.bookmarks.length === 0) {
                localStorage.removeItem("bookmarks")
            } else {
                localStorage.setItem("bookmarks", JSON.stringify(state.bookmarks))
            }
        },
    },
});

export const { addBookmark, removeBookmark } = bookmarkSlice.actions;
export default bookmarkSlice.reducer;
