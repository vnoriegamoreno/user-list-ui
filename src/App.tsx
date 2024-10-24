import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUsers } from 'store/slices/userSlice';
import fakeAPIUserListRes from 'mock/user-list.mock.json';
import logo from './logo.svg';

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const loadUserList = (): void => {
      dispatch(setUsers(fakeAPIUserListRes));
    };
    loadUserList();
  }, [dispatch]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
