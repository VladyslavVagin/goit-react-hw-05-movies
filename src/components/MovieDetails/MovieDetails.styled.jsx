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
  text-shadow: 1px 0px 1px #ccc, 0px 1px 1px #eee, 2px 1px 1px #ccc,
    1px 2px 1px #eee, 3px 2px 1px #ccc, 2px 3px 1px #eee, 4px 3px 1px #ccc,
    3px 4px 1px #eee, 5px 4px 1px #ccc, 4px 5px 1px #eee, 6px 5px 1px #ccc,
    5px 6px 1px #eee, 7px 6px 1px #ccc;
`;
export const NameMovie = styled.h4`
  font-size: 2rem;
  text-shadow: 0 1px #808d93, -1px 0 #cdd2d5, -1px 2px #808d93, -2px 1px #cdd2d5,
    -2px 3px #808d93, -3px 2px #cdd2d5, -3px 4px #808d93, -4px 3px #cdd2d5,
    -4px 5px #808d93, -5px 4px #cdd2d5, -5px 6px #808d93, -6px 5px #cdd2d5,
    -6px 7px #808d93, -7px 6px #cdd2d5, -7px 8px #808d93, -8px 7px #cdd2d5;
`;
export const UserScore = styled.span`
  border: 1px solid black;
  border-radius: 10px;
  padding: 6px;
  font-weight: 700;
  border-radius: 31px;
  background: #e0e0e0;
  box-shadow: 6px 6px 12px #7d7d7d, -6px -6px 12px #ffffff;
`;
