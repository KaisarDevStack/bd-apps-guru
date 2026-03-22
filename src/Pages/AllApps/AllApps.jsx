import { useLoaderData } from "react-router";
import React from "react";
import Apps from "../Apps/Apps";
const AllApps = () => {
    const AllApps = useLoaderData();
    console.log(AllApps);
    return (
        <div>
            <div className="text-center py-10 space-y-4">
                <h2 className="text-[#001931] font-bold text-5xl">Our All Applications</h2>
                <p className="text-[#627382]text-sm tracking-wide">Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <div className="w-11/12 mx-auto">
                <div className="flex justify-between items-center py-6">
                    <h3>(132)Apps Found</h3>
                    <label className="input">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input type="search" className="grow" placeholder="Search" />
                    </label>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4  mx-auto py-6'>
                    {
                        AllApps.map(app => <Apps key={app.id} app={app}></Apps>)
                    }
                </div>

            </div>
        </div>
    );
};

export default AllApps;