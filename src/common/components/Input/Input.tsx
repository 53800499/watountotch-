// src/components/ui/Input.tsx

import React from "react";
import clsx from "clsx";

export type InputVariant = "default" | "unstyled";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  variant?: InputVariant;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  id?: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  variant = "default",
  fullWidth = true,
  icon,
  className,
  id,
  ...props
}) => {
  const inputId =
    id || props.name || `input-${Math.random().toString(36).substring(2, 9)}`;

  const inputClass = clsx(
    {
      "form-control": variant === "default",
      "form-control-plaintext": variant === "unstyled",
    },
    error && "is-invalid",
    className
  );

  const wrapperClass = clsx("mb-3", fullWidth && "w-100");

  return (
    <div className={wrapperClass}>
      {label && (
        <label htmlFor={inputId} className="form-label">
          {label}
        </label>
      )}

      <div className="input-group">
        {icon && <span className="input-group-text">{icon}</span>}
        <input id={inputId} className={inputClass} {...props} />
      </div>

      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};
