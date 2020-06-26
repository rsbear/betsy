import styled from '@emotion/styled';

import {
  color as colorStyles,
  ColorProps,
  background,
  BackgroundProps,
  boxShadow,
  BoxShadowProps,
  maxHeight,
  MaxHeightProps,
  maxWidth,
  MaxWidthProps,
  minHeight,
  MinHeightProps,
  minWidth,
  MinWidthProps,
  height,
  HeightProps,
  position,
  PositionProps,
  space,
  SpaceProps,
  width,
  WidthProps
} from "styled-system";

export interface BoxProps
  extends ColorProps,
    BackgroundProps,
    BoxShadowProps,
    HeightProps,
    MaxHeightProps,
    MaxWidthProps,
    MinHeightProps,
    MinWidthProps,
    PositionProps,
    WidthProps,
    SpaceProps {
  display?: "block" | "inline-block";
  overflowY?: "auto" | "hidden" | "scroll" | "visible";
  overflowX?: "auto" | "hidden" | "scroll" | "visible";
  overflow?: "auto" | "hidden" | "scroll" | "visible";
}

export const Box = styled.div<BoxProps | any>`
  display: ${p => p.display};
  overflow: ${p => p.overflow};
  overflow-x: ${p => p.overflowX};
  overflow-y: ${p => p.overflowY};
  ${colorStyles};
  ${background};
  ${boxShadow};
  ${height};
  ${maxHeight};
  ${maxWidth};
  ${minHeight};
  ${minWidth};
  ${position};
  ${space};
  ${width};
`;
