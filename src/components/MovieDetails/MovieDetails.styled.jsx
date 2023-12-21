import styled from 'styled-components';

export const Image = styled.img`
  max-width: 300px;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px,
    rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
    rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
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
`

export const BackBox = styled.div`
  padding: 20px;
`

export const AdditionalInfo = styled.h4`
  font-size: 1.5rem;
`
export const NameMovie = styled.h4`
  font-size: 2rem;
`
export const UserScore = styled.span`
  border: 1px solid black;
  border-radius: 10px;
  padding: 6px;
  font-weight: 700;
`
