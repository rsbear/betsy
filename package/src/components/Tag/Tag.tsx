import React from "react";
import { Icon } from "../Icon";
import styled from "@emotion/styled";
import {
  border,
  BorderProps,
  color,
  height,
  HeightProps,
  space,
  SpaceProps
} from "styled-system";

export interface TagContainerProps
  extends BorderProps,
    HeightProps,
    SpaceProps {
  active?: boolean;
  color?: string;
  cursor?: "disable" | "enable";
  bg?: string;
  hoverColor?: string;
  hoverBorder?: string;
  backgroundColor?: string;
}

export interface TagProps extends TagContainerProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  text?: string;
}

const TagContainer = styled.button<TagContainerProps>`
  border: 0;
  outline: 0;
  display: flex;
  align-items: center;
  height: 32px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 2px;
  background-color: #ebebeb;
  color: ${p => p.color};
  font-size: 13px;
  cursor: ${p => (p.cursor === "disable" ? "default" : "pointer")};
  transition: all 180ms ease;

  ${p =>
    p.active &&
    `
    background-color: #d4d4d4;
  `}

  ${border};
  ${color};
  ${height};
  ${space};

  span {
    margin-right: ${p => (p.active ? "8px" : undefined)};
  }

  & .divider {
    width: 1px;
    height: 14px;
    margin-right: 8px;
    background-color: ${p => p.color};
    opacity: 0.4;
  }

  &:hover {
    background-color: ${p => (p.hoverColor ? p.hoverColor : "#D4D4D4")};
    border: ${p => (p.hoverBorder ? p.hoverBorder : 0)};
  }
`;

export const Tag: React.FC<TagProps> = ({
  active,
  color,
  onClick,
  text,
  ...otherProps
}) => {
  return (
    <TagContainer
      active={active}
      color={!color ? "#474747" : color}
      {...otherProps}
      onClick={onClick}
    >
      <span>{text}</span>
      <div className={!active ? undefined : "divider"} />
      {active && (
        <Icon icon="x" size="10px" color={!color ? "#474747" : color} />
      )}
    </TagContainer>
  );
};
