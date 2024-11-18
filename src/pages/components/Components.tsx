import React, { useState } from "react";
import {
  Breadcrumb,
  Button,
  DemoSection,
  TitleDescription,
} from "../../components";
import { COMPONENT_CARD_DATA } from "../../helpers/data/Data";
import { Link } from "react-router-dom";
import { SearchComponent } from "../../components/ui/search-component/SearchComponent";
import { Search } from "lucide-react";
export const Components: React.FC = () => {
  const [showSearchComponent, setShowSearchComponent] = useState(false);
  const toggleSearchComponent = () => {
    setShowSearchComponent((prev) => !prev);
  };

  return (
    <section className="flex flex-col gap-6">
      <Breadcrumb />
      <TitleDescription
        divCn="border-b border-gray-600 pb-4"
        h1Cn="decoration-slate-400 underline underline-offset-4"
        title="Discover Premium UI Components."
        description="Browse through our collection of meticulously crafted UI components.
            From essential buttons to advanced forms, CultUI has everything you
            need to elevate your projects with a single click. Simply explore,
            copy, and customize."
      />

      <div className="flex items-center justify-end sm:justify-between relative">
        <Button
          size="md"
          cn="hidden sm:block bg-slate-800 text-white active:scale-90 duration-200 transition-all"
        >
          📠 Request A Component
        </Button>

        <Button
          size="md"
          cn="flex bg-neutral-900
          text-white active:scale-90 duration-200 transition-all "
          clickable={toggleSearchComponent}
          leftIcon={<Search color="#fff" />}
        >
          <p>Search For your component </p>
        </Button>

        {/* <input
          type="text"
          placeholder="Search your favorite components..."
          className="px-4 py-3 w-full sm:w-5/12 rounded-md shadow-lg bg-[#63636373] text-white placeholder-gray-300 focus:outline-none 
             focus:ring-2 focus:ring-blue-500 focus:bg-[#4a4a4a73] active:bg-[#525252] hover:bg-[#4a4a4a] transition-all duration-200 ease-in-out"
          onClick={toggleSearchComponent}
        /> */}

        {showSearchComponent && (
          <SearchComponent clickable={toggleSearchComponent} />
        )}
      </div>
      <section className="flex flex-wrap items-stretch  gap-4 w-full">
        {COMPONENT_CARD_DATA.map((data) => {
          return (
            <div
              key={data.id}
              className="flex flex-col gap-2 w-full sm:w-[325px]  bg-[#63636373] p-3 rounded-lg shadow-xl  "
            >
              <DemoSection>{data.demoComponent}</DemoSection>
              <Link to={`/components/${data.title}`} className=" ">
                <div className="flex flex-col gap-2 ">
                  <h3
                    className={`title text-2xl font-bold tracking-tight leading-snug decoration-slate-400 underline underline-offset-4 `}
                  >
                    {data.title}
                  </h3>
                  <p className="w-full  flex flex-col gap-4 text-gray-300 text-md  tracking-tight text-justify">
                    {data.description}
                  </p>
                </div>
              </Link>
            </div>
          );
        })}
      </section>
    </section>
  );
};
