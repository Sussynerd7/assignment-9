import React from 'react';
import { createBrowserRouter } from "react-router";
import Homelayout from "../Homelayout/Homelayout";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Authlayout from "../pages/Authlayout";
import Info from "../pages/Info";
import Myprofile from "../pages/Myprofile";
import Preset from "../pages/Preset";
import Extra from "../pages/Extra";
import Error from "../components/Error";

const router = createBrowserRouter([
    {
        path:"/",
        errorElement:<Error></Error>,
        element:<Homelayout></Homelayout>,
        children:[
            {
                index:true,
                loader: () => fetch("/info.json"),
                hydrateFallbackElement:<span className="loading loading-bars w-[390px]"></span>,
                errorElement:<Error></Error>,
                element:<Home></Home>
            },
            {
                path:"/info/:id",
                loader: () => fetch("/info.json"),
                hydrateFallbackElement:<span className="loading loading-bars w-[390px]"></span>,
                errorElement:<Error></Error>,
                element:<Info></Info>
            },
            {
                path:"/myprofile",
                loader: () => fetch("/info.json"),
                hydrateFallbackElement:<span className="loading loading-bars w-[390px]"></span>,
                errorElement:<Error></Error>,
                element:<Myprofile></Myprofile>
            },
            {
                path:"/extra",
                element:<Extra></Extra>
            }
        ]
    },
    {
        path: "/auth",
        element: <Authlayout></Authlayout>,
        children: [
            {
                path: "/auth/login",
                element: <Login></Login>,
            },
            {
                path: "/auth/register",
                element: <Register></Register>,
            },
            {
                path: "/auth/preset",
                element: <Preset></Preset>
            },
        ],
    },
]);


export default router;