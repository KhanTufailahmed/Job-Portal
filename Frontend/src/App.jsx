import React from "react";
import { Button } from "./components/ui/button";
import Navbar from "./components/shared/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Home from "./components/Home";
import Footer from "./components/shared/Footer";
import Jobs from "./components/Jobs";
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
    path:"/jobs",
    element:<Jobs></Jobs>
  }
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={appRouter}></RouterProvider>
     
    </div>
  );
};

export default App;
