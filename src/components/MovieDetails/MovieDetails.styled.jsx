import styled from 'styled-components';

export const Image = styled.img`
  max-width: 300px;
  border-radius: 20px;
  -webkit-box-shadow: 1px 8px 21px 1px rgba(255, 153, 0, 1);
  -moz-box-shadow: 1px 8px 21px 1px rgba(255, 153, 0, 1);
  box-shadow: 1px 8px 21px 1px rgba(255, 153, 0, 1);
`;
export const Content = styled.div`
  display: flex;
  align-items: flex-start;
  column-gap: 16px;
  padding-bottom: 20px;
  border-bottom: 1px solid gray;
  @media screen and (max-width: 680px) {
    flex-direction: column;
    max-width: 300px;
    margin: 0 auto;
  }
`;

export const ListLinks = styled.ul`
  list-style-type: none;
  display: flex;
  column-gap: 20px;
  padding: 0;
  font-size: 20px;
`;

export const BackBox = styled.div`
  padding: 20px;
`;

export const AdditionalInfo = styled.h4`
  font-size: 1.5rem;
`;
export const NameMovie = styled.h4`
  font-size: 2rem;
`;
export const UserScore = styled.span`
  border: 1px solid black;
  border-radius: 10px;
  padding: 6px;
  font-weight: 700;
  background-color: #fdeeee;
  -webkit-box-shadow: 1px 8px 21px 1px rgba(255, 153, 0, 1);
  -moz-box-shadow: 1px 8px 21px 1px rgba(255, 153, 0, 1);
  box-shadow: 1px 8px 21px 1px rgba(255, 153, 0, 1);
`;
