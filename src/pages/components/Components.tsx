import React from "react";
import { Breadcrumb, TitleDescription } from "../../components";

export const Components: React.FC = () => {
  return (
    <section>
      <Breadcrumb />
      <section>
        <TitleDescription
          divCn="border-b border-gray-600 pb-4"
          h1Cn="decoration-slate-400 underline underline-offset-4"
          title="Discover Premium UI Components."
          description="Browse through our collection of meticulously crafted UI components.
            From essential buttons to advanced forms, CultUI has everything you
            need to elevate your projects with a single click. Simply explore,
            copy, and customize."
        />
      </section>
    </section>
  );
};
