import { Link, useLocation } from 'react-router-dom';
import {
  ListSearchMovies,
  ListItemSearch,
  TitleMovie,
  ImageMovies
} from './ListMovies.styled';
import { base_url_image } from 'services/request-api';
import picture from '../../images/noimage.jpg';
import styled from 'styled-components';

const StyleLinks = styled(Link)`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-decoration: none;
`;

const ListMovies = ({ searchResult }) => {
  const location = useLocation();
  return (
    <ListSearchMovies>
      {searchResult.map(({ id, title, name, poster_path }) => {
        return (
          <ListItemSearch key={id}>
            <StyleLinks to={`${id}`} state={{ from: location }}>
              <ImageMovies
                src={poster_path ? base_url_image + poster_path : picture}
                alt={title || name}
                width={308}
              />
              <TitleMovie>{title || name}</TitleMovie>
            </StyleLinks>
          </ListItemSearch>
        );
      })}
    </ListSearchMovies>
  );
};

export default ListMovies;
