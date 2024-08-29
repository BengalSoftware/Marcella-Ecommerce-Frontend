"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";

const HelpForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_z1uv78i",
        "template_3d53uae",
        form.current,
        "W_5bnLSV3PLYd3-r3",
      )
      .then(
        (result) => {
          result.text;
        },
        (error) => {
          console.log(error.text);
        },
      );
    e.target.reset();
    toast.success("Message Was Sent");
  };

  return (
    <div>
      <div className="py-14 grid md:grid-cols-5 gap-4">
        <div className="w-full md:col-span-4">
          <form onSubmit={sendEmail} ref={form} className="w-full">
            <label className="block">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              className="mt-2 w-full p-2 rounded outline-none border placeholder:text-sm"
              type="text"
              placeholder="Name"
              name="name"
              required
            />
            <label className=" block mt-6">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              className="mt-2 w-full p-2 rounded h-28 outline-none border placeholder:text-sm"
              type="text"
              placeholder="Message"
              name="message"
              required
            />
            <button
              className="rounded-md bg-primary px-10 py-3 text-sm font-medium shadow-sm ease-in-out duration-500 hover:bg-dark text-white cursor-pointer block mt-6 m-auto"
              type="submit"
            >
              Send
            </button>
          </form>
        </div>
        <div className="md:col-span-1">
          <a
            target="_blank"
            href="https://facebook.com/adnanhossaincse"
            className="mt-8 bg-[#1877F2] text-white p-2 rounded-md text-sm w-full block text-center hover:opacity-85"
          >
            Facebook
          </a>
          <a
            target="_blank"
            href="https://instagram.com/adnanhjoy"
            class="mt-4 bg-gradient-to-l from-yellow-400 via-pink-500 to-purple-500 text-white hover:opacity-85 p-2 rounded-md text-sm w-full block text-center"
          >
            Instagram
          </a>
          <a
            target="_blank"
            href="https://twitter.com/adnanhjoy"
            className="mt-4 bg-[#1DA1F2] text-white p-2 rounded-md text-sm w-full block text-center hover:opacity-85"
          >
            Twitter
          </a>
        </div>
      </div>
    </div>
  );
};

export default HelpForm;
