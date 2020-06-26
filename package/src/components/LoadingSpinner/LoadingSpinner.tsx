import React from "react";
import styled, { keyframes } from "styled-components";

export interface LoadingSpinnerProps {
  color?: string;
  size?: number;
  strokeWidth?: number;
}

const spin = keyframes`
  from {transform: rotate(0deg);}
  to {transform: rotate(359deg);}
`;

const Spinner = styled.div<LoadingSpinnerProps>`
  display: flex;
  height: ${(p) => (p.size ? p.size : "24px")};
  width: ${(p) => (p.size ? p.size : "24px")};
  justify-content: center;
  align-items: center;

  .loader {
    height: ${(p) => (p.size ? p.size : "24px")};
    width: ${(p) => (p.size ? p.size : "24px")};
    border: ${(p) => (p.strokeWidth ? p.strokeWidth : "2px")} solid
      rgba(0, 174, 239, 0.2);
    border-top-color: ${(p) => (p.color ? p.color : "white")};
    border-radius: 100%;
    animation: ${spin} 800ms infinite linear 0.25s;
  }
`;

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  color,
  size,
  strokeWidth,
}) => (
  <Spinner color={color} size={size} strokeWidth={strokeWidth}>
    <div className="loader"></div>
  </Spinner>
);
