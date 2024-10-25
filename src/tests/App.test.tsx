import { render, screen } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import App from 'App';
import { UserList as UserState } from 'types/userTypes';
import userReducer from 'store/slices/userSlice';

jest.mock('pages/Main/Main', () => {
  const MockMainPage = () => <div>Main Page</div>;
  MockMainPage.displayName = 'MockMainPage';
  return MockMainPage;
});

type InitialState = {
  initialState: { userSlice: UserState };
};

const renderWithRedux = (
  component: JSX.Element,
  { initialState }: InitialState
) => {
  const store = configureStore({
    reducer: { userSlice: userReducer },
    preloadedState: initialState,
  });
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  };
};

test('renders the Main component on the default route "/"', () => {
  renderWithRedux(<App />, {
    initialState: {
      userSlice: { userList: [] },
    },
  });
  const mainElement = screen.getByText('Main Page');
  expect(mainElement).toBeInTheDocument();
});
