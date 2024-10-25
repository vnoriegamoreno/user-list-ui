import { User } from 'types/userTypes';

const UserCard = ({ id, name }: User) => (
  <ul>
    <li>ID: {id}</li>
    <li>Name: {name}</li>
    <li>
      <button>View details</button>
    </li>
  </ul>
);

export default UserCard;
