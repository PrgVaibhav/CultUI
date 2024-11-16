import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootLayout } from "../components";
import { Components, GetStarted, Home, SingleComponents } from "../pages";

export const AllRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <>Error World</>,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "components",
          element: <Components />,
        },
        {
          path: "components/:id",
          element: <SingleComponents />,
        },
        {
          path: "updates",
          element: <>Updates</>,
        },
        {
          path: "get-started",
          element: <GetStarted />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};
