import React, { useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import styled from '@emotion/styled';

import useOutsideClick from "../../hooks/useOutsideClick";
import {
  borders,
  BordersProps,
  height,
  HeightProps,
  maxHeight,
  MaxHeightProps,
  maxWidth,
  MaxWidthProps,
  minHeight,
  MinHeightProps,
  minWidth,
  MinWidthProps,
  shadow,
  ShadowProps,
  SpaceProps,
  space,
  width,
  WidthProps,
} from "styled-system";

interface MaskProps {
  maskBg?: string;
  zIndex?: number;
}

interface ContentProps
  extends BordersProps,
    HeightProps,
    MaxHeightProps,
    MaxWidthProps,
    MinHeightProps,
    MinWidthProps,
    ShadowProps,
    SpaceProps,
    WidthProps {
  closeOutsideClick?: boolean;
  overflowY?: "auto" | "hidden" | "scroll" | "visible";
  overflowX?: "auto" | "hidden" | "scroll" | "visible";
  overflow?: "auto" | "hidden" | "scroll" | "visible";
}

interface ModalProps extends MaskProps, ContentProps {
  open: boolean;
  setOpen: Function;
  children?: JSX.Element;
}

const Mask = styled.div<MaskProps>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  z-index: ${(p) => p.zIndex};
  ${(p) =>
    !p.maskBg
      ? `background-color: rgba(215,215,215,.6)`
      : `background-color: ${p.maskBg}`}
`;

const Content = styled.div<ContentProps>`
  position: relative;
  max-width: 80%;
  padding: 40px;
  background: white;
  box-shadow: 0px 2px 24px rgba(10, 10, 10, 0.2);
  overflow: ${(p) => p.overflow};
  overflow-x: ${(p) => p.overflowX};
  overflow-y: ${(p) => p.overflowY};
  ${borders};
  ${height};
  ${maxHeight};
  ${maxWidth};
  ${minHeight};
  ${minWidth};
  ${shadow};
  ${space};
  ${width};
`;

export const Modal: React.FC<ModalProps> = (props) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const openCallback = React.useCallback(() => {
    props.setOpen(false);
  }, [props.setOpen]);
  const [ref] = useOutsideClick(openCallback);

  if (wrapperRef.current === null && typeof document !== "undefined") {
    const div = document.createElement("div");
    div.setAttribute("id", "modalRoot");
    wrapperRef.current = div;
  }

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper || typeof document === "undefined") {
      return;
    }
    document.body.appendChild(wrapper);
    return () => {
      document.body.removeChild(wrapper);
    };
  }, []);

  const { closeOutsideClick, maskBg, zIndex, children, ...rest } = props;

  const modalEl = (
    <>
      {!props.open ? null : (
        <Mask maskBg={maskBg} zIndex={zIndex}>
          <Content ref={!closeOutsideClick ? null : ref} {...rest}>
            {children}
          </Content>
        </Mask>
      )}
    </>
  );

  return wrapperRef
    ? wrapperRef.current && createPortal(modalEl, wrapperRef.current)
    : null;
};
