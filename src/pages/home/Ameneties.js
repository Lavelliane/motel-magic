import React from "react";

function Ameneties() {
  return (
    <div className="bg-gray-50 py-20 flex flex-col items-center justify-center">
      <div className="xl:w-1/2 w-11/12">
        <h1
          role="heading"
          tabIndex={0}
          className="text-6xl 2xl:leading-10 leading-0 text-center text-primary-red font-heading"
        >
          Different Amenities to Choose From
        </h1>
        <h2
          role="contentinfo"
          tabIndex={0}
          className="text-base leading-normal text-center text-gray-600 mt-5"
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          Lorem Ipsum is simply dummy text of the printing
        </h2>
      </div>
      <div className="2xl:px-20 lg:px-12 px-4 flex flex-wrap items-start mt-4">
        <div className="mt-24">
          <div className="flex items-end ">
            <img
              tabIndex={0}
              src="https://images.pexels.com/photos/835240/pexels-photo-835240.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="girl with blue background"
              className="w-20 h-20 rounded-lg mr-6"
            />
            <img
              tabIndex={0}
              src="https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="guy winking"
              className="w-48 h-36 rounded-lg"
            />
          </div>
          <div className="flex items-center justify-end my-6">
            <img
              tabIndex={0}
              src="https://media-cdn.tripadvisor.com/media/photo-s/12/05/cc/79/bar.jpg"
              alt="guy smiling"
            />
          </div>
          <div className="flex items-start">
            <img
              tabIndex={0}
              src="https://images.pexels.com/photos/4947417/pexels-photo-4947417.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="girl with bluw background"
              className="w-48 h-48 rounded-lg"
            />
            <img
              tabIndex={0}
              src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="guy with glasses"
              className="w-20 h-20 rounded-lg ml-6 flex-shrink-0 object-cover object-fit"
            />
          </div>
        </div>
        <div className="ml-6 mt-32">
          <img
            tabIndex={0}
            src="https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="w-72 h-80 rounded-lg"
            alt="guy with sunglasses"
          />
          <div className="flex items-start mt-6">
            <img
              tabIndex={0}
              src="https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="girl  laughing"
              className="w-48 h-48 rounded-lg"
            />
            <img
              tabIndex={0}
              src="https://images.pexels.com/photos/277572/pexels-photo-277572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="guy with glasses"
              className="w-20 h-20 rounded-lg ml-6 object-cover object-fit"
            />
          </div>
        </div>
        <div className="mt-14 ml-6">
          <div className="lg:flex ">
            <div>
              <img
                tabIndex={0}
                src="https://images.pexels.com/photos/221457/pexels-photo-221457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="group of friends"
                className="w-96 h-72 rounded-lg object-center object-fit"
              />
            </div>
            <div>
              <div className="flex ml-6">
                <img
                  tabIndex={0}
                  src="https://images.pexels.com/photos/6685/wood-light-flowers-hotel.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  className="w-20 h-20 rounded-lg mt-14"
                  alt="man"
                />
                <img
                  tabIndex={0}
                  src="https://images.pexels.com/photos/1334605/pexels-photo-1334605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  className="w-20 h-24 rounded-lg ml-6"
                  alt="woman"
                />
              </div>
              <img
                tabIndex={0}
                src="https://images.pexels.com/photos/744780/pexels-photo-744780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="boy with blonde hair"
                className="ml-6 mt-6 w-48 h-32 rounded-lg"
              />
            </div>
          </div>
          <div className="mt-6 flex">
            <img
              tabIndex={0}
              className="w-48 h-48 rounded-lg"
              src="https://images.pexels.com/photos/776538/pexels-photo-776538.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="young girl with red hair"
            />
            <img
              tabIndex={0}
              className="w-72 h-56 rounded-lg ml-6"
              src="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="young girl with red hair"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ameneties;
