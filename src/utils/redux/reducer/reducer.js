import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listTasks: [],
};

const sliceState = createSlice({
  name: "state",
  initialState: initialState,
  reducers: {
    setListTasks: (state, action) => {
      state.favorites = action.payload;
    },
  },
});

const reducer = {
  state: sliceState.reducer,
};

export const { setListTasks } = sliceState.actions;
export default reducer;
