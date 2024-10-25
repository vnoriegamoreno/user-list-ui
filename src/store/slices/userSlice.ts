import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, UserState } from 'types/userTypes';

const initialState: UserState = { userList: [], userListFilter: [] };

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<User[]>) => {
      state.userList = action.payload;
    },
    setUserListFilter: (state, action: PayloadAction<User[]>) => {
      state.userListFilter = action.payload;
    },
  },
});

export const { setUsers, setUserListFilter } = userSlice.actions;
export default userSlice.reducer;
