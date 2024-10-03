import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import "./index.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu"
import Grocery from "./components/Grocery";
import UserContext from "./utils/UserContext"
import { useState } from "react";


const Grocery = lazy(() => import("./components/Grocery"))  

const AppLayout = () => {
  const [userName, setuserName] = useState("ashwin");
  return (
    <UserContext.Provider value={{loggedInUser : userName, setuserName}}>
    <div className="app">
      <Header />
      <Outlet />
    </div>
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <AppLayout />,
    children:[
      {
        path:"/",
        element: <Body />,
      },
      {
        path:"/about",
        element: <About/>,
      },
      {
        path:"/contact",
        element: <Contact />,
      },
      {
        path:"/grocery",
        element: <Suspense fallback={<h1>....LOADING</h1>}><Grocery /></Suspense>,
      },
      {
        path:"/restaurant/:resID",
        element: <RestaurantMenu />,
      },
    ],
      errorElement:<Error/>
  },
 
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
