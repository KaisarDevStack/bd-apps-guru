import React from 'react';

const Fact = ({ fact }) => {
    const { factsTitle, factsHead, factsText } = fact
    return (
        <div className='space-y-3'>
            <h4 className='text-sm font-extralight tracking-wider'>{factsTitle}</h4>
            <h1 className='lg:text-5xl md:text-4xl text-2xl font-extrabold'>{factsHead}</h1>
            <p className='text-sm'>{factsText}</p>
        </div>
    );
};

export default Fact;