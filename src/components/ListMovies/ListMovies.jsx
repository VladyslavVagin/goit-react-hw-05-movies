import { Link, useLocation } from 'react-router-dom';

const ListMovies = ({ searchResult }) => {
  const location = useLocation();
  return (
    <ul>
      {searchResult.map(movie => {
        return (
          <li key={movie.id}>
            <Link to={`${movie.id}`} state={{ from: location }}>
              <p>{movie.title || movie.name}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default ListMovies;
