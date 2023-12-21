import { Suspense } from "react";
import styled from 'styled-components';
import { Outlet, NavLink, useLocation } from 'react-router-dom';
import { Container, Header, ListHeader } from './SharedLayout.styled';
import Loader from "components/Loader/Loader";

const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  font-size: 1.5rem;
  &.active {
    color: orange;
    border: 2px solid orange;
    padding: 10px;
    background-color: white;
  }
`;

const SharedLayout = () => {
  const location = useLocation();
  return (
    <Container>
      <Header>
        <nav>
          <ListHeader>
            <li>
              <StyledLink to={'/'} className={location.pathname === '/' && location.pathname !== '/movies'  ? 'active' : ''}>Home</StyledLink>
            </li>
            <li>
              <StyledLink to={'/movies'}>movies</StyledLink>
            </li>
          </ListHeader>
        </nav>
      </Header>
      <main>
        <Suspense fallback={<Loader/>}>
        <Outlet/>
        </Suspense>
      </main>
    </Container>
  );
};

export default SharedLayout;
