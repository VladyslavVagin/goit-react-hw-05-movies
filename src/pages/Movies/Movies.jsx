import { Outlet, useSearchParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieSearch } from 'services/request-api';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import SearchBar from 'components/SearchBar/SearchBar';

const Movies = () => {
  const [searchResult, setSearchResult] = useState([]);
  const [querySearch, setQuery] = useSearchParams();
  const query = querySearch.get('query') ?? '';

  const userSearchRequest = (event) => {
       event.preventDefault();
       const searchQuery = event.target.children[0].value;
       if(searchQuery.trim() === '') {
        return setQuery({});
       }
       setQuery({query: searchQuery});
       console.log(searchQuery);
    }

    useEffect(() => {
      if(query !== '') {
        const moviesForSearch = async () => {
          try {
          const response = await getMovieSearch(query);
          const movies = response.data.results;
          if(movies.length > 0) {
            setSearchResult(movies);
            console.log(movies);
            Notify.success(`We found ${response.data.total_results} movies`);
          } 
          } catch (error) {
            console.log(error);
            Notify.failure('Error, server not answer');
          }
        }
        moviesForSearch();
      }
    }, [query])
  
  return (
    <div>
      <SearchBar onSubmit={userSearchRequest}/>
      <ul>
        {searchResult.map(movie => {
          return (
            <li key={movie.id}>
              <Link to={`${movie.id}`}>
                <p>{movie.title || movie.name}</p>
              </Link>
            </li>
          );
        })}
      </ul>
      <Outlet />
    </div>
  );
};

export default Movies;
