import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { Toaster } from 'react-hot-toast';

import { GlobalStyle } from 'components/GlobalStyle';
import { StyledLink, Header, Menu, Main } from './SharedLayout.styled';
import { Loader } from 'components/Loader/Loader';

const SharedLayout = () => {
  return (
    <>
      <Header>
        <nav>
          <Menu>
            <li>
              <StyledLink to="/">Home</StyledLink>
            </li>
            <li>
              <StyledLink to="/movies">Movies</StyledLink>
            </li>
          </Menu>
        </nav>
      </Header>
      <Main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Main>
      <GlobalStyle />
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};

export default SharedLayout;
