import styled from '@emotion/styled';

import {
  background,
  BackgroundProps,
  BordersProps,
  bottom,
  BottomProps,
  color as colorStyles,
  ColorStyleProps,
  display,
  DisplayProps,
  height,
  HeightProps,
  maxHeight,
  MaxHeightProps,
  maxWidth,
  MaxWidthProps,
  order,
  OrderProps,
  position,
  PositionProps,
  space,
  SpaceProps,
  width,
  WidthProps,
  zIndex,
  ZIndexProps,
  borders,
} from "styled-system";

export interface BorderBoxProps
  extends BackgroundProps,
  BordersProps,
  BottomProps,
  ColorStyleProps,
  DisplayProps,
  HeightProps,
  MaxHeightProps,
  MaxWidthProps,
  OrderProps,
  PositionProps,
  SpaceProps,
  WidthProps,
  ZIndexProps { }

export const BorderBox = styled.div<BorderBoxProps>`
  border-style: solid;
  border-width: 0;
  ${background};
  ${borders};
  ${bottom};
  ${colorStyles};
  ${display};
  ${height};
  ${maxHeight};
  ${maxWidth};
  ${order};
  ${position};
  ${space};
  ${width};
  ${zIndex};
`;
