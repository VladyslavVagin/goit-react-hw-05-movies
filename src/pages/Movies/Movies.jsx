import { Outlet, useSearchParams, Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieSearch } from 'services/request-api';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import SearchBar from 'components/SearchBar/SearchBar';
import { Container } from './Movies.styled';

const Movies = () => {
  const [searchResult, setSearchResult] = useState([]);
  const [querySearch, setQuery] = useSearchParams();
  const location = useLocation();
  const query = querySearch.get('query') ?? '';

  //================================== Function when submit form with search result
  const userSearchRequest = event => {
    event.preventDefault();
    const searchQuery = event.target.children[0].value;
    if (searchQuery.trim() === '') {
      return setQuery({});
    }
    setQuery({ query: searchQuery });
    event.target.children[0].value = '';
    location.state?.to('/movies');
  };

  //============================ If change query in SearchParams, make request to API for search movies
  useEffect(() => {
    if (query !== '') {
      const moviesForSearch = async () => {
        try {
          const response = await getMovieSearch(query);
          const movies = response.data.results;
          if (movies.length > 0) {
            setSearchResult(movies);
          }
        } catch (error) {
          console.log(error);
          Notify.failure('Error, server not answer');
        }
      };
      moviesForSearch();
    }
  }, [query]);

  return (
    <Container>
      {location.pathname === '/movies' && (
        <SearchBar onSubmit={userSearchRequest} />
      )}
        <Outlet />
      {query && (
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
      )}
    </Container>
  );
};

export default Movies;
