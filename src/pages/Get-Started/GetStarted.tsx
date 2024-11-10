import React from "react";
import { Breadcrumb, TitleDescription } from "../../components";

export const GetStarted: React.FC = () => {
  return (
    <div className="flex flex-col gap-4">
      <Breadcrumb />
      <section className="flex flex-col gap-8">
        <TitleDescription
          title="Get Started with CultUI."
          description=" Welcome to CultUI’s Get Started page! CultUI is designed to help you
            easily integrate beautifully crafted UI components into your
            projects. Whether you're building a new app or enhancing an existing
            one, simply copy the code snippets we provide and start building in
            seconds."
          divCn="border-b border-gray-600 pb-4"
          h1Cn="decoration-slate-400 underline underline-offset-4"
        />
        <TitleDescription
          title="What You’ll Need."
          description=" To use CultUI components, you’ll need the following tools in your
            development environment:"
          h1Cn="decoration-slate-400 underline underline-offset-4"
        />

        <ol className="list-disc flex flex-col gap-4">
          <li className="text-slate-400">
            <b className="text-xl text-white">React</b>
            <br /> CultUI components are built using React, so make sure you
            have a React project set up.{" "}
            <a
              href="https://react.dev/"
              className="decoration-orange-400 underline underline-offset-4"
              target="_blank"
            >
              Learn more about React here.
            </a>
          </li>
          <li className="text-slate-400">
            <b className="text-xl text-white">TailwindCSS</b> <br /> Our
            components are styled with TailwindCSS for flexibility and
            customization. Ensure TailwindCSS is configured in your project to
            style CultUI components effectively.{" "}
            <a
              href="https://tailwindcss.com/"
              className="decoration-orange-400 underline underline-offset-4"
              target="_blank"
            >
              Learn more about TailwindCSS here.
            </a>
          </li>
          <li className="text-slate-400">
            <b className="text-xl text-white">TypeScript</b> <br /> While
            optional, TypeScript enhances CultUI components with type safety,
            making them easier to integrate and customize.{" "}
            <a
              href="https://www.typescriptlang.org/"
              className="decoration-orange-400 underline underline-offset-4"
              target="_blank"
            >
              Learn more about TypeScript here.
            </a>
          </li>
        </ol>
      </section>
    </div>
  );
};
