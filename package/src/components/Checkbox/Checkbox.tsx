import React from "react";
import { Icon } from "../Icon";
import { Sans } from "../Sans";
import styled from '@emotion/styled';
import { space, SpaceProps } from "styled-system";

export interface CheckboxContainerProps extends SpaceProps {
  activeColor?: string;
  className?: string;
  color?: string;
  size?: number;
  key?: string | number;
}

export interface CheckboxProps extends CheckboxContainerProps {
  active?: boolean;
  textColor?: string;
  fontSize?: number | string;
  fontWeight?: number;
  label?: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  spacing?: string;
}

const CheckboxContainer = styled.div<CheckboxContainerProps>`
  display: flex;
  align-items: center;
  cursor: pointer;
  ${space};
  svg {
    stroke: ${p => (p.color ? p.color : "rgba(20,20,20,.6)")};
    transition: all 180ms ease-in-out;
    cursor: pointer;
    &:hover {
      stroke: ${p => (p.activeColor ? p.activeColor : "rgba(20,20,20,1)")};
    }
  }
  &.active svg {
    stroke: ${p => (p.activeColor ? p.activeColor : "rgba(20,20,20,1)")};
  }
`;

export const Checkbox: React.FC<CheckboxProps> = props => {
  // other props are shit like spacing and activeColor
  const {
    active,
    textColor,
    fontSize,
    fontWeight,
    onClick,
    spacing,
    size,
    label,
    ...otherProps
  } = props;

  return (
    <CheckboxContainer
      className={active ? "active" : undefined}
      onClick={onClick}
      key={!otherProps.key ? undefined : otherProps.key}
      {...otherProps}
    >
      <Icon
        icon={!active ? "square" : "check-square"}
        size={!size ? 18 : size}
        mr={!spacing ? "10px" : spacing}
      />
      <Sans fontSize={fontSize} fontWeight={fontWeight} color={textColor}>
        {label}
      </Sans>
    </CheckboxContainer>
  );
};
