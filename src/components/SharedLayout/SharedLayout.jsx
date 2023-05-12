import { Outlet } from 'react-router-dom';
import { StyledLink, Header, List } from './SharedLayout.styled';
import { Loader } from 'components/Loader/Loader';
import { Suspense } from 'react';

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
      <main style={{ display: 'flex', flexDirection: 'column' }}>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default SharedLayout;
