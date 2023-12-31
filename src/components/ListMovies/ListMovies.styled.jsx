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
  width: 310px;
  padding: 20px;
  border-radius: 24px;
  background: linear-gradient(145deg, #f0f0f0, #cacaca);
  box-shadow: 5px 5px 10px #949494, -5px -5px 10px #ffffff;
  transition: all 600ms ease;
  &:hover {
    transform: scale(1.05);
  }
`;

export const TitleMovie = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: black;
  text-decoration: none;
  margin: 0;
  padding: 0;
  text-shadow: 1px 0px 1px #ccc, 0px 1px 1px #eee, 2px 1px 1px #ccc,
    1px 2px 1px #eee, 3px 2px 1px #ccc, 2px 3px 1px #eee, 4px 3px 1px #ccc,
    3px 4px 1px #eee, 5px 4px 1px #ccc, 4px 5px 1px #eee, 6px 5px 1px #ccc,
    5px 6px 1px #eee, 7px 6px 1px #ccc;
`;
export const ImageMovies = styled.img`
  transition: all 600ms ease;
`;
