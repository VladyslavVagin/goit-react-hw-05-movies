import React from 'react';
import { Outlet } from 'react-router-dom';

const Movies = () => {
  return (
    <div>
      Movies
      <Outlet />
    </div>
  );
};

export default Movies;
