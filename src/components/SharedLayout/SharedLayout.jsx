import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { LinkStyled, NavStyled } from './SharedLayoutStyled.styled';

export const SharedLayout = () => {
  return (
    <>
      <header>
        <NavStyled>
          <LinkStyled to="">Home </LinkStyled>
          <LinkStyled to="movies">Movies</LinkStyled>
        </NavStyled>
      </header>
      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
    </>
  );
};
