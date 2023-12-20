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
  width: 312px;
  overflow: hidden;
`;

export const TitleMovie = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 0;
  padding: 0;
  background-color: inherit;
`;

export const ImageM = styled.img`
  width: 300px;
  border: 2px solid orange;
  box-shadow: rgba(255, 255, 255, 0.3) 0px 1px 2px 0px, rgba(255, 255, 255, 0.15) 0px 2px 6px 2px;
`
export const MainTitle = styled.h1`
  text-align: center;
  background-color: black;
  animation: pulse 2000ms infinite;
  @keyframes pulse {
  0% {
    color:  #ff9900;
  }
  25% {
    color:  #ff8b8b;
  }
  50% {
    color:  #4c00ff;
  }
  75% {
    color: #48ff00;
  }
  100% {
  color: #00fff2;
  }
}  
`