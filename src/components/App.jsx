import getMoviesPopular from "services/request-api";

export const App = () => {
  return (
    <div onClick={() => getMoviesPopular()}>
      React homework template
    </div>
  );
};
