import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configure } from '@testing-library/react';
import userReducer, { setUserListFilter } from 'store/slices/userSlice';
import Searchbox from 'components/Searchbox/Searchbox';
import { UserState } from 'types/userTypes';
import userDataMock from 'mock/user-list.mock.json';
import { configureStore } from '@reduxjs/toolkit';
import { User } from 'types/userTypes';

const initialState: UserState = { userList: userDataMock, userListFilter: [] };

const renderWithRedux = (
  component: JSX.Element,
  { initialState }: { initialState: UserState }
) => {
  const store = configureStore({
    reducer: { userSlice: userReducer },
    preloadedState: { userSlice: initialState },
  });

  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  };
};

describe('Searchbox Component', () => {
  it('should render withuot crash', () => {
    renderWithRedux(<Searchbox />, { initialState });

    const searchboxForm = screen.getByTestId('SearchboxForm');
    const inputField = screen.getByPlaceholderText('Search user');
    const button = screen.getByText('Search');

    expect(searchboxForm).toBeInTheDocument();
    expect(inputField).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  describe('when input field change', () => {
    it('should change the value successfully', () => {
      renderWithRedux(<Searchbox />, { initialState });

      const inputField = screen.getByPlaceholderText(
        'Search user'
      ) as HTMLInputElement;
      expect(inputField.value).toBe('');

      fireEvent.change(inputField, { target: { value: 'Jane' } });
      expect(inputField.value).toBe('Jane');
    });
  });

  describe('when submit the form', () => {
    describe('and the input has a value', () => {
      it('should dispatch setUserList and filter userList successfully', () => {
        const expectedUserList: User[] = [
          userDataMock[0],
          userDataMock[1],
          userDataMock[3],
        ];
        const { store } = renderWithRedux(<Searchbox />, { initialState });

        const inputField = screen.getByPlaceholderText(
          'Search user'
        ) as HTMLInputElement;
        fireEvent.change(inputField, { target: { value: 'i' } });

        const form = screen.getByTestId('SearchboxForm');
        fireEvent.submit(form);

        const state = store.getState().userSlice;
        expect(state.userListFilter).toStrictEqual(expectedUserList);
      });
    });

    describe('and the input is empty', () => {
      it('should reset the userList', () => {
        const { store } = renderWithRedux(<Searchbox />, { initialState });

        const inputField = screen.getByPlaceholderText(
          'Search user'
        ) as HTMLInputElement;
        fireEvent.change(inputField, { target: { value: '' } });

        const form = screen.getByTestId('SearchboxForm');
        fireEvent.submit(form);

        const state = store.getState().userSlice;
        expect(state.userListFilter).toStrictEqual(userDataMock);
      });
    });
  });
});
