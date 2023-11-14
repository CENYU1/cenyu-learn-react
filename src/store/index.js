import { configureStore } from "@reduxjs/toolkit";
import { studentReducer } from "./stuSlice";
import { schoolReducer } from "./schoolSlice";

// 通过 configureStore(options) 创建 store 对象
const store = configureStore({
  reducer: {
    student: studentReducer,
    school: schoolReducer,
  },
});

export default store;
