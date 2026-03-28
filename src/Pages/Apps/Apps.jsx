import React from 'react';
import { FaDownload, FaStar } from 'react-icons/fa';
import { Link } from 'react-router';

const Apps = ({ app }) => {
    const { title, image, size, ratingAvg } = app

    return (
        <div>
            <figure>
                <img src={image ? image : <p>Image Not available</p>} className='h-42 w-full rounded-sm' alt="" />
            </figure>
            <div className="mt-6">
                <h2 className='font-light text-[#001931] text-left py-3 text-lg'>{title}</h2>
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


