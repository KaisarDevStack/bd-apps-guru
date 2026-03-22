import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import { Component, Suspense } from "react";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AllApps from "../Pages/AllApps/AllApps";

const router = createBrowserRouter(
    [
        {
            path: "/",
            Component: Root,
            errorElement: <ErrorPage />,
            children: [
                {
                    index: true,
                    path: "/",
                    Component: Home,
                    loader: () => fetch(`AppsData.json`)
                },
                {
                    path: 'apps',
                    Component: AllApps,
                    loader: () => fetch('AppsData.json')

                }

            ]
        }
    ]


)


export default router