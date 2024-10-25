import userReducer, { setUsers } from 'store/slices/userSlice';
import { UserState } from 'types/userTypes';
import userDataMock from 'mock/user-list.mock.json';

describe('userSlice reducer', () => {
  const initialState: UserState = {
    userList: [],
    userListFilter: [],
  };

  it('should handle initial state correctly', () => {
    const state = userReducer(initialState, { type: 'unknown' });
    expect(state.userList.length).toBe(0);
    expect(state.userListFilter.length).toBe(0);
  });

  describe('when user-list is fetched successfully', () => {
    it('should handle setUser action', () => {
      const state = userReducer(initialState, setUsers(userDataMock));
      expect(state.userList).toStrictEqual(userDataMock);
    });
    it('should handle setUserListFilter action', () => {
      const state = userReducer(initialState, setUsers(userDataMock));
      expect(state.userList).toStrictEqual(userDataMock);
    });
  });
});
