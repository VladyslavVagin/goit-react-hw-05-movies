import styled from 'styled-components';

export const ListMovies = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  gap: 40px 8px;
  padding: 0 0 20px 0;
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
  width: 300px;
`;

export const TitleMovie = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 0;
  padding: 0;
`;

export const ImageM = styled.img`
  width: 300px;
`
