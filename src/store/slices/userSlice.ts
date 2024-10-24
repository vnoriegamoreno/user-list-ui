import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, UserList as UserState } from 'types/userTypes';

const initialState: UserState = { userList: [], };

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<User[]>) => {
      state.userList = action.payload;
    },
  }
});

export const { setUsers } = userSlice.actions;
export default userSlice.reducer;