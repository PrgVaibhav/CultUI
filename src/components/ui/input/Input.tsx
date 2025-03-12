import React from "react";

interface InputProps {
  label?: string;
  placeholder?: string;
  id?: string;
  cn?: string;
  type: string;
  name: string;
  labelCn?: string;
  icon?: React.ReactNode;
  error?: string; // Optional error message
  errorCn?: string;
  mode?: "dark" | "light"; // Mode for styling
}

export const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  id,
  cn,
  type = "text",
  name,
  labelCn,
  icon,
  error,
  mode = "dark", // Default to dark mode
  errorCn,
}) => {
  const isDark = mode === "dark";

  return (
    <div className="flex flex-col gap-2 ">
      {/* Label */}
      {label && (
        <label
          htmlFor={id}
          className={`${
            isDark ? "text-gray-300" : "text-gray-700"
          } text-sm font-medium ${labelCn}`}
        >
          {label}
        </label>
      )}

      {/* Input Container */}
      <div className="relative">
        {/* Icon */}
        {icon && (
          <span
            className={`absolute inset-y-0 left-3 flex items-center ${
              isDark ? "text-gray-500" : "text-gray-400"
            }`}
          >
            {icon}
          </span>
        )}

        {/* Input Field */}
        <input
          type={type}
          name={name}
          id={id}
          placeholder={placeholder}
          className={`w-full px-4 py-2 rounded-lg shadow-md placeholder-opacity-70 transition-all duration-300 
                      focus:outline-none focus:ring-2 hover:ring-1 placeholder:text-md text
                      ${
                        isDark
                          ? "bg-zinc-700 text-gray-300 placeholder-gray-300 focus:ring-indigo-500 hover:ring-indigo-300"
                          : "bg-gray-100 text-gray-700 placeholder-gray-700 focus:ring-blue-500 hover:ring-blue-300"
                      } 
                      ${icon ? "pl-9" : ""} ${
            error
              ? "border-red-500 focus:ring-red-500 ring-red-500 "
              : "focus:border-transparent"
          } ${cn}`}
          aria-invalid={error ? "true" : "false"}
        />
      </div>

      {/* Error Message */}
      {error && (
        <p
          className={`text-xs font-medium mt-1 w-max px-3 py-1 rounded-md border shadow-md transition-all duration-300 text ${errorCn} ${
            isDark
              ? "bg-red-200 text-red-600 border-red-600"
              : "bg-red-100 text-red-600 border-red-400"
          }`}
        >
          {error}
        </p>
      )}
    </div>
  );
};
