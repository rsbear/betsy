import React from "react";
import styled from '@emotion/styled';

export interface OuterProps {
  shadow?: string;
  shape: "rect" | "square";
}

export interface ImageProps extends OuterProps {
  alt?: string;
  src: string;
}

const Outer = styled.div<OuterProps>`
  ${p =>
    p.shape === "square" &&
    `
  position: relative;
  display: block;
  &:before {
    content: '';
    display: block;
    width: 100%;
    padding-top: 100%;
  }
  > .inner {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
  `}
  ${p =>
    p.shape === "rect" &&
    `
  position: relative;
  display: block;
  &:before {
    content: '';
    display: block;
    width: 100%;
    padding-top: 56%;
  }
  > .inner {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
  
  `}
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 50%;
`;

export const Image: React.FC<ImageProps> = ({ shadow, shape, src, alt }) => {
  return (
    <Outer shape={shape} shadow={shadow}>
      <div className="inner">
        <Img src={src} alt={!alt ? "" : alt} />
      </div>
    </Outer>
  );
};
