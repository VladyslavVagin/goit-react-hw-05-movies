import styled from 'styled-components';

export const ListMovies = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 0;
  margin: 0 auto;
  width: 100%;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  font-size: 32px;
  font-weight: 700;
  overflow: hidden;
  margin: 0 auto;
  @media screen and (min-width: 1280px) {
    width: calc((100% - 40px) / 3);
  }
`;

export const TitleMovie = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
