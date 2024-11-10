import { NavLink } from "react-router-dom";
import logo from "../../../assets/logo.png";
import React from "react";

const ROUTES = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "Components", path: "/components" },
  { id: 3, name: "Updates", path: "/updates" },
];

export const Navbar: React.FC = () => {
  return (
    <nav className="flex items-start justify-start sm:items-center sm:justify-between m-auto">
      <NavLink to={"/"}>
        <div className="logo flex items-center">
          <img
            src={logo}
            alt="image showing different kinds of components mixed together"
            className="w-[70px] h-auto object-contain"
          />
          <p className="block sm:opacity-0 sm:hover:opacity-100 text-xl title tracking-tight font-bold">
            CultUI
          </p>
        </div>
      </NavLink>
      <ul className="hidden sm:flex gap-14 items-center">
        {ROUTES.map((route) => (
          <li key={route.id}>
            <NavLink
              to={route.path}
              className={({ isActive }) =>
                `px-4 py-2 rounded-lg transition-all duration-200 hover:bg-[#63636373] hover:shadow-lg ${
                  isActive ? "bg-[#63636373]" : ""
                }`
              }
            >
              {route.name}
            </NavLink>
          </li>
        ))}
        <li className="bg-black px-4 py-2 hover:bg-[#0a0a0aa8] shadow-lg rounded-lg duration-200 transition-all">
          <a href="*">GitHub</a>
        </li>
      </ul>
    </nav>
  );
};
