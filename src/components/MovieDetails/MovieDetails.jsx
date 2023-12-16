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
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    showDetails();
  }, [movieId]);

  const {poster, title, userScore, overview, genres} = dataMovie;
  const base_url_image = 'https://image.tmdb.org/t/p/w500/';

  return <div>
    <Link to={backLinkRef.current}>Back</Link>
    <div>
      <img src={base_url_image + poster} alt={`Poster for movie ${title}`} />
      <div>
        <h2>{title}</h2>
        <p>{`User score: ${(userScore*10).toFixed(0)}%`}</p>
        <p>{overview}</p>
       <p>{genres && genres.map(el => el.name)}</p>
      </div>
    </div>

  </div>;
};

export default MovieDetails;
