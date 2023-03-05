import { MouseEventHandler } from "react";
import { StyledButton } from "./style";

interface ButtonProps {
  children: string | React.ReactNode;
  handleClick?: MouseEventHandler<HTMLButtonElement> | undefined,
  disabled?: boolean
}

const Button = ({ children, handleClick, disabled }: ButtonProps) => {
  return <StyledButton onClick={handleClick} disabled={disabled}>
    {children}
  </StyledButton>;
};

export default Button;
