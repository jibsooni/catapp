import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const nameAdapter = createEntityAdapter();
export const nameSelectors = nameAdapter.getSelectors((state:RootState) => state.names)

const nameSlice = createSlice({
    name: 'names',
    initialState: nameAdapter.getInitialState(),
    reducers: {
        addName: nameAdapter.addOne
    },
});

export const {} = nameSlice.actions;
export default nameSlice.reducer;