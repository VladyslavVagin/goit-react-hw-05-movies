import getMoviesAPI from "services/request-api";

export const App = () => {
  return (
    <div onClick={() => getMoviesAPI()}>
      React homework template
    </div>
  );
};
