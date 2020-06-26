import React from "react";
import styled from '@emotion/styled';
import { space, SpaceProps, TypographyProps } from "styled-system";
import { Sans } from "../Sans";

export interface ContainerProps extends SpaceProps {
  hoverBg?: string;
}

export interface MenuItemProps
  extends ContainerProps,
    SpaceProps,
    TypographyProps {
  icon?: JSX.Element;
  onClick: Function;
  text: string;
}

const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  cursor: pointer;
  transition: all 200ms ease;
  opacity: 0.7;

  ${space};

  &:hover {
    opacity: 1;
    background-color: ${(props) =>
      props.hoverBg ? props.hoverBg : "transparent"};
  }
`;

export const MenuItem: React.FC<MenuItemProps> = (props) => {
  const {
    fontFamily,
    fontSize,
    fontWeight,
    fontStyle,
    icon,
    onClick,
    text,
    ...rest
  } = props;
  return (
    //@ts-ignore
    <Container onClick={onClick} {...rest}>
      {icon && icon}
      <Sans
        fontFamily={fontFamily}
        fontSize={fontSize}
        fontStyle={fontStyle}
        fontWeight={fontWeight}
      >
        {text}
      </Sans>
    </Container>
  );
};
