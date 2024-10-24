import { render, screen } from '@testing-library/react';
import App from 'App';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { UserList as UserState } from 'types/userTypes';
import userReducer from 'store/slices/userSlice';

type InitialState = {
  initialState: { userSlice: UserState }
}

const renderWithRedux = (
  component: JSX.Element,
  { initialState }: InitialState
) => {
  const store = configureStore({
    reducer: { userSlice: userReducer }, preloadedState: initialState
  });
  return {
    ...render(
      <Provider store={store}>
        {component}
      </Provider>
    ), store
  }
};

test('renders learn react link', () => {
  renderWithRedux(
    <App />,
    {
      initialState: {
        userSlice: { userList: [] }
      }
    }
  )
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
