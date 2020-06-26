import React from "react";
import styled from '@emotion/styled';
import { Flex } from "../Flex";
import { Box } from "../Box";
import useOutsideClick from "./../../hooks/useOutsideClick";

import {
  color as colorStyles,
  ColorStyleProps,
  // space,
  SpaceProps,
  borders,
} from "styled-system";
import { Icon } from "../Icon";

export interface ButtonMainProps extends ColorStyleProps, SpaceProps {
  bg?: string;
  backgroundColor?: string;
  borderColor?: string;
  borderRadius?: number;
  borderWidth?: number;
  color?: string;
  textAlign?: "left" | "center" | "right";
  variant?: "primary" | "secondary" | "error";
}

export interface ButtonDropdownProps
  extends ButtonMainProps,
    ColorStyleProps,
    SpaceProps {
  color?: string;
  onChange?: Function;
  onClick?: Function;
  text: string | number;
}

const MainButton = styled.button<ButtonMainProps>`
  height: 40px;
  width: calc(100% - 40px);
  padding-left: 10px;
  padding-right: 10px;

  font-size: 14px;
  font-weight: 500;
  color: white;
  outline: 0;
  border-right: 0;
  text-transform: capitalize;
  text-align: ${(props) => (props.textAlign ? props.textAlign : "left")};

  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: ${(p) =>
    p.borderRadius ? `${p.borderRadius}px` : "4px"};
  border-bottom-left-radius: ${(p) =>
    p.borderRadius ? `${p.borderRadius}px` : "4px"};

  ${colorStyles};

  ${(p) =>
    (!p.variant || p.variant === "primary") &&
    `
      background-color: black;
      color: white;
      border-width: ${p.borderWidth ? `${p.borderWidth}px` : "1px"};
      border-top-color: ${p.borderColor ? p.borderColor : "transparent"};
      border-left-color: ${p.borderColor ? p.borderColor : "transparent"};
      border-bottom-color: ${p.borderColor ? p.borderColor : "transparent"};
    `}

  ${(props) =>
    props.variant === "secondary" &&
    `
      background-color: white;
      color: rgb(50, 50, 50);
      border-width: ${props.borderWidth ? `${props.borderWidth}px` : "1px"};
      border-top-color: ${
        props.borderColor ? props.borderColor : "rgba(210,210,210)"
      };
      border-left-color: ${
        props.borderColor ? props.borderColor : "rgba(210,210,210)"
      };
      border-bottom-color: ${
        props.borderColor ? props.borderColor : "rgba(210,210,210)"
      };
    `}

  ${(p) =>
    p.variant === "error" &&
    `
      background-color: white;
      color: rgb(50, 50, 50);
      border-width: ${p.borderWidth ? `${p.borderWidth}px` : "1px"};
      border-top-color: ${p.borderColor ? p.borderColor : "#eb4559"};
      border-left-color: ${p.borderColor ? p.borderColor : "#eb4559"};
      border-bottom-color: ${p.borderColor ? p.borderColor : "#eb4559"};
    `}
`;

const DownArrow = styled.button<ButtonMainProps>`
  width: 40px;
  border-left: 0;

  border-top-right-radius: ${(p) =>
    p.borderRadius ? `${p.borderRadius}px` : "4px"};
  border-bottom-right-radius: ${(p) =>
    p.borderRadius ? `${p.borderRadius}px` : "4px"};

  ${colorStyles};

  ${(p) =>
    (!p.variant || p.variant === "primary") &&
    `
      background-color: black;
      color: white;
      border-width: ${p.borderWidth ? `${p.borderWidth}px` : "1px"};
      border-top-color: ${p.borderColor ? p.borderColor : "transparent"};
      border-right-color: ${p.borderColor ? p.borderColor : "transparent"};
      border-bottom-color: ${p.borderColor ? p.borderColor : "transparent"};
    `}
    
  ${(p) =>
    p.variant === "secondary" &&
    `
      background-color: white;
      color: rgb(50, 50, 50);
      border-width: ${p.borderWidth ? `${p.borderWidth}px` : 1};
      border-top-color: ${p.borderColor ? p.borderColor : "rgba(210,210,210)"};
      border-right-color: ${
        p.borderColor ? p.borderColor : "rgba(210,210,210)"
      };
      border-bottom-color: ${
        p.borderColor ? p.borderColor : "rgba(210,210,210)"
      };
    `}
    
  ${(p) =>
    p.variant === "error" &&
    `
      background-color: white;
      color: rgb(50, 50, 50);
      border-width: ${p.borderWidth ? `${p.borderWidth}px` : 1};
      border-top-color: ${p.borderColor ? p.borderColor : "#eb4559"};
      border-right-color: ${p.borderColor ? p.borderColor : "#eb4559"};
      border-bottom-color: ${p.borderColor ? p.borderColor : "#eb4559"};
    `}
`;

const DropBackground = styled.div`
  position: absolute;
  width: 100%;
  background: white;
  box-shadow: 1px 4px 12px rgba(10, 10, 10, 0.1);
  border-radius: 5px;
`;

export const ButtonDropdown: React.FC<ButtonDropdownProps> = (props) => {
  const [showDropdown, setShowDropdown] = React.useState<boolean>(false);
  const openCallback = React.useCallback(() => {
    setShowDropdown(false);
  }, [setShowDropdown]);
  const [ref] = useOutsideClick(openCallback);

  const handleOpen = () => {
    setShowDropdown(true);
  };

  const { children, onChange, ...otherProps } = props;

  return (
    <Box width={1} ref={ref} position="relative">
      <Flex>
        <MainButton
          bg={props.bg}
          color={props.color}
          borderRadius={props.borderRadius}
          borderColor={props.borderColor}
          borderWidth={props.borderWidth}
          textAlign={props.textAlign}
          variant={props.variant}
        >
          {props.text}
        </MainButton>
        <DownArrow
          onClick={handleOpen}
          bg={props.bg}
          color={props.color}
          borderRadius={props.borderRadius}
          borderColor={props.borderColor}
          borderWidth={props.borderWidth}
          variant={props.variant}
        >
          <Icon icon="chevron-down" color={props.color} />
        </DownArrow>
      </Flex>
      {showDropdown && <DropBackground>{children}</DropBackground>}
    </Box>
  );
};
