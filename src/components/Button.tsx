import { ReactNode } from "react";

type ButtonProps = {
  type?: "button" | "submit" | "reset";
  classes: string;
  children: ReactNode;
  handleClick(): void
};

export default function Button({ type = 'button', classes = '', handleClick, children }: ButtonProps) {
  return (
    <button
      type={type}
      className={classes}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}
