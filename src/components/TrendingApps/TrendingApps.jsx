import React from 'react';
import Apps from '../../Pages/Apps/Apps';
import { Link } from 'react-router';

const TrendingApps = ({ AppsData }) => {
    return (
        <div className='py-10 grid grid-cols-1 justify-items-center  '>
            <div className='text-center space-y-3'>
                <h2 className='text-3xl font-bold'>Trending Apps</h2>
                <p className='text-gray-500 text-sm tracking-wide mb-8'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-2/3 mx-auto'>
                {AppsData.map(app => <Apps key={app.id} app={app}></Apps>).slice(01, 09)}
            </div>
            <div className='flex justify-center items-center py-10'>
                <Link className='btn btn-md bg-linear-to-b from-[#632EE3] to-[#9F62F2] text-white font-sm font-normal' to='/apps'>Show All</Link>
            </div>


        </div>
    );
};

export default TrendingApps;