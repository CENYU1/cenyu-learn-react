import { createSlice } from "@reduxjs/toolkit";

const stuSlice = createSlice({
  name: "stu",
  initialState: {
    name: "cenyu",
    age: 21,
    address: "山西",
  },
  reducers: {
    setName(state, action) {
      // 该 state 参数是一个代理对象，可以直接修改
      state.name = action.payload;
    },
    setAge(state, action) {
      state.age = action.payload;
    },
  },
});

export const { setName, setAge } = stuSlice.actions;
export const { reducer: studentReducer } = stuSlice;
