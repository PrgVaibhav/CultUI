import { Clipboard } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../../ui/button/Button";
import { CopyToClipboard } from "../../../helpers";

interface CodeSpaceProps {
  children: React.ReactNode;
  label: string;
  cn?: string;
  fileName?: string;
  component?: React.ReactNode; // This is the component to be displayed first
}

export const CodeSpace: React.FC<CodeSpaceProps> = ({
  children,
  label,
  cn,
  fileName,
  component,
}) => {
  const [isCodeVisible, setIsCodeVisible] = useState<boolean>(false); // State to toggle code visibility
  const [copied, setCopied] = useState<boolean>(false);
  const maxLines = 5; // Maximum lines to show when collapsed

  // Split code into lines for truncation
  const codeLines = (children as string).split("\n");
  const shouldTruncate = codeLines.length > maxLines;

  const toggleCodeVisibility = () => {
    setIsCodeVisible(!isCodeVisible);
  };

  const copyCode = () => {
    CopyToClipboard({
      text: children as string,
    });
    setCopied((prev) => !prev);

    setTimeout(() => {
      setCopied(false);
    }, 1200);
  };

  return (
    <div
      className={`${cn} flex m-auto items-center bg-slate-800 shadow-lg rounded-lg relative mt-4`}
      aria-label={label}
    >
      <pre className="flex flex-col gap-2 w-full">
        {/* File name and copy button */}
        <div className="w-full flex justify-between items-center p-2 rounded-t-lg bg-[#63636373]">
          {fileName && (
            <div className="text-sm tracking-tight text-slate-300">
              {fileName}
            </div>
          )}

          <div className="flex items-center gap-2">
            {/* View Code Button - Only show if the component is present */}
            {component && (
              <Button
                size="sm"
                cn="bg-slate-800 text-xs sm:text-sm font-medium tracking-tighter"
                clickable={toggleCodeVisibility}
              >
                {isCodeVisible ? "Hide Code" : "View Code"}
              </Button>
            )}
            <Button
              size="sm"
              cn="bg-slate-800 text-xs sm:text-sm font-medium tracking-tighter"
              leftIcon={<Clipboard size={15} />}
              clickable={copyCode}
            >
              {copied ? "Copied" : "Copy Code"}
            </Button>
          </div>
        </div>

        {/* Component (if provided) */}
        {component && !isCodeVisible && (
          <div className="w-full p-4">{component}</div>
        )}

        {/* Code block */}
        {(isCodeVisible || !component) && (
          <code
            className="text-gray-400 text-xs sm:text-sm text-wrap p-4 transition-all duration-300"
            style={{
              maxHeight: isCodeVisible ? "none" : `${maxLines * 1.5}rem`,
              overflow: isCodeVisible ? "visible" : "hidden",
            }}
          >
            {shouldTruncate && !isCodeVisible
              ? codeLines.slice(0, maxLines).join("\n") + "\n..."
              : children}
          </code>
        )}

        {/* Expand/Collapse Button for code */}
        {shouldTruncate && (
          <Button
            clickable={toggleCodeVisibility}
            size="sm"
            cn="text-gray-200 text-xs sm:text-sm font-medium bg-[#111d] m-2 self-end "
          >
            {isCodeVisible ? "View Less" : "View More"}
          </Button>
        )}
      </pre>
    </div>
  );
};
