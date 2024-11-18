import { Button } from "../../components";
export interface ComponentCardData {
  id: number;
  title: string;
  description: string;
  demoComponent: React.ReactNode;
  componentPageTitle: string;
  componentPageDescription: string;
  configBaseCode?: string;
  fileName?: string;
  baseCode?: string;
  variations: {
    id: number;
    title: string;
    description: string;
    fileName?: string;
    component: React.ReactNode;
    code: string;
  }[];
}

export const COMPONENT_CARD_DATA: ComponentCardData[] = [
  {
    id: 1,
    title: "Button",
    description:
      "A versatile button component with customizable styles, sizes, and states. Perfect for calls to action across your project.",
    demoComponent: (
      <Button size="md" cn="bg-blue-600 text-slate-300">
        Click Me!!
      </Button>
    ),
    componentPageTitle: "Button Component.",
    componentPageDescription:
      "A versatile and customizable button component, designed to drive user actions with style and functionality. Tailor it to fit your project with adjustable sizes, colors, and states like hover, active, and disabled. Perfect for CTAs, navigation, and forms, this button component enhances user experience with smooth animations and accessible interactions.",
    configBaseCode: `import React from "react";

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
`,
    fileName: "Button.tsx",
    variations: [
      {
        id: 1,
        title: "Primary Button.",
        description: "This is the default button design.",
        component: (
          <Button size="md" cn="bg-blue-600 text-slate-300">
            Primary Button
          </Button>
        ),
        code: `<Button size="md" cn="bg-blue-600 text-slate-300">
            Primary Button
          </Button>`,
      },
      {
        id: 2,
        title: "Invisible Button.",
        description:
          "This is the invisible button, with transparent background and subtle white themed background on interaction.",
        component: (
          <Button
            size="md"
            cn="bg-transparent text-slate-300 hover:bg-gray-600"
          >
            Invisible Button
          </Button>
        ),
        code: "",
      },
      {
        id: 3,
        title: "Disabled Button.",
        description:
          "Button with disabled state. Not accessible if disabled is set as true.",
        component: (
          <Button size="md" cn="bg-blue-600 text-slate-300" disable>
            Disabled Button
          </Button>
        ),
        code: "",
      },
      {
        id: 4,
        title: "Icon Buttons.",
        description:
          "Button with Icons. You can use the buttons on the left or the right of the text",
        component: (
          <>
            <Button size="md" cn="bg-zinc-800 text-slate-300" leftIcon={"🔥"}>
              Left Icon Button
            </Button>
            <Button size="md" cn="bg-zinc-800 text-slate-300" rightIcon={"🔥"}>
              Right Icon Button
            </Button>
          </>
        ),
        code: "",
      },
    ],
  },
  {
    id: 2,
    title: "Input",
    description:
      "A clean, responsive input field for forms, with customizable validation options and multiple styling choices.",
    demoComponent: (
      <Button size="md" cn="bg-blue-600 text-slate-300">
        Click Me!!
      </Button>
    ),
    componentPageTitle: "Button Component.",
    componentPageDescription:
      "A versatile and customizable button component, designed to drive user actions with style and functionality. Tailor it to fit your project with adjustable sizes, colors, and states like hover, active, and disabled. Perfect for CTAs, navigation, and forms, this button component enhances user experience with smooth animations and accessible interactions.",
    fileName: "Button.tsx",
    variations: [
      {
        id: 1,
        title: "Primary Button.",
        description: "This is the default button design.",
        component: (
          <Button size="md" cn="bg-blue-600 text-slate-300">
            Primary Button
          </Button>
        ),
        code: "",
      },
      {
        id: 2,
        title: "Invisible Button.",
        description:
          "This is the invisible button, with transparent background and subtle white themed background on interaction.",
        component: (
          <Button
            size="md"
            cn="bg-transparent text-slate-300 hover:bg-gray-600"
          >
            Invisible Button
          </Button>
        ),
        code: "",
      },
      {
        id: 3,
        title: "Disabled Button.",
        description:
          "Button with disabled state. Not accessible if disabled is set as true.",
        component: (
          <Button size="md" cn="bg-blue-600 text-slate-300" disable>
            Disabled Button
          </Button>
        ),
        code: "",
      },
      {
        id: 4,
        title: "Icon Buttons.",
        description:
          "Button with Icons. You can use the buttons on the left or the right of the text",
        component: (
          <>
            <Button size="md" cn="bg-zinc-800 text-slate-300" leftIcon={"🔥"}>
              Left Icon Button
            </Button>
            <Button size="md" cn="bg-zinc-800 text-slate-300" rightIcon={"🔥"}>
              Right Icon Button
            </Button>
          </>
        ),
        code: "",
      },
    ],
  },
  {
    id: 3,
    title: "Login Form",
    description:
      "A fully-styled login form with input fields, remember me, and password visibility toggle features.",
    demoComponent: (
      <Button size="md" cn="bg-blue-600 text-slate-300">
        Click Me!!
      </Button>
    ),
    componentPageTitle: "Button Component.",
    componentPageDescription:
      "A versatile and customizable button component, designed to drive user actions with style and functionality. Tailor it to fit your project with adjustable sizes, colors, and states like hover, active, and disabled. Perfect for CTAs, navigation, and forms, this button component enhances user experience with smooth animations and accessible interactions.",
    fileName: "Button.tsx",
    variations: [
      {
        id: 1,
        title: "Primary Button.",
        description: "This is the default button design.",
        component: (
          <Button size="md" cn="bg-blue-600 text-slate-300">
            Primary Button
          </Button>
        ),
        code: "",
      },
      {
        id: 2,
        title: "Invisible Button.",
        description:
          "This is the invisible button, with transparent background and subtle white themed background on interaction.",
        component: (
          <Button
            size="md"
            cn="bg-transparent text-slate-300 hover:bg-gray-600"
          >
            Invisible Button
          </Button>
        ),
        code: "",
      },
      {
        id: 3,
        title: "Disabled Button.",
        description:
          "Button with disabled state. Not accessible if disabled is set as true.",
        component: (
          <Button size="md" cn="bg-blue-600 text-slate-300" disable>
            Disabled Button
          </Button>
        ),
        code: "",
      },
      {
        id: 4,
        title: "Icon Buttons.",
        description:
          "Button with Icons. You can use the buttons on the left or the right of the text",
        component: (
          <>
            <Button size="md" cn="bg-zinc-800 text-slate-300" leftIcon={"🔥"}>
              Left Icon Button
            </Button>
            <Button size="md" cn="bg-zinc-800 text-slate-300" rightIcon={"🔥"}>
              Right Icon Button
            </Button>
          </>
        ),
        code: "",
      },
    ],
  },
  {
    id: 4,
    title: "Card Component",
    description:
      "A sleek card layout for displaying images, text, and actions, ideal for product showcases and feature highlights.",
    demoComponent: (
      <Button size="md" cn="bg-blue-600 text-slate-300">
        Click Me!!
      </Button>
    ),
    componentPageTitle: "Button Component.",
    componentPageDescription:
      "A versatile and customizable button component, designed to drive user actions with style and functionality. Tailor it to fit your project with adjustable sizes, colors, and states like hover, active, and disabled. Perfect for CTAs, navigation, and forms, this button component enhances user experience with smooth animations and accessible interactions.",
    fileName: "Button.tsx",
    variations: [
      {
        id: 1,
        title: "Primary Button.",
        description: "This is the default button design.",
        component: (
          <Button size="md" cn="bg-blue-600 text-slate-300">
            Primary Button
          </Button>
        ),
        code: "",
      },
      {
        id: 2,
        title: "Invisible Button.",
        description:
          "This is the invisible button, with transparent background and subtle white themed background on interaction.",
        component: (
          <Button
            size="md"
            cn="bg-transparent text-slate-300 hover:bg-gray-600"
          >
            Invisible Button
          </Button>
        ),
        code: "",
      },
      {
        id: 3,
        title: "Disabled Button.",
        description:
          "Button with disabled state. Not accessible if disabled is set as true.",
        component: (
          <Button size="md" cn="bg-blue-600 text-slate-300" disable>
            Disabled Button
          </Button>
        ),
        code: "",
      },
      {
        id: 4,
        title: "Icon Buttons.",
        description:
          "Button with Icons. You can use the buttons on the left or the right of the text",
        component: (
          <>
            <Button size="md" cn="bg-zinc-800 text-slate-300" leftIcon={"🔥"}>
              Left Icon Button
            </Button>
            <Button size="md" cn="bg-zinc-800 text-slate-300" rightIcon={"🔥"}>
              Right Icon Button
            </Button>
          </>
        ),
        code: "",
      },
    ],
  },
  {
    id: 5,
    title: "Accordion",
    description:
      "An interactive accordion for expanding and collapsing content sections, ideal for FAQs and dense information.",
    demoComponent: (
      <Button size="md" cn="bg-blue-600 text-slate-300">
        Click Me!!
      </Button>
    ),
    componentPageTitle: "Button Component.",
    componentPageDescription:
      "A versatile and customizable button component, designed to drive user actions with style and functionality. Tailor it to fit your project with adjustable sizes, colors, and states like hover, active, and disabled. Perfect for CTAs, navigation, and forms, this button component enhances user experience with smooth animations and accessible interactions.",
    fileName: "Button.tsx",
    variations: [
      {
        id: 1,
        title: "Primary Button.",
        description: "This is the default button design.",
        component: (
          <Button size="md" cn="bg-blue-600 text-slate-300">
            Primary Button
          </Button>
        ),
        code: "",
      },
      {
        id: 2,
        title: "Invisible Button.",
        description:
          "This is the invisible button, with transparent background and subtle white themed background on interaction.",
        component: (
          <Button
            size="md"
            cn="bg-transparent text-slate-300 hover:bg-gray-600"
          >
            Invisible Button
          </Button>
        ),
        code: "",
      },
      {
        id: 3,
        title: "Disabled Button.",
        description:
          "Button with disabled state. Not accessible if disabled is set as true.",
        component: (
          <Button size="md" cn="bg-blue-600 text-slate-300" disable>
            Disabled Button
          </Button>
        ),
        code: "",
      },
      {
        id: 4,
        title: "Icon Buttons.",
        description:
          "Button with Icons. You can use the buttons on the left or the right of the text",
        component: (
          <>
            <Button size="md" cn="bg-zinc-800 text-slate-300" leftIcon={"🔥"}>
              Left Icon Button
            </Button>
            <Button size="md" cn="bg-zinc-800 text-slate-300" rightIcon={"🔥"}>
              Right Icon Button
            </Button>
          </>
        ),
        code: "",
      },
    ],
  },
  {
    id: 6,
    title: "Modal",
    description:
      "A centered modal for displaying messages, and important actions, complete with overlay and close options.",
    demoComponent: (
      <Button size="md" cn="bg-blue-600 text-slate-300">
        Click Me!!
      </Button>
    ),
    componentPageTitle: "Button Component.",
    componentPageDescription:
      "A versatile and customizable button component, designed to drive user actions with style and functionality. Tailor it to fit your project with adjustable sizes, colors, and states like hover, active, and disabled. Perfect for CTAs, navigation, and forms, this button component enhances user experience with smooth animations and accessible interactions.",
    fileName: "Button.tsx",
    variations: [
      {
        id: 1,
        title: "Primary Button.",
        description: "This is the default button design.",
        component: (
          <Button size="md" cn="bg-blue-600 text-slate-300">
            Primary Button
          </Button>
        ),
        code: "",
      },
      {
        id: 2,
        title: "Invisible Button.",
        description:
          "This is the invisible button, with transparent background and subtle white themed background on interaction.",
        component: (
          <Button
            size="md"
            cn="bg-transparent text-slate-300 hover:bg-gray-600"
          >
            Invisible Button
          </Button>
        ),
        code: "",
      },
      {
        id: 3,
        title: "Disabled Button.",
        description:
          "Button with disabled state. Not accessible if disabled is set as true.",
        component: (
          <Button size="md" cn="bg-blue-600 text-slate-300" disable>
            Disabled Button
          </Button>
        ),
        code: "",
      },
      {
        id: 4,
        title: "Icon Buttons.",
        description:
          "Button with Icons. You can use the buttons on the left or the right of the text",
        component: (
          <>
            <Button size="md" cn="bg-zinc-800 text-slate-300" leftIcon={"🔥"}>
              Left Icon Button
            </Button>
            <Button size="md" cn="bg-zinc-800 text-slate-300" rightIcon={"🔥"}>
              Right Icon Button
            </Button>
          </>
        ),
        code: "",
      },
    ],
  },
  {
    id: 7,
    title: "Toast Notification",
    description:
      "A lightweight toast notification for alerting users of success, errors, or info updates, with auto-dismiss options.",
    demoComponent: (
      <Button size="md" cn="bg-blue-600 text-slate-300">
        Click Me!!
      </Button>
    ),
    componentPageTitle: "Button Component.",
    componentPageDescription:
      "A versatile and customizable button component, designed to drive user actions with style and functionality. Tailor it to fit your project with adjustable sizes, colors, and states like hover, active, and disabled. Perfect for CTAs, navigation, and forms, this button component enhances user experience with smooth animations and accessible interactions.",
    fileName: "Button.tsx",
    variations: [
      {
        id: 1,
        title: "Primary Button.",
        description: "This is the default button design.",
        component: (
          <Button size="md" cn="bg-blue-600 text-slate-300">
            Primary Button
          </Button>
        ),
        code: "",
      },
      {
        id: 2,
        title: "Invisible Button.",
        description:
          "This is the invisible button, with transparent background and subtle white themed background on interaction.",
        component: (
          <Button
            size="md"
            cn="bg-transparent text-slate-300 hover:bg-gray-600"
          >
            Invisible Button
          </Button>
        ),
        code: "",
      },
      {
        id: 3,
        title: "Disabled Button.",
        description:
          "Button with disabled state. Not accessible if disabled is set as true.",
        component: (
          <Button size="md" cn="bg-blue-600 text-slate-300" disable>
            Disabled Button
          </Button>
        ),
        code: "",
      },
      {
        id: 4,
        title: "Icon Buttons.",
        description:
          "Button with Icons. You can use the buttons on the left or the right of the text",
        component: (
          <>
            <Button size="md" cn="bg-zinc-800 text-slate-300" leftIcon={"🔥"}>
              Left Icon Button
            </Button>
            <Button size="md" cn="bg-zinc-800 text-slate-300" rightIcon={"🔥"}>
              Right Icon Button
            </Button>
          </>
        ),
        code: "",
      },
    ],
  },
  {
    id: 8,
    title: "Dropdown Menu",
    description:
      "An accessible dropdown menu with customizable options, perfect for settings or navigation.",
    demoComponent: (
      <Button size="md" cn="bg-blue-600 text-slate-300">
        Click Me!!
      </Button>
    ),
    componentPageTitle: "Button Component.",
    componentPageDescription:
      "A versatile and customizable button component, designed to drive user actions with style and functionality. Tailor it to fit your project with adjustable sizes, colors, and states like hover, active, and disabled. Perfect for CTAs, navigation, and forms, this button component enhances user experience with smooth animations and accessible interactions.",
    fileName: "Button.tsx",
    variations: [
      {
        id: 1,
        title: "Primary Button.",
        description: "This is the default button design.",
        component: (
          <Button size="md" cn="bg-blue-600 text-slate-300">
            Primary Button
          </Button>
        ),
        code: "",
      },
      {
        id: 2,
        title: "Invisible Button.",
        description:
          "This is the invisible button, with transparent background and subtle white themed background on interaction.",
        component: (
          <Button
            size="md"
            cn="bg-transparent text-slate-300 hover:bg-gray-600"
          >
            Invisible Button
          </Button>
        ),
        code: "",
      },
      {
        id: 3,
        title: "Disabled Button.",
        description:
          "Button with disabled state. Not accessible if disabled is set as true.",
        component: (
          <Button size="md" cn="bg-blue-600 text-slate-300" disable>
            Disabled Button
          </Button>
        ),
        code: "",
      },
      {
        id: 4,
        title: "Icon Buttons.",
        description:
          "Button with Icons. You can use the buttons on the left or the right of the text",
        component: (
          <>
            <Button size="md" cn="bg-zinc-800 text-slate-300" leftIcon={"🔥"}>
              Left Icon Button
            </Button>
            <Button size="md" cn="bg-zinc-800 text-slate-300" rightIcon={"🔥"}>
              Right Icon Button
            </Button>
          </>
        ),
        code: "",
      },
    ],
  },
  {
    id: 9,
    title: "Tooltip",
    description:
      "A small, informative tooltip to provide additional context or hints on hover or focus.",
    demoComponent: (
      <Button size="md" cn="bg-blue-600 text-slate-300">
        Click Me!!
      </Button>
    ),
    componentPageTitle: "Button Component.",
    componentPageDescription:
      "A versatile and customizable button component, designed to drive user actions with style and functionality. Tailor it to fit your project with adjustable sizes, colors, and states like hover, active, and disabled. Perfect for CTAs, navigation, and forms, this button component enhances user experience with smooth animations and accessible interactions.",
    fileName: "Button.tsx",
    variations: [
      {
        id: 1,
        title: "Primary Button.",
        description: "This is the default button design.",
        component: (
          <Button size="md" cn="bg-blue-600 text-slate-300">
            Primary Button
          </Button>
        ),
        code: "",
      },
      {
        id: 2,
        title: "Invisible Button.",
        description:
          "This is the invisible button, with transparent background and subtle white themed background on interaction.",
        component: (
          <Button
            size="md"
            cn="bg-transparent text-slate-300 hover:bg-gray-600"
          >
            Invisible Button
          </Button>
        ),
        code: "",
      },
      {
        id: 3,
        title: "Disabled Button.",
        description:
          "Button with disabled state. Not accessible if disabled is set as true.",
        component: (
          <Button size="md" cn="bg-blue-600 text-slate-300" disable>
            Disabled Button
          </Button>
        ),
        code: "",
      },
      {
        id: 4,
        title: "Icon Buttons.",
        description:
          "Button with Icons. You can use the buttons on the left or the right of the text",
        component: (
          <>
            <Button size="md" cn="bg-zinc-800 text-slate-300" leftIcon={"🔥"}>
              Left Icon Button
            </Button>
            <Button size="md" cn="bg-zinc-800 text-slate-300" rightIcon={"🔥"}>
              Right Icon Button
            </Button>
          </>
        ),
        code: "",
      },
    ],
  },
  {
    id: 10,
    title: "Breadcrumbs",
    description:
      "A breadcrumb navigation to show user location and provide quick access to higher levels of a site.",
    demoComponent: (
      <Button size="md" cn="bg-blue-600 text-slate-300">
        Click Me!!
      </Button>
    ),
    componentPageTitle: "Button Component.",
    componentPageDescription:
      "A versatile and customizable button component, designed to drive user actions with style and functionality. Tailor it to fit your project with adjustable sizes, colors, and states like hover, active, and disabled. Perfect for CTAs, navigation, and forms, this button component enhances user experience with smooth animations and accessible interactions.",
    fileName: "Button.tsx",
    variations: [
      {
        id: 1,
        title: "Primary Button.",
        description: "This is the default button design.",
        component: (
          <Button size="md" cn="bg-blue-600 text-slate-300">
            Primary Button
          </Button>
        ),
        code: "",
      },
      {
        id: 2,
        title: "Invisible Button.",
        description:
          "This is the invisible button, with transparent background and subtle white themed background on interaction.",
        component: (
          <Button
            size="md"
            cn="bg-transparent text-slate-300 hover:bg-gray-600"
          >
            Invisible Button
          </Button>
        ),
        code: "",
      },
      {
        id: 3,
        title: "Disabled Button.",
        description:
          "Button with disabled state. Not accessible if disabled is set as true.",
        component: (
          <Button size="md" cn="bg-blue-600 text-slate-300" disable>
            Disabled Button
          </Button>
        ),
        code: "",
      },
      {
        id: 4,
        title: "Icon Buttons.",
        description:
          "Button with Icons. You can use the buttons on the left or the right of the text",
        component: (
          <>
            <Button size="md" cn="bg-zinc-800 text-slate-300" leftIcon={"🔥"}>
              Left Icon Button
            </Button>
            <Button size="md" cn="bg-zinc-800 text-slate-300" rightIcon={"🔥"}>
              Right Icon Button
            </Button>
          </>
        ),
        code: "",
      },
    ],
  },
];
