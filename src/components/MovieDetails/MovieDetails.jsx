import { useEffect, useRef, useState, Suspense } from 'react';
import styled from 'styled-components';
import {
  useLocation,
  useParams,
  NavLink,
  Link,
  Outlet,
} from 'react-router-dom';
import { getMovieDetails } from 'services/request-api';
import {
  Content,
  Image,
  ListLinks,
  BackBox,
  AdditionalInfo,
  NameMovie,
  UserScore,
} from './MovieDetails.styled';
import { base_url_image } from 'services/request-api';
import picture from '../../images/noimage.jpg';
import Loader from 'components/Loader/Loader';

const StyledLink = styled(NavLink)`
  display: inline-flex;
  padding: 8px 20px;
  color: #000000;
  text-decoration: none;
  text-transform: uppercase;
  border: 1px solid black;
  border-radius: 20px;
  transition: all 400ms ease;
  &.active {
    color: #e0921c;
    transform: scale(1.2);
    border: 1px solid #e0921c;
  }
`;

const LinkStyled = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 24px;
  transition: all 400ms ease;
  &:hover {
    color: orange;
    transform: scale(1.2);
  }
`;

const MovieDetails = () => {
  const [dataMovie, setDataMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    if (!movieId) {
      return;
    }
    const showDetails = async () => {
      try {
        setIsLoading(true);
        const response = await getMovieDetails(movieId);
        const data = response.data;
        setDataMovie({
          poster: data.poster_path,
          title: data.title,
          userScore: data.vote_average,
          overview: data.overview,
          genres: data.genres,
          year: data.release_date,
        });
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    showDetails();
  }, [movieId]);

  const { poster, title, userScore, overview, genres, year } = dataMovie;
  return (
    <div>
      {isLoading && <Loader />}
      {!isLoading && (
        <>
          <BackBox>
            <LinkStyled to={backLinkRef.current}>&lt;&lt;&lt; Back</LinkStyled>
          </BackBox>
          <Content>
            <Image
              src={poster ? base_url_image + poster : picture}
              alt={`Poster for movie ${title}`}
            />
            <div>
              <NameMovie>
                {title}&nbsp;{year ? `(${year.slice(0, 4)})` : ''}
              </NameMovie>
              <p>
                <strong>User score: </strong>
                <UserScore
                  style={
                    userScore >= 7
                      ? { color: 'green', borderColor: 'green' }
                      : userScore < 4
                      ? { color: 'red', borderColor: 'red' }
                      : { color: 'orange', borderColor: 'orange' }
                  }
                >
                  {(userScore * 10).toFixed(0)}%
                </UserScore>
              </p>
              <h3>Overview</h3>
              <p>{overview || 'Description will be added later'}</p>
              <h3>Genres</h3>
              <p>
                <i>{genres && genres.map(el => el.name).join(' / ')}</i>
              </p>
            </div>
          </Content>
          <div>
            <AdditionalInfo>Additional information</AdditionalInfo>
            <ListLinks>
              <li>
                <StyledLink to={'cast'}>Cast</StyledLink>
              </li>
              <li>
                <StyledLink to={'reviews'}>Reviews</StyledLink>
              </li>
            </ListLinks>
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </div>
        </>
      )}
    </div>
  );
};

export default MovieDetails;
