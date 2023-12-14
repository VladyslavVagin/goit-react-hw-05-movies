import { useEffect, useState } from 'react';
import getMoviesPopular from '../../services/request-api';

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
      <ul>
        {popularMovies.map(movie => {
          return (
            <li key={movie.id}>
              <img
                src={base_url_image + movie.poster_path}
                alt={movie.name || movie.title}
              />
              {movie.title || movie.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
