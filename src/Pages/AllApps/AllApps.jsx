import { Link, useLoaderData } from "react-router";
import React, { use, useState } from "react";
import Apps from "../Apps/Apps";
import appErrorImg from '../../assets/App-Error.png'


const AllApps = () => {


    const [searchingApps, setSearchingApps] = useState('')
    const AllApps = useLoaderData();


    const remainingAppsAfterSearch = AllApps.filter(app => app.title.toLowerCase().includes(searchingApps.toLowerCase()) || app.title.toLowerCase().includes(searchingApps.toLowerCase()))




    return (
        <div>
            <div className="text-center py-10 space-y-4">
                <h2 className="text-[#001931] font-bold text-5xl">Our All Applications</h2>
                <p className="text-[#627382]text-sm tracking-wide">Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <div className="w-11/12 mx-auto">
                <div className="flex justify-between items-center py-6">
                    <h3>({remainingAppsAfterSearch.length}) Apps Found</h3>
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
                        <input value={searchingApps}
                            onChange={(e) => setSearchingApps(e.target.value)}
                            type="text"
                            className="grow" placeholder="Search" />
                    </label>
                </div>
                <div className="flex flex-col justify-center items-center py-10 gap-3">

                    {(remainingAppsAfterSearch.length) ?
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4  mx-auto py-6'>
                            {
                                remainingAppsAfterSearch.map(app => <Link key={app.id} to={`/app/${app.id}`}><Apps app={app}></Apps ></Link>)
                            }
                        </div> :
                        <div className="flex flex-col justify-center items-center gap-2 space-y-3">
                            <img src={appErrorImg} className="mb-20" alt="" />
                            <h2 className="uppercase text-[#001931] text-5xl">Opps!! App not found</h2>
                            <p className="text-gray-500 text-xl">The App you are requesting is not found on our system.  please try another apps</p>
                            <Link className="bg-linear-0 from-[#632EE3] to-[#9F62F2] text-white p-2 px-4 rounded-lg">Show all apps</Link>
                        </div>}
                </div>

            </div>
        </div >
    );
};

export default AllApps;