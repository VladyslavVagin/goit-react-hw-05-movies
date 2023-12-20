import styled from 'styled-components';

export const ListActors = styled.ul`
  width: 100%;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 20px 8px;
  padding: 0;
`;

export const Actor = styled.li`
  max-width: 200px;
  margin: 0 auto;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 2px solid #e0921c;
  background-color: #696969;
  border-radius: 20px;
  padding: 10px;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
`;

export const AvatarActor = styled.img`
  width: 200px;
`;

export const ActorName = styled.p`
    font-size: 20px;
    font-weight: 700;
    margin: 0;
    padding: 0;
    text-align: center;
    background-color: #e0921c;
    border-radius: 20px;
`
export const ActorCharacter = styled.p`
   overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  background-color: #e0921c;
  padding: 6px;
  border-radius: 10px;
`