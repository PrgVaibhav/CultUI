import React from "react";

interface SmallMessageProps {
  children: React.ReactNode;
}

export const SmallMessage: React.FC<SmallMessageProps> = ({ children }) => {
  return (
    <p className="w-full sm:w-max flex items-center gap-2 text-sm tracking-tight bg-orange-200 border-2 border-orange-400 p-2 text-orange-800 mt-4 mb-4 rounded-lg shadow-lg ">
      {children}
    </p>
  );
};
