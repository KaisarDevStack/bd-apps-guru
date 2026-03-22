import React from 'react';
import { FaDownload, FaStar } from 'react-icons/fa';
import { Link } from 'react-router';

const Apps = ({ app }) => {
    const { id, title, companyName, image, description, size, reviews, ratingAvg, downloads, ratings } = app

    return (

        <div>
            <figure>
                <img src={image} className='rounded-sm' alt="" />
            </figure>
            <div className="mt-6">
                <h2 className='text-sm font-light text-[#001931] text-left py-3 text-lg'>{title}</h2>
                <div className='flex justify-between'>
                    <Link className='flex justify-start items-center text-sm text-[#00D390] border btn btn-xs'><FaDownload className='text-xs' /><span>{size}M</span>
                    </Link>
                    <Link className='flex justify-start items-center text-sm text-[#ff8811] border btn btn-xs'><FaStar className='text-xs' /><span>{ratingAvg}</span>
                    </Link>
                </div>
            </div>
        </div>

    );
};

export default Apps;


