import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { User } from 'types/userTypes';

import { ReactSVG } from 'react-svg';
import Header from 'components/Header/Header';
import UserCard from 'components/UserCard/UserCard';
import avatar from 'assets/img/avatar.svg';

const Profile: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    (async function loadUserProfile(): Promise<void> {
      const response = await fetch(`http://localhost:8080/api/user/${id}`);
      try {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setUser(data);
      } catch (err) {
        console.error('Error fetching user data: ', err);
      }
    })();
  }, [setUser, id]);

  return (
    <div className="Profile" data-testid="Profile">
      <Header title="Main" back />
      <div className="ProfileDetails">
        <ReactSVG
          data-testid="ProfileAvatarSVG"
          src={avatar}
          className="ProfileAvatar"
        />
        <ul className="ProfileProperties">
          <li>Name: {user?.name}</li>
          <li>Age: {user?.age}</li>
          <li>City: {user?.city}</li>
        </ul>
      </div>
      <h1 className="Title">Friends</h1>
      <div className="UserList">
        {user?.friends.length &&
          user?.friends.map((friend: User) => (
            <UserCard {...friend} key={friend.id} />
          ))}
      </div>
    </div>
  );
};

export default Profile;
