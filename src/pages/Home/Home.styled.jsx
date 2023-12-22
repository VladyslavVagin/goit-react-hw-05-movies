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
  padding: 16px;
  font-size: 32px;
  font-weight: 700;
  margin: 0 auto;
  width: 300px;
  overflow: hidden;
  border-radius: 24px;
  background: linear-gradient(145deg, #f0f0f0, #cacaca);
  box-shadow: 5px 5px 10px #949494, -5px -5px 10px #ffffff;
  transition: all 600ms ease;
  &:hover {
    transform: scale(1.06);
  }
`;

export const TitleMovie = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 0;
  padding: 0;
  background-color: inherit;
  text-shadow: 1px 0px 1px #ccc, 0px 1px 1px #eee, 2px 1px 1px #ccc,
    1px 2px 1px #eee, 3px 2px 1px #ccc, 2px 3px 1px #eee, 4px 3px 1px #ccc,
    3px 4px 1px #eee, 5px 4px 1px #ccc, 4px 5px 1px #eee, 6px 5px 1px #ccc,
    5px 6px 1px #eee, 7px 6px 1px #ccc;
`;

export const ImageM = styled.img`
  width: 300px;
  box-shadow: rgba(255, 255, 255, 0.3) 0px 1px 2px 0px,
    rgba(255, 255, 255, 0.15) 0px 2px 6px 2px;
`;
export const MainTitle = styled.h1`
  width: 280px;
  margin: 16px auto;
  text-align: center;
  background-color: black;
  animation: pulse 2000ms infinite;
  border-radius: 34px;
  box-shadow: 5px 5px 7px #9b9b9b, -5px -5px 7px #ffffff;
  @keyframes pulse {
    0% {
      color: #ff9900;
    }
    25% {
      color: #ff8b8b;
    }
    50% {
      color: #4c00ff;
    }
    75% {
      color: #48ff00;
    }
    100% {
      color: #00fff2;
    }
  }
`;
