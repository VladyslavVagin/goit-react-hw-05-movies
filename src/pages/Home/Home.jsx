import { useEffect, useState } from 'react';
import { getMoviesPopular } from 'services/request-api';
import { ListMovies, ListItem, TitleMovie } from './Home.styled';
import { Link } from 'react-router-dom';

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    const popularMoviesShow = async () => {
      try {
        const response = await getMoviesPopular();
        setPopularMovies([...response.data.results]);
      } catch (error) {
        console.log(error);
      }
    };
    popularMoviesShow();
  }, []);

  const base_url_image = 'https://image.tmdb.org/t/p/w500/';

  return (
    <div>
      <h1>Tranding today</h1>
      <ListMovies>
        {popularMovies.map(movie => {
          return (
            <ListItem key={movie.id}>
              <Link to={`movies/${movie.id}`}>
                <img
                  src={base_url_image + movie.poster_path}
                  alt={movie.name || movie.title}
                />
                <TitleMovie>{movie.title || movie.name}</TitleMovie>
              </Link>
            </ListItem>
          );
        })}
      </ListMovies>
    </div>
  );
};

export default Home;
