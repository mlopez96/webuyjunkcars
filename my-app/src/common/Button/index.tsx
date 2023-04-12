import { StyledButton } from "./styles";
import { ButtonProps } from "../types";

export const Button = ({
  color,
  disabled,
  fixedWidth,
  children,
  onClick,
}: ButtonProps) => (
  <StyledButton disabled={disabled} color={color} fixedWidth={fixedWidth} onClick={onClick}>
    {children}
  </StyledButton>
);
