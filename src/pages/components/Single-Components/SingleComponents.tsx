import { Info } from "lucide-react";
import {
  Breadcrumb,
  CodeSpace,
  SmallMessage,
  TitleDescription,
} from "../../../components";

export const SingleComponents = () => {
  return (
    <section className="flex flex-col gap-4">
      <Breadcrumb />
      <TitleDescription
        title="Button Component."
        description="A versatile and customizable button component, designed to drive user actions with style and functionality. Tailor it to fit your project with adjustable sizes, colors, and states like hover, active, and disabled. Perfect for CTAs, navigation, and forms, this button component enhances user experience with smooth animations and accessible interactions."
        divCn="border-b border-gray-600 pb-4"
        h1Cn="decoration-slate-400 underline underline-offset-4"
      />
      <div>
        <div className="flex flex-col gap-2">
          <h2
            className={`title text-3xl font-bold tracking-tight leading-snug  `}
          >
            Base Code Configuration
          </h2>
          <p className="w-full sm:w-9/12 flex flex-col gap-4 text-slate-400 text-md sm:text-lg  tracking-tight">
            To ensure seamless integration of this component into your project,
            start by adding the provided base configuration code to your
            codebase. This foundational setup establishes the necessary
            structure, styles, and functionality specific to the component.
          </p>

          <p className="w-full sm:w-9/12 flex flex-col gap-4 text-slate-400 text-md sm:text-lg  tracking-tight">
            Simply copy the base configuration code into your project, typically
            within a new file or an existing component folder. Once added, you
            can directly use and customize the variations of this component by
            copying their specific code snippets and implementing them in your
            desired location.
          </p>

          <SmallMessage>
            <Info size={25} /> This setup is unique to this component, so be
            sure to include it before using the variations provided below.
          </SmallMessage>
        </div>
        <CodeSpace
          label="Code section area"
          fileName="Button.tsx"
          component={false}
        >
          {`import React from "react";

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
     className={\`\${ sizeClasses[size] // Apply size-specific classes } 
    \${cn} flex items-center gap-2 \${ 
    rightIcon || leftIcon ? 
    "justify-around" : "justify-center" 
  } space-x-2 cursor-pointer rounded-lg 
   \${ 
    disable ? 
    "opacity-50 cursor-not-allowed" : 
    "cursor-pointer"
  }\`}
      aria-label={label}
      disabled={disable}
      onClick={clickable}
    >
      {leftIcon && 
      <span className="flex items-center">{leftIcon}</span>
      }
      {children}
      {rightIcon && 
      <span className="flex items-center">{rightIcon}</span>
      }
    </button>
  );
};
`}
        </CodeSpace>
      </div>

      <div>
        <div>
          <h2
            className={`title text-3xl font-bold tracking-tight leading-snug  `}
          >
            Variations
          </h2>

          <ol className="list-decimal list-inside">
            <li>Primary Button</li>
          </ol>
        </div>

        <div></div>
      </div>
    </section>
  );
};
