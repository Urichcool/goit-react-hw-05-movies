import { ColorRing } from 'react-loader-spinner';
import styled from '@emotion/styled';

const LoaderStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1200;
`;

export const Loader = () => {
  return (
    <LoaderStyled>
      <ColorRing />
    </LoaderStyled>
  );
};
