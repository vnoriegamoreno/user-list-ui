import { User } from 'types/userTypes';
import { ReactSVG } from 'react-svg';
import { useNavigate } from 'react-router-dom';
import avatar from 'assets/img/avatar.svg';

const UserCard = ({ id, name }: User) => {
  const navigate = useNavigate();

  const goToProfilePage = (id: string): void => {
    navigate(`/profile/${id}`);
  };

  return (
    <div className="UserCard" data-testid="UserCard">
      <ReactSVG data-testid="AvatarSVG" src={avatar} className="Avatar" />
      <h3 className="UserName">{name}</h3>
      <button onClick={() => goToProfilePage(id)} className="ViewUserDetails">
        View details
      </button>
    </div>
  );
};

export default UserCard;
