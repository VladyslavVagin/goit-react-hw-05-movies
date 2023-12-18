import { RotatingLines } from 'react-loader-spinner';
import styled from 'styled-components';

const LoaderContainer = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.8);
  min-width: 100vw;
  min-height: 100vh;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Loader = () => {
  return (
    <LoaderContainer>
      <RotatingLines
        strokeColor="orange"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </LoaderContainer>
  );
};

export default Loader;
