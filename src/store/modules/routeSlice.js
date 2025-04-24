import { createSlice } from "@reduxjs/toolkit";

const routesSlice = createSlice({
  name: "route",
  initialState: {
    routes: [],
  },
  reducers: {
    setRoutes: (state, action) => {
      state.routes = action.payload;
    },
  },
});

export const { setRoutes } = routesSlice.actions;
export default routesSlice.reducer;
