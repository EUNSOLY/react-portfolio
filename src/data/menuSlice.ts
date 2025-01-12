import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MenuNameType } from '../utils/type';

interface State {
  selectMenuName: MenuNameType;
}
const initialState = {
  selectMenuName: 'HOME',
} as State;
const menuSlice = createSlice({
  name: 'menu', // 슬라이서이름
  initialState, // 초기값
  reducers: {
    setSelectMenuName: (state, action: PayloadAction<MenuNameType>) => {
      state.selectMenuName = action.payload;
    },
  }, //리듀서
});

export default menuSlice.reducer;
export const { setSelectMenuName } = menuSlice.actions;
