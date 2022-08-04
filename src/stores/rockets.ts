import { createSlice } from "@reduxjs/toolkit";

const Rockets = createSlice({
  name: "rockets",
  initialState: {
    rockets: [],
    loading: false,
    error: null,
    filter: "",
    hasNextPage: true,
    page: 1,
    totalPage: 1,
    currentRocket: null,
    useModal: false,
    currentLink: "",
  },
  reducers: {
    setRockets: (state, action) => {
      state.rockets = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    setHasNextPage: (state, action) => {
      state.hasNextPage = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    addPages: (state) => {
      state.page += 1;
    },
    reducePages: (state) => {
      state.page -= 1;
    },
    setTotalPage: (state, action) => {
      state.totalPage = action.payload;
    },
    setCurrentRocket: (state, action) => {
      state.currentRocket = action.payload;
    },
    setUseModal: (state, action) => {
      state.useModal = action.payload;
    },
    setCurrentLink: (state, action) => {
      state.currentLink = action.payload;
    },
  },
});

export const {
  setRockets,
  setLoading,
  setError,
  setFilter,
  setHasNextPage,
  setPage,
  setTotalPage,
  reducePages,
  addPages,
  setCurrentRocket,
  setUseModal,
  setCurrentLink,
} = Rockets.actions;
export default Rockets.reducer;
