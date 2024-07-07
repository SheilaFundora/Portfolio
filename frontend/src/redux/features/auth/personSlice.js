import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null,
};

const personSlice = createSlice({
    name: 'person',
    initialState: initialState,
    reducers: {
        createUserRedux: (state, action) => {
            const { user } = action.payload;
            state.user = user;
        }
    },
});

export const { createUserRedux } = personSlice.actions;
export default personSlice.reducer;
