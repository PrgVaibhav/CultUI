import { Search } from "lucide-react";
import { Input } from "../../../components";
import { ComponentCardData } from "../../type/Types";

export const INPUT_DATA: ComponentCardData = {
  id: 2,
  title: "Input",
  description:
    "A clean, responsive input field for forms, with customizable validation options and multiple styling choices.",
  demoComponent: (
    <Input
      name="sample"
      id="sample"
      type="text"
      cn=""
      placeholder="Enter to search"
      icon={<Search size={18} />}
    />
  ),
  componentPageTitle: "Input Component.",
  componentPageDescription:
    "A flexible and customizable input component, designed to enhance user interaction with accessible and user-friendly features. Tailor it to fit your project with adjustable sizes, colors, and states like focus, disabled, and error handling. Perfect for forms, search bars, and data entry fields, this input component improves user experience with smooth animations, validation support, and responsive design.",

  fileName: "Input.tsx",
  configBaseCode: `import React from "react";

interface InputProps {
  label?: string;
  placeholder?: string;
  id?: string;
  cn?: string;
  type: string; // Type of input (e.g., text, password, email, etc.)
  name: string; // Name attribute for the input
  labelCn?: string; // Additional custom CSS classes for the label
  icon?: React.ReactNode; // Icon to display inside the input
  error?: string; // Optional error message
  errorCn?: string; // Additional CSS classes for the error message
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
    <div className="flex flex-col gap-2 w-full">
      {/* Label */}
      {label && (
        <label
          htmlFor={id}
          className={\`\${isDark ? "text-gray-300" : "text-gray-700"} text-sm font-medium \${labelCn}\`}
        >
          {label}
        </label>
      )}

      {/* Input Container */}
      <div className="relative">
        {/* Icon */}
        {icon && (
          <span
            className={\`absolute inset-y-0 left-3 flex items-center \${isDark ? "text-gray-500" : "text-gray-400"}\`}
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
          className={\`w-full px-4 py-2 rounded-lg shadow-md placeholder-opacity-70 transition-all duration-300  focus:outline-none focus:ring-2 hover:ring-1 placeholder:text-md text \${isDark ? "bg-zinc-700 text-gray-300 placeholder-gray-300 focus:ring-indigo-500 hover:ring-indigo-300" : "bg-gray-100 text-gray-700 placeholder-gray-700 focus:ring-blue-500 hover:ring-blue-300"} \${icon ? "pl-9" : ""} \${error ? "border-red-500 focus:ring-red-500 ring-red-500 " : "focus:border-transparent"} \${cn}\`}
          aria-invalid={error ? "true" : "false"}
        />
      </div>

      {/* Error Message */}
      {error && (
        <p
          className={\`text-xs font-medium mt-1 w-max px-3 py-1 rounded-md border shadow-md transition-all duration-300 text \${errorCn} \${isDark ? "bg-red-200 text-red-600 border-red-600" : "bg-red-100 text-red-600 border-red-400"}\`}
        >
          {error}
        </p>
      )}
    </div>
  );
};
`,

  variations: [
    {
      id: 1,
      title: "Primary Input.",
      description: "This is the default input design.",
      component: (
        <Input
          name="sample"
          id="sample"
          type="text"
          placeholder="Enter to search"
          icon={<Search size={18} />}
        />
      ),
      code: `<Input name="sample" id="sample" type="text" placeholder="Enter to search" icon={<Search size={18} />} />`,
      fileName: "InputComponent.tsx",
    },
    {
      id: 2,
      title: "Disabled Input.",
      description:
        "This is the disabled Input, with transparent background and subtle white themed background on interaction.",
      component: (
        <Input
          cn="bg-transparent text-slate-300 cursor-not-allowed pointer-none"
          type="text"
          name="sample"
          id="sample"
          placeholder="Disabled Input"
        />
      ),
      code: `<Input cn="bg-transparent text-slate-300 cursor-not-allowed pointer-none" type="text" name="sample" id="sample" placeholder="Disabled Input" />`,
    },
    {
      id: 3,
      title: "Labeled Input.",
      description: "Input with Label state.",
      component: (
        <Input
          cn="bg-transparent text-slate-300 "
          type="text"
          name="label"
          label="Hello World"
          id="label"
          placeholder="Write your wonders"
        />
      ),
      code: "",
    },
  ],
};
