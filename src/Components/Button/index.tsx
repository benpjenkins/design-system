import React from "react";
import styled from "styled-components";

interface Props extends React.HTMLProps<HTMLButtonElement> {
  disabled?: boolean;
  children?: string;
}

const StyledButton = styled.button`
  background-color: ${(props) => (props.disabled ? "grey" : "#1f5e29")};
  border-color: #1f5e29;
  color: white;
  height: 40px;
  width: 140px;
  font-size: 0.8rem;
  border: none;
  border-radius: 5px;
  &:hover {
    background-color: ${(props) => (props.disabled ? "grey" : "#247532")};
  }
`;

export const Button = (props: Props): JSX.Element => {
  const { disabled, children } = props;
  return <StyledButton disabled={disabled}>{children}</StyledButton>;
};

export default Button;
