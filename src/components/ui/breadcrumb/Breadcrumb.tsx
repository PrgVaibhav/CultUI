import React from "react";
import { Link, useLocation } from "react-router-dom";

export const Breadcrumb: React.FC = () => {
  const location = useLocation();

  // Split the path into an array and remove any empty values
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav className="text-gray-600 my-4">
      <ul className="flex items-center space-x-2">
        {/* Home link */}
        <li title="Go to CultUI homepage">
          <Link to="/" className="text-white ">
            CultUI
          </Link>
        </li>

        {/* Breadcrumb links based on current path */}
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;

          return (
            <React.Fragment key={index}>
              <span className="text-gray-400">/</span>
              {isLast ? (
                <span className="font-semibold text-gray-600 capitalize underline decoration-orange-400 underline-offset-4">
                  {name}
                </span>
              ) : (
                <li>
                  <Link to={routeTo} className="text-white capitalize">
                    {name}
                  </Link>
                </li>
              )}
            </React.Fragment>
          );
        })}
      </ul>
    </nav>
  );
};
