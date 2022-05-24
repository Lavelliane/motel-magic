import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../home/Footer";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

function Support() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_my55nbl",
        "template_zw5asxc",
        form.current,
        "1F_9ZppApH7Z_8QrU"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <>
      <Navbar />
      <h1 className="text-primary-red text-2xl font-heading w-full max-w-lg items-center justify-center mx-auto my-10">
        Contact Us
      </h1>
      <form
        className="w-full max-w-lg items-center justify-center mx-auto my-10"
        onSubmit={sendEmail}
        ref={form}
      >
        <div className="flex flex-wrap -mx-3 mb-6 ">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              First Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="Jane"
              name="first_name"
              required
            />
            <p className="text-red-500 text-xs italic">
              Please fill out this field.
            </p>
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Last Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Doe"
              name="last_name"
              required
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-password"
            >
              E-mail
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="email"
              type="email"
              name="email"
              placeholder="janedoe@gmail.com"
              required
            />
            <p className="text-gray-600 text-xs italic">
              Please fill out a valid email address
            </p>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-password"
            >
              Message
            </label>
            <textarea
              className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
              id="message"
              name="message"
              placeholder="Type your feedback here."
              required
            ></textarea>
            <p className="text-gray-600 text-xs italic">
              Type your message here
            </p>
          </div>
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3">
            <input
              className="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white bg-primary-yellow font-bold py-2 px-4 rounded cursor-pointer"
              type="submit"
              value="Send"
            />
          </div>
          <div className="md:w-2/3"></div>
        </div>
      </form>
      <Footer />
    </>
  );
}

export default Support;
