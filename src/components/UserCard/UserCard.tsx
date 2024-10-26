import { User } from 'types/userTypes';
import { ReactSVG } from 'react-svg';
import avatar from 'assets/img/avatar.svg';

const UserCard = ({ id, name }: User) => (
  <div className="UserCard" data-testid="UserCard">
    <ReactSVG data-testid="AvatarSVG" src={avatar} className="Avatar" />
    <h3 className="UserName">{name}</h3>
    <button className="ViewUserDetails" id={id}>
      View details
    </button>
  </div>
);

export default UserCard;
