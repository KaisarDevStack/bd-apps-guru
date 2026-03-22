import React from 'react';
import Fact from './Fact';

const Facts = () => {
    const facts = [
        {
            id: 1,
            factsTitle: "Total Downloads",
            factsHead: "29.6M",
            factsText: "21% more than last month"
        },
        {
            id: 2,
            factsTitle: "Total Reviews",
            factsHead: "906K",
            factsText: "46% more than last month"
        },
        {
            id: 1,
            factsTitle: "Active Apps",
            factsHead: "132+",
            factsText: "31 more will Launch"
        },
    ]
    return (
        <div className=' text-center py-10 bg-linear-to-b from-[#632EE3] to-[#9F62F2]'>
            <div className='w-2/3 mx-auto text-white'>
                <h2 className='text-2xl md:text-4xl lg:text-4xl font-bold pb-10'>Trusted by Millions, Built for You</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-4'>
                    {
                        facts.map(fact => <Fact key={fact.id} fact={fact}></Fact>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Facts;