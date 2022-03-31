// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { getMe } from "/src/api/auth/request";

// const initialState = {
//   auth: {},
//   isLoading: false,
// };

// export const getMeAction = createAsyncThunk("auth/getMe", async () => {
//   const response = await getMe();

//   return response;
// });

// export const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(getMeAction.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(getMeAction.fulfilled, (state, { payload }) => {
//         state.isLoading = false;
//         state.auth = payload;
//       })
//       .addCase(getMeAction.rejected, (state) => {
//         state.isLoading = false;
//         state.error = true;
//       });
//   },
// });

// export const selectGetMe = (state) => state.auth;

// export default authSlice.reducer;
