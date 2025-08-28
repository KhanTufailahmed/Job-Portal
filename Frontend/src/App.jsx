import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Home from "./components/Home";
import Jobs from "./components/Jobs";
import Browse from "./components/Browse";
import Profile from "./components/Profile";
import Description from "./components/Description";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/jobs",
    element: <Jobs></Jobs>,
  },
  {
    path:"/description/:id",
    element:<Description></Description>
  },
  {
    path: "/browse",
    element: <Browse></Browse>,
  },
  {
    path: "/profile",
    element: <Profile></Profile>,
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={appRouter}></RouterProvider>
    </div>
  );
};

export default App;
