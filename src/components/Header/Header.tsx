interface Props {
  title: string;
}

const Header = ({ title }: Props) => (
  <header className="Header" data-testid="Header">
    <h1 className="Title">{title}</h1>
  </header>
);

export default Header;
