import type { ButtonProps } from "./Button.types";
import clsx from "clsx";

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  className,
  ...props
}) => {
  /*   const baseStyles = "px-4 py-2 rounded font-semibold transition";
   */
  const baseStyles = "font-semibold transition";
  const variants = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-100 text-black hover:bg-gray-200",
    danger: "bg-red-500 text-white hover:bg-red-600",
    trial: "bg-white text-black"
  };

  return (
    <button
      className={clsx(baseStyles, variants[variant], className)}
      {...props}>
      {children}
    </button>
  );
};

export default Button;
