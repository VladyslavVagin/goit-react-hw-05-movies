import React from 'react';
import { InputSearch, Form, ButtonSearch } from './SearchBar.styled';

const SearchBar = ({ onSubmit }) => {
  return (
    <div>
      <Form onSubmit={onSubmit}>
          <InputSearch
            type="text"
            placeholder="Search..."
            autoComplete="false"
          />
          <ButtonSearch type="submit">Search</ButtonSearch>
      </Form>
    </div>
  );
};

export default SearchBar;
