import { Outlet, useSearchParams, useLocation } from 'react-router-dom';
import { useEffect, useState, Suspense, lazy } from 'react';
import { getMovieSearch } from 'services/request-api';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import SearchBar from 'components/SearchBar/SearchBar';
import { Container } from './Movies.styled';
import Loader from 'components/Loader/Loader';
import Pagination from 'components/Pagination/Pagination';

const ListMovies = lazy(() => import('components/ListMovies/ListMovies'));

const Movies = () => {
  const [searchResult, setSearchResult] = useState([]);
  const [isLoadingList, setIsLoadingList] = useState(false);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(null);
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
    setPage(1);
    localStorage.setItem('page', JSON.stringify(1));
    event.target.children[0].value = '';
    location.state?.to('/movies');
  };

  //============================ If change query in SearchParams, make request to API for search movies
  useEffect(() => {
    if (query.trim() !== '' && page !== 0) {
      const moviesForSearch = async () => {
        try {
          setIsLoadingList(true);
          localStorage.setItem('page', JSON.stringify(page));
          const response = await getMovieSearch(query, page);
          const movies = response.data.results;
          if (movies.length > 0) {
            setSearchResult(movies);
            setTotalPages(response.data.total_pages);
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
  }, [page, query]);

  return (
    <Container>
      {isLoadingList && <Loader/>}
      {location.pathname === '/movies' && (
        <SearchBar onSubmit={userSearchRequest} />
      )}
      <Suspense fallback={<Loader/>}>
        <Outlet />
      </Suspense>
      {query && <ListMovies searchResult={searchResult}/>}
      {totalPages > 1 && location.pathname === `/movies` && query && <Pagination totalPages={totalPages} onPageChange={(event) => setPage(event.selected + 1)}/>}
    </Container>
  );
};

export default Movies;
