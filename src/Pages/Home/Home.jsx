import React from 'react';
import Hero from '../../components/Hero/Hero';

import Facts from '../../components/Facts/Facts';
import TrendingApps from '../../components/TrendingApps/TrendingApps';
import { useLoaderData } from 'react-router';

const Home = () => {
    const AppsData = useLoaderData()
    console.log(AppsData);
    return (
        <div>
            <Hero></Hero>
            <Facts></Facts>
            <TrendingApps AppsData={AppsData}></TrendingApps>
        </div>
    );
};

export default Home;