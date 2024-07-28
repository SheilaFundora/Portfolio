import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  img: [],
};

const imagesSlice = createSlice({
  name: 'images',
  initialState: initialState,
  reducers: {
    createImagesRedux: (state, action) => {
      const { img } = action.payload;
      state.img = img;
    }
  },
});

export const { createImagesRedux } = imagesSlice.actions;
export default imagesSlice.reducer;
