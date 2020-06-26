import React from "react";
import styled from '@emotion/styled';

import {
  background,
  BackgroundProps,
  borders,
  BordersProps,
  color as colorStyles
} from "styled-system";
import { Flex } from "..";

export interface NotificationProps extends BackgroundProps, BordersProps {
  position?:
    | "topleft"
    | "topright"
    | "bottomright"
    | "bottomleft"
    | "topcenter"
    | "bottomcenter";
  color?: string;
  bg?: string;
  backgroundColor?: string;
  shadow?: string | null;
}

const Notification = styled.div<NotificationProps>`
  position: fixed;
  background-color: black;
  border-radius: 3px;
  padding: 15px 20px;
  color: white;
  ${background};
  ${borders};
  ${colorStyles};

  box-shadow:${p => (p.shadow ? p.shadow : "0 1px 4px 0 rgba(0, 0, 0, 0.2)")};
  
  ${p =>
    p.position === "topleft" &&
    `
      top: 20px;
      left: 20px;
    `}
  
  ${p =>
    p.position === "topright" &&
    `
      top: 20px;
      right: 20px;
    `}
  
  ${p =>
    p.position === "bottomright" &&
    `
      bottom: 20px;
      right: 20px;
    `}
  
  ${p =>
    p.position === "bottomleft" &&
    `
      bottom: 20px;
      left: 20px;
    `}
  
  ${p =>
    p.position === "topcenter" &&
    `
      top: 20px;
      left: 50%;
      transform: translateX(-50%);
    `}

  ${p =>
    p.position === "bottomcenter" &&
    `
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
    `}
`;

interface NotifyProps extends NotificationProps {
  timeout?: number;
  isOpen: boolean;
  setIsOpen: Function;
}

export const Notify: React.FC<NotifyProps> = props => {
  const [open, setOpen] = React.useState<boolean>(false);
  const { children, timeout, isOpen, setIsOpen, ...rest } = props;

  React.useEffect(() => {
    setOpen(isOpen);

    if (!timeout) {
      return;
    }

    if (isOpen) {
      setTimeout(() => {
        setIsOpen(false);
        setOpen(false);
      }, timeout);
    }
  }, [isOpen]);

  const closeOnClick = () => {
    setOpen(false);
    setIsOpen(open);
  };

  if (!open) {
    return null;
  }

  return (
    <Notification {...rest}>
      <Flex flexDirection="row" alignItems="center">
        <div>{children}</div>
        <Flex ml={15} onClick={closeOnClick}>
          x
        </Flex>
      </Flex>
    </Notification>
  );
};
