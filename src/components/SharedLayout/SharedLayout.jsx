import { Suspense } from "react";
import styled from 'styled-components';
import { Outlet, NavLink } from 'react-router-dom';
import { Container, Header, ListHeader } from './SharedLayout.styled';
import Loader from "components/Loader/Loader";

const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  text-transform: uppercase;
  &.active {
    color: orange;
  }
`;

const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <ListHeader>
            <li>
              <StyledLink to={'/'}>Home</StyledLink>
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
