import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { setUsers } from 'store/slices/userSlice';

import Header from 'components/Header/Header';
import Searchbox from 'components/Searchbox/Searchbox';

const Main: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    (async function loadUsers(): Promise<void> {
      const response = await fetch('http://localhost:8080/api/user');
      try {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const userList = await response.json();
        dispatch(setUsers(userList));
      } catch (err) {
        console.error('Error fetching user data: ', err);
      }
    })();
  }, [dispatch]);

  return (
    <main className="Main" data-testid="Main">
      <Header title="Users" />
      <Searchbox />
    </main>
  );
};

export default Main;
