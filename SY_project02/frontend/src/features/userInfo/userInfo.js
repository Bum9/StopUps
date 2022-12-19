import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  name: "",
  nickname: "",
  telephone: "",
};

const userInfoSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUEmail(state, action) {
      state.email = action.payload;
    },
    setUName(state, action) {
      state.name = action.payload;
    },
    setUNickname(state, action) {
      state.nickname = action.payload;
    },
    setUTelephone(state, action) {
      state.telephone = action.payload;
    },
    setULogout(state, action) {
      return initialState;
    },
  },
});

export const {
  setUEmail,
  setUName,
  setUNickname,
  setUTelephone,
  setULogout,
} = userInfoSlice.actions;

export const userInfoReducer = userInfoSlice.reducer;
