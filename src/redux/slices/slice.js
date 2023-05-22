import { createSlice } from "@reduxjs/toolkit";

export let Slice = createSlice({
  name: "slice",
  initialState: {
    count: 0,
  },

  reducers: {
    setScoreByRedux(state, action) {
      state.count += action.payload;
    },
  },
});

export let { setScoreByRedux } = Slice.actions;
export default Slice.reducer;
