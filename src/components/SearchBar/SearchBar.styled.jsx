import styled from 'styled-components';

export const InputSearch = styled.input`
  max-width: 600px;
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  outline: none;
  border-radius: 40px;
  border: 1px solid black;
  transition: all 600ms ease;
  &:focus-within {
    border-color: #048d8d;
  }
`;

export const Form = styled.form`
  position: relative;
  max-width: 600px;
  width: 100%;
`;

export const ButtonSearch = styled.button`
  position: absolute;
  top: 60%;
  cursor: pointer;
  left: 96%;
  transform: translate(-50%, -50%);
  padding: 10.6px 30px 10px 30px;
  background: blue;
  color: #ffffff;
  text-transform: uppercase;
  outline: none;
  border: 1px solid black;
  border-top-right-radius: 40px;
  border-bottom-right-radius: 40px;
  transition: all 600ms ease;
  &:hover {
    background: orange;
  }
`;
