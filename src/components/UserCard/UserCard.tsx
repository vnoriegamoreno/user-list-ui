import { User } from 'types/userTypes';

const UserCard = ({ id, name, age, city, friends }: User) => (
  <ul>
    <li>{id}</li>
    <li>{name}</li>
    <li>{age}</li>
    <li>{city}</li>
    <li>{friends?.length}</li>
  </ul>
);

export default UserCard;
