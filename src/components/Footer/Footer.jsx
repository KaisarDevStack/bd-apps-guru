import React from 'react';
import logo from "../../assets/logo.png"
import { FaFacebookF, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
            <nav className='flex flex-col justify-center items-start '>
                <div className='flex justify-center items-center gap-3'>
                    <img className='w-8' src={logo} alt="" />
                    <h2>BD-App-GURU</h2>
                </div>
                <p className='w-76'>BD-APPS-GURU is warehouse of different web application vendored by this organization for user demand</p>
            </nav>
            <nav>
                <h6 className="footer-title">Services</h6>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
            <div>
                <h2 className='font-bold border px-4 rounded-r-3xl'>Join Us in</h2>
                <div className='flex gap-4 py-10'>
                    <FaFacebookF />
                    <FaTwitter />
                    <FaWhatsapp />
                    <FaLinkedin />

                </div>
            </div>
        </footer>
    );
};

export default Footer;