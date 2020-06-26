import React from "react";
import {
  color as colorStyles,
  ColorStyleProps,
  space,
  SpaceProps,
  height,
  width,
  HeightProps,
  WidthProps,
  TypographyProps,
  typography
} from "styled-system";
import styled from '@emotion/styled';

interface ContainerProps
  extends ColorStyleProps,
    HeightProps,
    SpaceProps,
    TypographyProps,
    WidthProps {
  activeBorder?: string | null;
  activeShadow?: string | null;
  error?: boolean;
  border?: string;
  borderColor?: string;
  borderRadius?: string | number;
  borderWidth?: string | number;
}

export interface InputProps extends ContainerProps {
  icon?: JSX.Element;
  iconRight?: JSX.Element;
  label?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  role?: "text" | "password" | "number";
}

const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  height: 40px;
  padding: 2px;
  border-width: 1px;
  border-style: solid;
  transition: all 200ms ease;
  ${colorStyles};
  ${height};
  ${space};
  ${width};

  border: ${p => p.border && p.border};
  border-radius: ${p => (p.borderRadius ? p.borderRadius : "4px")};
  border-color: ${p => (p.borderColor ? p.borderColor : "rgb(210,210,210)")};
  border-width: ${p => (p.borderWidth ? p.borderWidth : "1px")};

  ${p =>
    p.error &&
    `
      border: solid 1px #eb4559;
    `}

  input {
    border: 0;
    outline: 0;
    height: 100%;
    width: 90%;
    ${typography};
  }

  &:focus-within {
      border: ${p =>
        p.activeBorder ? p.activeBorder : "solid 1px rgba(20, 240, 160, 0.5);"}
      box-shadow: ${p =>
        p.activeShadow
          ? p.activeShadow
          : "0px 0px 0px 2px rgba(20, 240, 160, 0.4)"}
  }
`;

export const Input: React.FC<InputProps> = props => {
  const { onChange, placeholder, role, ...rest } = props;
  return (
    <Container {...rest}>
      {props.icon && props.icon}
      <input
        placeholder={placeholder}
        onChange={onChange}
        type={role ? role : "text"}
      />
      {props.iconRight && props.iconRight}
    </Container>
  );
};
