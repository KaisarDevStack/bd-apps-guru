import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import { Component, Suspense } from "react";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AllApps from "../Pages/AllApps/AllApps";
import AppDetails from "../Pages/AppDetails/AppDetails";

const router = createBrowserRouter(
    [
        {
            path: "/",
            Component: Root,
            errorElement: <ErrorPage />,
            hydrateFallbackElement: <div>Loading...</div>,
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
                },
                {
                    path: "apps/:id",
                    Component: AppDetails,
                    loader: async ({ params }) => {
                        const res = await fetch('AppsData.json');
                        const data = await res.json();
                        const searchingId = data.find(app => app.id.toString() === params.id)
                        return searchingId;
                    }

                }



            ]
        }
    ]


)


export default router