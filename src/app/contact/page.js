import Image from 'next/image';
import React from 'react';
import img from '../../../public/assets/contact.png'

const ContactPage = () => {
    return (
        <div className="container mx-auto my-10 md:my-20">
            <div className="mx-4 md:mx-0 grid grid-cols-1 md:grid-cols-2 gap-20">
                <div>
                    <Image src={img} alt="contact" quality={100} placeholder='blur' />
                </div>
                <div>
                    <h1 className="text-dark text-3xl xl:text-5xl font-[500]">Let's Get In <span className="text-primary">Touch</span></h1>
                    <form>
                        <input className="placeholder:text-dark placeholder:text-sm outline-none border-b w-full p-2 mt-10" placeholder="Enter Your Name" type="text" />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <input className="placeholder:text-dark placeholder:text-sm outline-none border-b w-full p-2 mt-10" placeholder="Phone Number" type="text" />
                            <input className="placeholder:text-dark placeholder:text-sm outline-none border-b w-full p-2 mt-10" placeholder="Email Address" type="email" />
                        </div>

                        <textarea className="placeholder:text-dark placeholder:text-sm outline-none border-b w-full p-2 mt-10" name="" placeholder="Write Here Something" id="" cols="30" rows="3"></textarea>

                        <button className="px-8 py-2 xl:px-12 bg-primary hover:bg-dark ease-in duration-500 text-white rounded-full hover:opacity-90 mt-10">Send Your Message</button>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;