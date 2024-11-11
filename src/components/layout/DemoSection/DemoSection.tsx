import React, { ReactNode } from "react";

interface DemoSectionProps {
  children: ReactNode;
  cn?: string;
  label?: string;
}

export const DemoSection: React.FC<DemoSectionProps> = ({
  children,
  cn,
  label,
}) => {
  return (
    <div
      className={`flex items-center w-full h-[200px] sm:h-[150px] justify-center bg-[#1B1B1B] rounded-lg shadow-lg text-white ${cn}`}
      aria-label={label}
    >
      {children}
    </div>
  );
};
