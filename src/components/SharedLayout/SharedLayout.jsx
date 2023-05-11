import { Outlet } from 'react-router-dom';
import { StyledLink, Header, List } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <>
      <Header>
        <nav>
          <List>
            <li>
              <StyledLink to="/">Home</StyledLink>
            </li>
            <li>
              <StyledLink to="/movies">Movies</StyledLink>
            </li>
          </List>
        </nav>
      </Header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default SharedLayout;
