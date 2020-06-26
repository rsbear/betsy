import styled from '@emotion/styled';

import {
  color as colorStyles,
  ColorStyleProps,
  height,
  HeightProps,
  margin,
  MarginProps,
  padding,
  PaddingProps,
  width,
  WidthProps,
} from "styled-system";

interface DividerProps
  extends ColorStyleProps,
    HeightProps,
    MarginProps,
    PaddingProps,
    WidthProps {
  bg?: string;
  backgroundColor?: string;
  color?: string;
}

export const Divider = styled.div<DividerProps>`
  ${colorStyles};
  ${height};
  ${margin};
  ${padding};
  ${width};
`;
