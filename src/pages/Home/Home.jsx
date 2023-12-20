import { useEffect, useState } from 'react';
import { getMoviesPopular } from 'services/request-api';
import { ListMovies, ListItem, TitleMovie, ImageM, MainTitle } from './Home.styled';
import { NavLink } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import styled from 'styled-components';
import { base_url_image } from 'services/request-api';

const StyledLinkNav = styled(NavLink)`
  text-decoration: none;
  color: #222020;
`

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    const popularMoviesShow = async () => {
      setIsLoading(true);
      try {
        const response = await getMoviesPopular();
        setPopularMovies([...response.data.results]);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    popularMoviesShow();
  }, []);

  return (
    <div>
      <MainTitle> DAILY TOP-20</MainTitle>
      {isLoading && <Loader/>}
      {!isLoading && <ListMovies>
        {popularMovies.map(movie => {
          return (
            <ListItem key={movie.id}>
              <StyledLinkNav to={`movies/${movie.id}`}>
                <ImageM
                  src={base_url_image + movie.poster_path}
                  alt={movie.name || movie.title}
                  width={308}
                />
                <TitleMovie>{movie.title || movie.name}</TitleMovie>
              </StyledLinkNav>
            </ListItem>
          );
        })}
      </ListMovies>}
    </div>
  );
};

export default Home;
