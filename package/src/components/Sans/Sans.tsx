import styled from '@emotion/styled';

import {
  color as colorStyles,
  ColorStyleProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
  style,
} from "styled-system";

const textTransform = style({
  prop: "textTransform",
});

export interface SansProps
  extends TypographyProps,
    SpaceProps,
    ColorStyleProps {
  textTransform?: "lowercase" | "uppercase" | "capitalize";
}

export const Sans = styled.div<SansProps>`
  ${colorStyles};
  ${typography};
  ${space};
  ${textTransform};
`;
