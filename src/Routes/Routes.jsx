import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import { Component, Suspense } from "react";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

import AppDetails from "../Pages/AppDetails/AppDetails";
import AllApps from "../Pages/AllApps/AllApps";
import Loader from "../components/Loader/Loader";
const appsPromise = fetch('/AppsData.json').then(res => res.json())
export const router = createBrowserRouter(
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
                },
                {
                    path: "/app/:id",
                    element: <Suspense fallback={<Loader></Loader>}>
                        <AppDetails appsPromise={appsPromise}></AppDetails>
                    </Suspense>,
                    loader: async ({ params }) => {
                        const res = await fetch('AppsData.json')
                        const apps = await res.json()
                        const searchedApp = apps.find(particularApp => particularApp.id === parseInt(params.id))
                        return searchedApp
                    }



                }



            ]
        }
    ]


)


