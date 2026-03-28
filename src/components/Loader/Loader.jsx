import React from 'react';
import loaderImg from '../../assets/logo.png'

const Loader = () => {
    return (
        <div>
            <img className='rotate-180 transform-3d transition-all ease-in-out' src={loaderImg} alt="" />
        </div>
    );
};

export default Loader;