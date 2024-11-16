import { X } from "lucide-react";
import { TitleDescription } from "../../layout/TitleDescription/TitleDescription";

interface SearchComponentProps {
  clickable?: () => void;
}

export const SearchComponent: React.FC<SearchComponentProps> = ({
  clickable,
}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#000000ec]  z-50 p-4 sm:p-0">
      <div className="w-full sm:w-8/12 h-[400px] flex items-center justify-center  flex-col gap-4  bg-[#6363639a]  text-white p-4 shadow-lg rounded-lg relative">
        <TitleDescription
          h1Cn="decoration-slate-400 underline underline-offset-4"
          title="Find your way."
          description="Type to instantly filter and find the exact component you need, streamlining your design workflow"
        />
        <input
          type="text"
          placeholder="Search your favorite components..."
          className="px-4 py-3 w-full  rounded-md shadow-lg bg-[#63636373] text-white placeholder-gray-300 focus:outline-none 
             focus:ring-2 focus:ring-gray-500 focus:bg-[#4a4a4a73] active:bg-[#525252] hover:bg-[#4a4a4a] transition-all duration-200 ease-in-out"
        />

        <p
          className="absolute top-0 right-0 p-3 cursor-pointer"
          onClick={clickable}
        >
          <X color="#fff" size={30} />
        </p>
      </div>
    </div>
  );
};
