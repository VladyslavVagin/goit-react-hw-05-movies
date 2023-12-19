import { Outlet, useSearchParams, Link, useLocation } from 'react-router-dom';
import { useEffect, useState, Suspense } from 'react';
import { getMovieSearch } from 'services/request-api';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import SearchBar from 'components/SearchBar/SearchBar';
import { Container } from './Movies.styled';
import Loader from 'components/Loader/Loader';

const Movies = () => {
  const [searchResult, setSearchResult] = useState([]);
  const [isLoadingList, setIsLoadingList] = useState(false);
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
    if (query.trim() !== '') {
      const moviesForSearch = async () => {
        try {
          setIsLoadingList(true);
          const response = await getMovieSearch(query);
          const movies = response.data.results;
          if (movies.length > 0) {
            setSearchResult(movies);
          } else {
            Notify.failure('Movies NOT found')
          }
        } catch (error) {
          console.log(error);
          Notify.failure('Error, server not answer');
        } finally {
          setIsLoadingList(false);
        }
      }
      moviesForSearch();
    }
  }, [query]);

  return (
    <Container>
      {isLoadingList && <Loader/>}
      {location.pathname === '/movies' && (
        <SearchBar onSubmit={userSearchRequest} />
      )}
      <Suspense fallback={<Loader/>}>
        <Outlet />
      </Suspense>
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
