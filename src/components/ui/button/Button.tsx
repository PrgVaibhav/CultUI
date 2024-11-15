import React from "react";

interface ButtonProps {
  size: "lg" | "md" | "sm"; // Size of the button
  children: React.ReactNode; // Content of the button
  rightIcon?: React.ReactNode; // Icon to display on the right
  leftIcon?: React.ReactNode; // Icon to display on the left
  label?: string; // Accessibility label for the button
  cn?: string; // Additional custom CSS classes
  disable?: boolean; // Disables the button
  clickable?: () => void; // Function to be called when the button is clicked
}

export const Button: React.FC<ButtonProps> = ({
  size,
  children,
  rightIcon,
  leftIcon,
  label,
  cn,
  disable,
  clickable,
}) => {
  // Size mapping for different button sizes
  const sizeClasses = {
    lg: "py-3 px-4 text-lg shadow-xl",
    md: "py-3 px-4 text-md shadow-lg",
    sm: "py-2 px-2 text-sm shadow-md",
  };

  return (
    <button
      className={`${
        sizeClasses[size] // Apply size-specific classes
      } ${cn} flex items-center gap-2 ${
        rightIcon || leftIcon ? "justify-around" : "justify-center"
      } space-x-2 cursor-pointer rounded-lg ${
        disable ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
      }`}
      aria-label={label}
      disabled={disable}
      onClick={clickable}
    >
      {leftIcon && <span className="flex items-center">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="flex items-center">{rightIcon}</span>}
    </button>
  );
};
