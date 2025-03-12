import { Info } from "lucide-react";
import {
  Breadcrumb,
  CodeSpace,
  SmallMessage,
  TitleDescription,
} from "../../../components";
import { useParams } from "react-router-dom";
import { COMPONENT_CARD_DATA } from "../../../helpers/data/Data";
import React, { useEffect, useState } from "react";
import { ComponentCardData } from "../../../helpers/type/Types";

export const SingleComponents = () => {
  const pathname = useParams();
  const [data, setData] = useState<ComponentCardData | null>(null);

  useEffect(() => {
    const decodedTitle = decodeURIComponent(pathname.id || ""); // Decode URL param
    const filteredData = COMPONENT_CARD_DATA.find(
      (component) => component.title === decodedTitle
    );

    setData(filteredData || null);
  }, [pathname.id]);

  console.log(data);

  return (
    <section className="flex flex-col gap-4 ">
      <Breadcrumb />
      <TitleDescription
        title={data?.componentPageTitle}
        description={data?.componentPageDescription}
        divCn="border-b border-gray-600 pb-4"
        h1Cn="decoration-slate-400 underline underline-offset-4"
      />
      <div>
        <div className="flex flex-col gap-2">
          <h2
            className={`title text-2xl font-bold tracking-tight leading-snug  `}
          >
            Base Code Configuration
          </h2>
          <p className="w-full sm:w-9/12 flex flex-col gap-4 text-slate-400 text-sm sm:text-lg  tracking-tight">
            To ensure seamless integration of this component into your project,
            start by adding the provided base configuration code to your
            codebase. This foundational setup establishes the necessary
            structure, styles, and functionality specific to the component.
          </p>

          <p className="w-full sm:w-9/12 flex flex-col gap-4 text-slate-400 text-sm sm:text-lg  tracking-tight">
            Simply copy the base configuration code into your project, typically
            within a new file or an existing component folder. Once added, you
            can directly use and customize the variations of this component by
            copying their specific code snippets and implementing them in your
            desired location.
          </p>

          <SmallMessage>
            <Info size={25} /> This setup is unique to this component, so be
            sure to include it before using the variations provided below.
          </SmallMessage>
        </div>
        <CodeSpace
          label="Code section area"
          fileName={data?.fileName}
          component={false}
        >
          {data?.configBaseCode || `No Code Available`}
        </CodeSpace>
      </div>

      <div>
        <div>
          <h2
            className={`title text-2xl font-bold tracking-tight leading-snug  `}
          >
            Variations
          </h2>

          <ol className="flex flex-col gap-6">
            {data?.variations.map((variation) => (
              <React.Fragment key={variation.id}>
                <li className="max-w-full w-full mx-auto">
                  <h2 className="title text-2xl font-bold tracking-tight leading-snug">
                    {variation.title}
                  </h2>
                  <p className="text-slate-400 text-sm sm:text-lg tracking-tight">
                    {variation.description}
                  </p>
                  <div>
                    <CodeSpace
                      label=""
                      fileName={variation.fileName}
                      component={variation.component}
                    >
                      {variation.code}
                    </CodeSpace>
                  </div>
                </li>
              </React.Fragment>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};
