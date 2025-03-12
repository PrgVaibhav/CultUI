import { X } from "lucide-react";
import { TitleDescription } from "../../layout/TitleDescription/TitleDescription";
import { Input } from "../input/Input";

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
        <Input
          type="text"
          name="search_component"
          cn="w-full"
          placeholder="Search your favorite components..."
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
