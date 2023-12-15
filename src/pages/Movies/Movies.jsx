import React from 'react';
import { Outlet } from 'react-router-dom';
import SearchBar from 'components/SearchBar/SearchBar';

const Movies = () => {
  return (
    <div>
      <SearchBar />
      <Outlet />
    </div>
  );
};

export default Movies;
