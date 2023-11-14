import { configureStore, createSlice } from "@reduxjs/toolkit";

/**
 * createSlice(options) 传入配置对象创建 reducer 的切片
 * options.name: 用来自动生成 action 中的 type 前缀
 * options.initialState: 该 slice 的 state 的初始值
 * options.reducers: 指定 state 的各种操作
 */
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

/**
 * 切片对象会帮助我们生成 action 对象
 * actions 中存储的是 slice 生成的 actionCreator，调用函数后就可以创建 action 对象
 * action 对象的结构 {type: sliceName/函数名, payLoad: 函数的参数}
 */
export const { setName, setAge } = stuSlice.actions;

// 通过 configureStore(options) 创建 store 对象
const store = configureStore({
  reducer: {
    student: stuSlice.reducer,
  },
});

export default store;
