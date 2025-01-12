import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import menuReducer from '../data/menuSlice';
const store = configureStore({
  reducer: {
    menu: menuReducer,
  },
});

// NOTE : 타입 스크립트 적용
// RootState : Redux 스토어의 state를 나타내는 타입
// AppDispatch : Redux 액션을 dispatch하는 함수의 타입
// useSelector 는 useSelectorHook 타입이지만, 우리가 정의한 RootState 로 제네릭 타입을 지정해야 한다.
// useDispatch 는 함수 형태이고, 리턴 타입은 리덕스 스토어의 dispatch 이다. 이는 이미 store/index.ts 에서 AppDispatch 타입으로 정의한 타입이기 때문에 AppDispatch 를 import 해서 사용
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
