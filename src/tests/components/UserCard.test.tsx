import { render, screen } from '@testing-library/react';
import UserCard from 'components/UserCard/UserCard';
import userDataMock from 'mock/user-list.mock.json';

jest.mock('react-svg', () => ({
  ReactSVG: ({ src }: { src: string; className: string }) => (
    <svg data-testid="AvatarSVG">
      <title>{src}</title>
    </svg>
  ),
}));

describe('UserCard Component', () => {
  it('renders without crashing', () => {
    render(<UserCard {...userDataMock[0]} />);
    const userCardEl = screen.getByTestId('UserCard');
    expect(userCardEl).toBeInTheDocument();
  });

  it('display the user name', () => {
    render(<UserCard {...userDataMock[0]} />);
    const userNameEl = screen.getByText('Alice Johnson');
    expect(userNameEl).toBeInTheDocument();
  });

  it('render the SVG avatar', () => {
    render(<UserCard {...userDataMock[0]} />);
    const avatarEl = screen.getByText('Alice Johnson');
    expect(avatarEl).toBeInTheDocument();
  });

  it('renders view details button', () => {
    render(<UserCard {...userDataMock[0]} />);
    const btnEl = screen.getByRole('button');
    expect(btnEl).toBeInTheDocument();
  });
});
