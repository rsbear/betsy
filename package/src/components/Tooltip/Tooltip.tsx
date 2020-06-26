import React from "react";
import styled from '@emotion/styled';

import { Sans } from "../Sans";

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
`;

interface TipPosition {
  left?: number;
  right?: number | null;
  center: boolean;
}

interface TipProps {
  p?: any;
  tipPosition: TipPosition;
  width: number;
  className?: string;
  bg?: string;
  backgroundColor?: string;
}

const TipContainer = styled.div<TipProps>`
  width: ${p => p.width}px;
  border-radius: 3px;
  background-color: ${p =>
    p.backgroundColor || p.bg ? p.bg || p.backgroundColor : "white"};
  border: none;
  bottom: 100%;
  padding: 10px;
  margin-bottom: 6px;
  position: absolute;
  text-align: left;
  opacity: 0;
  pointer-events: none;
  transform-style: preserve-3d;
  transition: opacity 200ms ease-out;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2);
  transform: ${p => (p.tipPosition.center ? "translate(-50%)" : "none")};
  left: ${p =>
    p.tipPosition.left === null ? "auto" : `${p.tipPosition.left}px`};
  right: ${p =>
    p.tipPosition.right === null ? "auto" : `${p.tipPosition.right}px`};
  &:hover {
    cursor: default;
  }
  &.active {
    opacity: 1;
    &:hover {
      opacity: 0;
    }
  }

  /**
  &:after {
    content: "";
    position: absolute;
    width: 10px;
    height: 10px;
    background-color: ${p =>
      p.backgroundColor || p.bg ? p.bg || p.backgroundColor : "white"};
    transform: rotate(45deg) translateZ(-1px);
    bottom: -5px;
    left: calc(50% - 5px);
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2);
  }
  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 3px;
    background-color: ${p =>
      p.backgroundColor || p.bg ? p.bg || p.backgroundColor : "white"};
    transform: translateZ(-2px);
    top: 0;
    left: 0;
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2);
  }
  **/
`;

const Span = styled.span`
  white-space: nowrap;
`;

export interface TooltipProps {
  content: string;
  size: "sm" | "lg";
  width: number;
  bg?: string;
  backgroundColor?: string;
  color?: string;
}

export const Tooltip: React.FC<any> = props => {
  const [active, setActive] = React.useState(false);
  const [tipPosition, setTipPosition] = React.useState<TipPosition>({
    left: 0,
    center: false,
    right: null
  });

  const innerWrapper: any = React.useRef<HTMLDivElement>();

  const computeTipPosition = () => {
    let left: any = 0;
    let right: any = null;
    let center: any = false;

    const current = innerWrapper.current;

    if (current) {
      const clientRect = current.getBoundingClientRect();
      const innerWrapperLeft = clientRect.left;
      const innerWrapperRight = clientRect.right;
      const innerWrapperWidth = clientRect.width;

      left = innerWrapperWidth / 2;
      center = true;
      const spillOver = props.width / 2 - left;

      if (spillOver > innerWrapperLeft) {
        center = false;
        left = 0;
        right = null;
      }

      if (spillOver > window.innerWidth - innerWrapperRight) {
        center = false;
        left = null;
        right = 0;
      }
    }

    return {
      center,
      left,
      right
    };
  };

  React.useEffect(() => {
    const tipPosition = computeTipPosition();
    setTipPosition(tipPosition);
  }, []);

  const handleClick = () => {
    setActive(!active);
  };

  const handleMouseOver = () => {
    setActive(true);
  };

  const handleMouseOut = () => {
    setActive(false);
  };

  const content =
    typeof props.content === "string"
      ? formattedTip(props.content)
      : props.content;
  return (
    <Wrapper
      onClick={handleClick}
      onMouseOut={handleMouseOut}
      onMouseOver={handleMouseOver}
    >
      <TipContainer
        className={active ? "active" : undefined}
        p={props.size === "sm" ? 0.5 : 2}
        tipPosition={tipPosition}
        width={props.width}
        bg={props.bg}
        backgroundColor={props.backgroundColor}
      >
        <Sans fontSize={14} color={props.color ? props.color : "black80"}>
          <Span>{content}</Span>
        </Sans>
      </TipContainer>
      <div ref={innerWrapper}>{props.children}</div>
    </Wrapper>
  );
};

const formattedTip = (tip: string): string => {
  let substring = tip.substring(0, 300);

  if (substring !== tip) {
    substring += "…";
  }

  return substring;
};
