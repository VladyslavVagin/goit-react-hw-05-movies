import styled from 'styled-components';

export const InputSearch = styled.input`
  width: 90%;
  padding: 10px;
  margin-top: 10px;
  outline: none;
  border-radius: 40px;
  border: 2px solid black;
  transition: all 600ms ease;
  &:focus-within {
    border-color: orange;
  }
`;

export const Form = styled.form`
  position: relative;
  max-width: 900px;
  width: 100%;
`;

export const ButtonSearch = styled.button`
  position: absolute;
  top: 60%;
  cursor: pointer;
  left: 90%;
  transform: translate(-50%, -50%);
  padding: 10.6px 10px 10px 10px;
  margin: 0;
  background: #ffffff;
  color: #ff9100;
  text-transform: uppercase;
  outline: none;
  border: 2px solid black;
  border-top-right-radius: 40px;
  border-bottom-right-radius: 40px;
  font-weight: 700;
  transition: all 600ms ease;
  &:hover {
    background: orange;
    color: #000000;
  }
`;
