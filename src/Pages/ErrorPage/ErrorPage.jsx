import React from 'react';
import pageErrorImg from '../../assets/error-404.png'
import { Link } from 'react-router';
const ErrorPage = () => {
    return (
        <div className='flex flex-col justify-center items-center space-y-10 py-12'>
            <img src={pageErrorImg} alt="" />
            <h2 className="uppercase text-[#001931] text-5xl">Opps!! Page not found</h2>
            <p className="text-gray-500 text-xl">The App you are requesting is not found on our system.  please try another apps</p>
            <Link className="bg-linear-0 from-[#632EE3] to-[#9F62F2] text-white p-2 px-4 rounded-lg">Go Back</Link>
        </div>
    );
};

export default ErrorPage;