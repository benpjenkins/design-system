import styled from "styled-components";

interface Props {
  disabled?: boolean;
}

export const Button = styled.button<Props>`
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

export default Button;
