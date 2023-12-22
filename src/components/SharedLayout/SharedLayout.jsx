import { Suspense, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Outlet, NavLink, useLocation } from 'react-router-dom';
import { Container, Header, ListHeader } from './SharedLayout.styled';
import Loader from 'components/Loader/Loader';

const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  font-size: 1.5rem;
  border-radius: 45px;
  background: linear-gradient(145deg, #cacaca, #f0f0f0);
  box-shadow: 5px 5px 12px #a4a4a4, -5px -5px 12px #ffffff;
  padding: 20px;
  &.active {
    color: orange;
    border: 2px solid orange;
    background-color: white;
  }
`;

const SharedLayout = () => {
  const firstLink = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const currentRef = firstLink.current;
    if(currentRef) {
     currentRef.classList.add('active');
    }
   
    return () => {
      if(currentRef) {
        currentRef.classList.remove('active');
      }
    };
  }, [])

  useEffect(() => {
    const currentRef = firstLink.current;
    if(location.pathname === '/') {
      currentRef.classList.add('active');
    }

    return () => { 
      if(location.pathname !== '/') {
      currentRef.classList.remove('active');
    }
  }
  }, [location.pathname])

  return (
    <Container>
      <Header>
        <nav>
          <ListHeader>
            <li>
              <StyledLink end to={'/'} ref={firstLink}>
                Home
              </StyledLink>
            </li>
            <li>
              <StyledLink to={'/movies'}>
                movies
              </StyledLink>
            </li>
          </ListHeader>
        </nav>
      </Header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
};

export default SharedLayout;
