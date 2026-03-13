import type { ButtonProps } from "./Button.types";
import clsx from "clsx";
import "./Button.css";

const variantClasses: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  soft: "btn-soft",
  ghost: "btn-ghost"
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  fullWidth = false,
  className,
  ...props
}) => {
  return (
    <button
      className={clsx(
        "btn-base",
        variantClasses[variant],
        fullWidth && "btn-full-width",
        className
      )}
      {...props}>
      {children}
    </button>
  );
};

export default Button;
