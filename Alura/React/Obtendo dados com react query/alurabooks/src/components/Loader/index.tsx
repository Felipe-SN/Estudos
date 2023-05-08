import { colors } from 'components/UI/variables';
import styled, { keyframes } from 'styled-components';

export default function Loader() {
  return (
    <LoaderAnimation>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </LoaderAnimation>
  );
}

const loaderColor = colors.azul;

const ldsRing = keyframes`

  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const LoaderAnimation = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;

  && div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 64px;
    height: 64px;
    margin: 8px;
    border: 8px solid ${loaderColor};
    border-radius: 50%;
    animation: ${ldsRing} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${loaderColor} transparent transparent transparent;
  }
  && div:nth-child(1) {
    animation-delay: -0.45s;
  }
  && div:nth-child(2) {
    animation-delay: -0.3s;
  }
  && div:nth-child(3) {
    animation-delay: -0.15s;
  }
`;
