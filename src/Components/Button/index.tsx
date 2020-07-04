// import React from "react";
import styled from "styled-components";

enum Variant {
  "primary",
  "secondary",
  "success",
  "warning",
  "danger",
  "info",
  "dark",
}

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "small" | "medium" | "large";
  variant?: Variant;
  // will probably remove background color once variant functionality is fleshed out
  backgroundColor?: string;
}

const buttonSizes = {
  small: {
    height: "40px",
    width: "140px",
  },
};

export const Button = styled.button.attrs<Props>((props) => ({
  size: props.size,
  variant: props.variant,
  // backgroundColor: props.backgroundColor,
}))<Props>`
  border-color: #1f5e29;
  color: white;
  background-color: ${(props) =>
    props.backgroundColor || props.theme.backgroundColor || "blue"};
  height: ${({ size }) =>
    size ? buttonSizes[size].height : buttonSizes.small.height};
  width: ${({ size }) =>
    size ? buttonSizes[size].width : buttonSizes.small.width};
  font-size: 0.8rem;
  border: none;
  border-radius: 5px;
`;

export default Button;
