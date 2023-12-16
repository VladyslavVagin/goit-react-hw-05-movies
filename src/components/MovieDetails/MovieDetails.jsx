import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useLocation, useParams, NavLink } from 'react-router-dom';
import { getMovieDetails } from 'services/request-api';
import { Content, Image } from './MovieDetails.styled';
import picture from '../../images/noimage.jpg'

const StyledBack = styled(NavLink)`
  display: inline-flex;
  padding: 20px;
  color: #000000;
  text-decoration: none;
  text-transform: uppercase;
  transition: all 400ms ease;
  &:hover {
    color: #e0921c;
    transform: scale(1.2);
  }
`;

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
      } catch (error) {
        console.log(error);
      }
    };
    showDetails();
  }, [movieId]);

  const { poster, title, userScore, overview, genres } = dataMovie;
  const base_url_image = 'https://image.tmdb.org/t/p/w500/';

  return (
    <div>
      <StyledBack to={backLinkRef.current}>&lt;&lt;&lt; Back</StyledBack>
      <Content>
        <Image
          src={poster ? base_url_image + poster : picture}
          alt={`Poster for movie ${title}`}
        />
        <div>
          <h2>{title}</h2>
          <p>{`User score: ${(userScore * 10).toFixed(0)}%`}</p>
          <p>{overview || 'Description will be added later'}</p>
          <p>{genres && genres.map(el => el.name).join(' / ')}</p>
        </div>
      </Content>
    </div>
  );
};

export default MovieDetails;
