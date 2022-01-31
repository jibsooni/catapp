import { createSlice } from "@reduxjs/toolkit";
import { logoutUser } from "./authSlice";

export interface CatItem {
    id: string;
    upvotes: number;
}

const initialState: CatItem[] = [];

const catsSlice = createSlice({
    name: 'cats',
    initialState: {
        cats: initialState,
    },
    reducers: {
        setCats: (state, action) => {
            state.cats = action.payload
        },
        upVoteCat: (state, action) => {
            const foundCat = state.cats.find(catItem => catItem.id === action.payload);
            
            if (foundCat) {
                foundCat.upvotes += 1;
            }
        },
        resetCat: (state, action) => {
            const foundCat = state.cats.find(catItem => catItem.id === action.payload);
            
            if (foundCat) {
                foundCat.upvotes = 0;
            }
        },
        resetAllCats: state => {
            state.cats.forEach(cat => cat.upvotes = 0)
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(logoutUser, (state) => {
            state.cats.forEach(cat => cat.upvotes = 0)
        })
    }
});

export const { setCats, upVoteCat, resetCat, resetAllCats } = catsSlice.actions;

export default catsSlice.reducer;