import React from 'react';
import { BsDownload, BsFillHandThumbsUpFill, BsStarFill } from 'react-icons/bs';
import { FaRegThumbsUp } from 'react-icons/fa';
import { TbDownload } from 'react-icons/tb';
import { useLoaderData, } from 'react-router';

const AppDetails = ({ handleInstallApps }) => {

    const searchedFromApps = useLoaderData()

    return (
        <section className='w-10/12 mx-auto'>
            <div className='py-20 '>
                <div className='flex flex-col md:flex-row lg:flex-row  justify-start gap-6'>
                    <img src={searchedFromApps.image} className='max-w-72 p-2 rounded-2xl' alt="" />
                    <div >
                        <div>
                            <h2 className='text-3xl text-[#001931] font-bold'>{searchedFromApps.title}</h2>
                            <p className='text-xl text-[#627382]'>Developed by <span className='text-[#733CE7]'> {searchedFromApps.companyName}</span></p>
                        </div>
                        <div className="divider"></div>
                        <div className='flex flex-col md:flex-row gap-20'>
                            <div className='space-y-4'>
                                <TbDownload className='text-[#00D390] text-4xl font-extrabold' />
                                <p className='text-[#0019312] text-lg'>Downloads</p>
                                <div>
                                    <p className='text-4xl font-extrabold'>{searchedFromApps.size} M</p>
                                </div>
                            </div>
                            <div className='space-y-4'>
                                <BsStarFill className='text-[#FF8811] text-4xl font-extrabold' />
                                <p className='text-[#0019312] text-lg'>Average Ratings</p>
                                <div>
                                    <p className='text-4xl font-extrabold'>{searchedFromApps.ratingAvg}</p>
                                </div>
                            </div>
                            <div className='space-y-4'>
                                <FaRegThumbsUp className='text-[#8F54EE] text-4xl font-extrabold' />
                                <p className='text-[#0019312] text-lg'>Total Reviews</p>
                                <div>
                                    <p className='text-4xl font-extrabold'>{searchedFromApps.reviews}</p>
                                </div>
                            </div>
                        </div>
                        <button className='btn btn-accent my-6 text-white font-normal'
                            onClick={() => handleInstallApps(searchedFromApps.id)}
                        >Install Now ({searchedFromApps.downloads})</button>
                    </div>
                </div>
                <div className="divider"></div>
                <div className='space-y-3'>
                    <h2 className='text-2xl font-bold text-[#001931]'>Ratings</h2>
                    <div className=''>
                        {
                            searchedFromApps.ratings.map(rating =>
                                <div className='flex grow-7 gap-4 justify-center items-center space-y-4'>
                                    <p className='text-xl'>{rating.name}</p>
                                    <progress className="progress progress-error grow-7 w-96 h-6" value={rating.count} max="100"></progress>


                                </div>).sort((b, a) => b.count - a.count)
                        }

                    </div>
                </div>
                <div className="divider"></div>
                <div>
                    <h2 className='text-[#00191] text-xl py-4'>Description</h2>
                    <p className='text-[#627382] leading-7 text-justify'>{searchedFromApps.description}</p>
                </div>
            </div >
        </section>
    );
};

export default AppDetails;