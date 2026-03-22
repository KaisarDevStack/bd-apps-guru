import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import { Component } from "react";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const router = createBrowserRouter(
    [
        {
            path: "/",
            Component: Root,
            errorElement: <ErrorPage />,
            children: [
                {
                    index: true,
                    Component: Home,
                    loader: () => fetch(`AppsData.json`)
                }

            ]
        }
    ]


)


export default router