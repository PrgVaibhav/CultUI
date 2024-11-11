import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar/Navbar";

export const RootLayout = () => {
  return (
    <div className="flex flex-col ">
      <header className="container m-auto p-1 sm:p-2">
        <Navbar />
      </header>

      <main className="container m-auto p-4 sm:p-2 flex-1 flex items-center justify-center overflow-hidden">
        <Outlet />
      </main>
    </div>
  );
};
