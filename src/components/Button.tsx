import { ReactNode } from "react";

type ButtonProps = {
  type?: "button" | "submit" | "reset";
  classes: string;
  children: ReactNode;
  disabled?: boolean;
  handleClick(): void
};

export default function Button({
  type = 'button',
  classes = '',
  handleClick,
  disabled = false,
  children,
}: ButtonProps) {
  return (
    <button
      type={type}
      className={classes}
      onClick={handleClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
