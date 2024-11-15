import React from "react";
import { Button } from "../../components";
import { ChevronRight } from "lucide-react";
import { NavLink } from "react-router-dom";

export const Home: React.FunctionComponent = () => {
  return (
    <section className="flex  justify-center min-h-screen  overflow-hidden flex-col gap-8">
      <div className="w-full sm:w-8/12">
        <h1 className="title text-3xl sm:text-5xl font-bold tracking-tight leading-snug">
          The <span className="font-extrabold  ">CultUI</span> Component
          Collection for Modern UI.
        </h1>
      </div>
      <div className="w-full sm:w-8/12 flex flex-col gap-4 text-slate-400 text-md tracking-tight">
        <p>
          Discover a curated library of beautifully crafted, reusable UI
          components designed to elevate your projects. From buttons to forms,
          CultUI delivers everything you need for professional-grade design in
          one place.
        </p>
        <p>
          Save time, streamline development, and enjoy seamless customization
          with CultUI’s component library—crafted for developers and designers
          who demand the best.
        </p>
      </div>
      <div className="flex items-center gap-4">
        <NavLink to={"/get-started"}>
          <Button
            size="sm"
            cn="bg-[#63636373] text-gray-200 text-md tracking-tight font-medium"
            key={1}
            label="Get Started Button"
            rightIcon={<ChevronRight />}
          >
            Get Started
          </Button>
        </NavLink>

        <NavLink to={"/components"}>
          <Button
            size="sm"
            cn="bg-transparent text-gray-200 text-md tracking-tight font-medium"
            key={2}
            label="Get Started Button"
            rightIcon={<ChevronRight />}
          >
            Check Components
          </Button>
        </NavLink>
      </div>
    </section>
  );
};
