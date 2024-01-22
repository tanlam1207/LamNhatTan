import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isLogin: false,
  },
  reducers: {
    setisLogin: (state, action) => {
      return {
        ...state,
        isLogin: action.payload,
      };
    },
  },
});

export const { setisLogin } = userSlice.actions;
export default userSlice.reducer;
