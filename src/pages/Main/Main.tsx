import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { setUsers } from 'store/slices/userSlice';

import Header from 'components/Header/Header';
import Searchbox from 'components/Searchbox/Searchbox';
import UserCard from 'components/UserCard/UserCard';
import { User } from 'types/userTypes';

const Main: React.FC = () => {
  const dispatch = useDispatch();
  const userList = useSelector((state: any) => state.userSlice.userList);

  useEffect(() => {
    (async function loadUsers(): Promise<void> {
      const response = await fetch('http://localhost:8080/api/user');
      try {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        dispatch(setUsers(data));
      } catch (err) {
        console.error('Error fetching user data: ', err);
      }
    })();
  }, [dispatch]);

  return (
    <main className="Main" data-testid="Main">
      <Header title="Users" />
      <Searchbox />
      {userList.length
        ? userList.map((user: User) => <UserCard {...user} key={user.id} />)
        : null}
    </main>
  );
};

export default Main;
