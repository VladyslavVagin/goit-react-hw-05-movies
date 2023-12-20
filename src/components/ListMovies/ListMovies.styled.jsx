import styled from 'styled-components';

export const ListSearchMovies = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  gap: 40px 8px;
  padding: 20px 0 40px 0;
  margin: 0 auto;
  max-width: 100%;
`;
export const ListItemSearch = styled.li`
  display: flex;
  flex-direction: column;
  font-size: 32px;
  font-weight: 700;
  overflow: hidden;
  margin: 0 auto;
  width: 300px;
  transition: all 600ms ease;
  border-radius: 20px;
`;

export const TitleMovie = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: black;
  text-decoration: none;
  margin: 0;
  padding: 0;
`;
export const ImageMovies = styled.img`
  transition: all 600ms ease;
`