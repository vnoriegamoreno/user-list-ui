import { useNavigate } from 'react-router-dom';
import { ReactSVG } from 'react-svg';
import leftArrow from 'assets/img/left-arrow.svg';

interface Props {
  title: string;
  back?: boolean;
}

const Header = ({ title, back = false }: Props) => {
  const navigate = useNavigate();

  const goToMainPage = (): void => navigate('/');

  return (
    <header className="Header" data-testid="Header">
      <h1 className="Title">
        {back && (
          <ReactSVG
            className="LeftArrow"
            data-testid="LeftArrow"
            onClick={goToMainPage}
            src={leftArrow}
          />
        )}
        {title}
      </h1>
    </header>
  );
};

export default Header;
