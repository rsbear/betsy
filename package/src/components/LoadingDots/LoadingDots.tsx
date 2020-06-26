import React from "react";
import styled, { keyframes } from "styled-components";

import { color as colorStyles, ColorStyleProps } from "styled-system";

interface FadeProps extends ColorStyleProps {
  bg?: string;
  backgroundColor?: string;
}

const fader = keyframes`
  0%, 80%, 100% {
    transform: scale(0.4); }
  40% {
    transform: scale(1); 
  } 
`;

const Circles = styled.div<FadeProps>`
  .sk-flow {
    position: relative;
    height: 100%;
    width: 30px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .sk-flow-dot {
    width: 8px;
    height: 8px;
    background-color: yellow;
    border-radius: 50%;
    animation: ${fader} 1.4s cubic-bezier(0.955, 0.03, 0.515, 0.155) 0s infinite
      both;
  }

  .sk-flow-dot:nth-of-type(1) {
    animation-delay: -0.3s;
  }
  .sk-flow-dot:nth-of-type(2) {
    animation-delay: -0.15s;
    margin-right: 2px;
    margin-left: 2px;
  }
`;

export interface LoadingDotsProps extends FadeProps {}

export const LoadingDots: React.FC<LoadingDotsProps> = (props) => {
  return (
    <Circles {...props}>
      <div className="sk-flow">
        <div className="sk-flow-dot"></div>
        <div className="sk-flow-dot"></div>
        <div className="sk-flow-dot"></div>
      </div>
    </Circles>
  );
};
