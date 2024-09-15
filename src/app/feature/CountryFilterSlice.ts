import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const countryFilterSlice = createSlice({
    name: 'countryFilter',
    initialState: {
        region: '',
        search: '',
    },
    reducers: {
        setRegion: (state, action: PayloadAction<string>) => {
            state.region = action.payload;
        },
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload;
        },
    },
});

// Export actions to update the state
export const { setRegion, setSearch } = countryFilterSlice.actions;
export default countryFilterSlice.reducer;