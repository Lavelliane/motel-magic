import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/motel-magic-logo.png";

function Navbar() {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <nav className="lg:hidden relative z-40 bg-primary-red">
        <div className="flex py-6 justify-between items-center px-4">
          <div>
            <h1 className="text-primary-yellow">Motel Magic</h1>
          </div>
          <div className="flex items-center">
            <ul
              id="list"
              className={`${
                menu ? "" : "hidden"
              } p-2 border-r bg-white absolute rounded top-0 left-0 right-0 shadow mt-16 md:mt-16`}
            >
              <li className="flex cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                <Link
                  to="/roomList"
                  className="hover:text-white text-primary-yellow text-lg focus:text-primary-yellow"
                  href="#"
                >
                  Rooms
                </Link>
              </li>
              <li className="flex flex-col cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex justify-center">
                <Link
                  to="/track"
                  className="focus:text-primary-yellow text-lg text-primary-yellow"
                  href="javascript:void(0)"
                >
                  Track Reservation
                </Link>
              </li>
              <li className="flex cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
                <Link
                  to="/support"
                  className="focus:text-primary-yellow text-lg text-primary-yellow"
                  href="javascript:void(0)"
                >
                  Support
                </Link>
              </li>
              <li
                className="flex flex-col cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex justify-center"
                onclick="dropdownHandler(this)"
              >
                <Link
                  to="/reserve"
                  role="button"
                  aria-label="live chat"
                  className="focus:bg-primary-yellow focus:ring-2 focus:ring-offset-2 focus:ring-primary-yellow bg-primary-yellow hover:primary-yellow text-white px-6 py-2 font-semibold rounded focus:outline-none"
                >
                  Reserve
                </Link>
              </li>
            </ul>
            <div className="xl:hidden">
              <img
                id="open"
                className={` ${menu ? "hidden" : ""} close-m-menu`}
                onClick={() => setMenu(!menu)}
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/right_aligned_with_searchbar_Svg1.svg"
                alt="menu"
              />
              <div
                id="close"
                className={` ${menu ? "" : "hidden"} close-m-menu`}
                onClick={() => setMenu(!menu)}
              >
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/right_aligned_with_searchbar_Svg2.svg"
                  alt="cross"
                  className="text-primary-yellow"
                />
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/* ------------NAV MAIN---------- */}
      <nav
        role="navigation"
        aria-label="Main"
        tabIndex="0"
        className="hidden relative z-10 w-full lg:flex justify-between items-center p-10 bg-secondary-red drop-shadow-lg"
      >
        <div className="w-1/6 flex">
          <img src={logo} alt="logo" className="h-12 w-10 mr-3" />
          <a
            tabIndex="0"
            aria-label="we care company logo"
            href="javascript:void(0)"
          >
            <Link to="/" className="font-heading text-4xl text-primary-yellow">
              Motel Magic
            </Link>
          </a>
        </div>
        <div className="w-5/6">
          <div className="flex items-center justify-end">
            <ul className="text-gray-800 lg:space-x-8 flex items-center leading-none">
              <li>
                <Link
                  to="/roomList"
                  className="hover:text-white text-primary-yellow text-lg focus:text-primary-yellow"
                  href="#"
                >
                  Rooms
                </Link>
              </li>
              <li className="ml-4 hover:text-indigo-500 ">
                <Link
                  to="/track"
                  className="focus:text-primary-yellow0 text-lg text-primary-yellow"
                  href="javascript:void(0)"
                >
                  Track Reservation
                </Link>
              </li>
              <li className="ml-4 hover:text-primary-yellow focus:text-primary-yellow text-primary-yellow">
                <Link
                  to="/support"
                  className="focus:text-indigo-500 text-lg"
                  href="javascript:void(0)"
                >
                  Support
                </Link>
              </li>
            </ul>
            <div className="pl-40">
              <Link
                to="/reserve"
                role="button"
                aria-label="live chat"
                className="focus:bg-primary-yellow focus:ring-2 focus:ring-offset-2 focus:ring-primary-yellow bg-primary-yellow hover:primary-yellow text-white px-6 py-2 font-semibold rounded focus:outline-none"
              >
                Reserve
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
