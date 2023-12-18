import { useEffect, useState } from 'react';
import { getMoviesPopular } from 'services/request-api';
import { ListMovies, ListItem, TitleMovie, ImageM } from './Home.styled';
import { NavLink } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import styled from 'styled-components';

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

  const base_url_image = 'https://image.tmdb.org/t/p/w500/';

  return (
    <div>
      <h1>Tranding today</h1>
      {isLoading && <Loader/>}
      {!isLoading && <ListMovies>
        {popularMovies.map(movie => {
          return (
            <ListItem key={movie.id}>
              <StyledLinkNav to={`movies/${movie.id}`}>
                <ImageM
                  src={base_url_image + movie.poster_path}
                  alt={movie.name || movie.title}
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
