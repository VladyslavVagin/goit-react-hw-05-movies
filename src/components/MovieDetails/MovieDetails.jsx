import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useParams, Link } from 'react-router-dom';
import { getMovieDetails } from 'services/request-api';

const MovieDetails = () => {
  const [dataMovie, setDataMovie] = useState({});
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    if (!movieId) {
      return;
    }
    const showDetails = async () => {
      console.log(movieId);
      try {
        const response = await getMovieDetails(movieId);
        const data = response.data;
        setDataMovie({
          poster: data.poster_path,
          title: data.title,
          userScore: data.vote_average,
          overview: data.overview,
          genres: data.genres,
        });
        console.log(dataMovie);
      } catch (error) {
        console.log(error);
      }
    };
    showDetails();
  }, [movieId]);

  return <div>
    <Link to={backLinkRef.current}>Back</Link>
  </div>;
};

export default MovieDetails;
