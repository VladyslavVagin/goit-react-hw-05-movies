import styled from 'styled-components';

export const ListActors = styled.ul`
  width: 100%;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 8px;
  padding: 0;
`;

export const Actor = styled.li`
  max-width: 200px;
  margin: 0 auto;
  height: 400px;
`;

export const AvatarActor = styled.img`
  width: 200px;
`;

export const ActorName = styled.p`
    font-size: 20px;
    font-weight: 700;
    margin: 0;
`
