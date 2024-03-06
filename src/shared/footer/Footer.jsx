import React from 'react';
import { FaLocationArrow, FaRegEnvelopeOpen } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import appStore from '../../../public/assets/app.png';
import playStore from '../../../public/assets/googleplay.png';
import paymentsLogo from '../../../public/assets/payments.png'
import Link from 'next/link';
import Image from 'next/image';
import { FaLocationDot } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div className='bg-[#222222]'>
            <div className='container mx-auto'>
                <div className='md:flex justify-between gap-20 py-12 mx-5 md:mx-0'>
                    <div className='md:w-[35%] flex md:block flex-col justify-center items-center'>
                        <span className='uppercase text-white flex items-center font-[500] gap-2'>
                            <Link href="/">
                                <h1 className="text-4xl md:text-5xl font-semibold uppercase text-secondary">Marcella</h1>
                            </Link>
                        </span>
                        <p className='text-white my-5 text-center md:text-start'>Presently, the company efficiently conveys and
                            disseminates food products across the entire Kingdom market utilizing an extensive fleet of
                            well-equipped vehicles and a proficient sales team. </p>

                        <span className="flex text-white gap-4 mt-2">
                            <FaLocationDot className='mt-0.5 text-2xl' />
                            <p className='text-sm pl-1.5'>House No: 298, Road No: 04, Baridhara DOHS, Dhaka Cantt. Dhaka-1206, Bangladesh.</p>
                        </span>
                        <span className="flex text-white items-center gap-4 mt-2">
                            <FaRegEnvelopeOpen />
                            <p>example@gmail.com</p>
                        </span>
                        <span className="flex text-white items-center gap-4 mt-2">
                            <FaPhoneAlt />
                            <p>01894-961361</p>
                        </span>
                    </div>

                    <div className='md:w-[35%] flex justify-center text-start my-16 md:my-0'>
                        <div className='w-full md:w-1/2'>
                            <h2 className='text-white text-xl font-medium'>Information</h2>
                            <ul className='text-white mt-5 text-sm md:text-base'>
                                <li><Link className='hover:text-secondary' href=''>Terms & Condition</Link></li>
                                <li><Link className='hover:text-secondary' href=''>FAQ</Link></li>
                                <li><Link className='hover:text-secondary' href=''>Refund Policy</Link></li>
                                <li><Link className='hover:text-secondary' href=''>Seller Promises</Link></li>
                                <li><Link className='hover:text-secondary' href=''>Help center</Link></li>
                            </ul>
                        </div>
                        <div className='w-full md:w-1/2 ml-10 md:ml-0'>
                            <h2 className='text-white text-xl font-medium'>Services</h2>
                            <ul className='text-white mt-5 text-sm md:text-base'>
                                <li><Link className='hover:text-secondary' href=''>Payment Method</Link></li>
                                <li><Link className='hover:text-secondary' href=''>Contact Us</Link></li>
                                <li><Link className='hover:text-secondary' href=''>About Us</Link></li>
                                <li><Link className='hover:text-secondary' href=''>Shipping Policy</Link></li>
                                <li><Link className='hover:text-secondary' href=''>Account</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className='md:w-[30%]'>
                        <h1 className='text-white text-center md:text-start mt-12'>Download our mobile app</h1>

                        <div className='flex items-center justify-center md:justify-start gap-4 mt-8'>
                            <Image quality={100} placeholder='blur' src={playStore} alt="playstore" />
                            <Image quality={100} placeholder='blur' src={appStore} alt="appstore" />
                        </div>

                        <Image quality={100} placeholder='blur' className='mt-8' src={paymentsLogo} alt="payments" />
                    </div>
                </div>
                <div className='py-5 border-t border-t-white md:flex items-center justify-between'>
                    <p className='text-white text-center text-sm'>{`© ${new Date().getFullYear()} Copyright Marcella All Rights Reserved.`}</p>
                    <p className='text-white text-sm text-center md:text-end'>Developed By: <Link target='_blank'
                        href="https://www.bengalsoftware.com/" className='text-secondary hover:text-white'>Bengal
                        Software</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Footer;