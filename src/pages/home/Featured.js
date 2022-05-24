import React from "react";
import { Link } from "react-router-dom";

function Featured() {
  return (
    <div className="lg:px-20 md:px-6 px-4 md:py-12 py-8">
      <div className="lg:flex items-center justify-between">
        <div className="lg:w-1/3">
          <h1 className="text-5xl font-medium leading-9 text-gray-800 text-primary-red font-heading">
            Indoor Interiors
          </h1>
          <p className="text-base leading-6 mt-4 text-gray-600">
            Get inspired by our curated selection of luxiwood interiors. We hope
            get inspired to have luxiwood interior yourself. You’ll find tips
            here where you can buy a lot of cool furniture.
          </p>
          <Link
            to="/roomList"
            aria-label="view catalogue"
            className="focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none mt-6 md:mt-8 text-base font-semibold leading-none text-primary-yellow flex items-center hover:underline"
          >
            View Catalogue
            <svg
              className="ml-2 mt-1"
              width="12"
              height="8"
              viewBox="0 0 12 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.33325 4H10.6666"
                stroke="#1F2937"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8 6.66667L10.6667 4"
                stroke="#1F2937"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8 1.33398L10.6667 4.00065"
                stroke="#1F2937"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
        <div className="lg:w-7/12 lg:mt-0 mt-8">
          <div className="w-full h-full bg-red-200">
            <img
              src="http://cdn.cnn.com/cnnnext/dam/assets/140127103345-peninsula-shanghai-deluxe-mock-up.jpg"
              alt="apartment design"
              className="w-full sm:block hidden"
            />
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 lg:gap-8 gap-6 lg:mt-8 md:mt-6 mt-4">
            <img
              src="https://i.pinimg.com/originals/d7/1f/79/d71f79e1e76221f35f5911488aeb8f0c.jpg"
              className="w-full"
              alt="kitchen"
            />
            <img
              src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
              className="w-full"
              alt="sitting room"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
