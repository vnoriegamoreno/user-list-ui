import userReducer from 'store/slices/userSlice';
import { UserList as UserState } from 'types/userTypes';
import fakeAPIUserListRes from 'mock/user-list.mock.json';

describe('userSlice reducer', () => {
  const initialState: UserState = {
    userList: [],
  };

  describe('when user-list is fetched', () => {
    it('should handle setUser correctly', () => {
      let state = userReducer(initialState, { type: 'unknown' });
      expect(state.userList.length).toBe(0);
    });
  });
});
