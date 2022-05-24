import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/motel-magic-logo.png";
import Stat from "./Stat";
import Table from "./Table";
export default function AdminDashboard() {
  const [show, setShow] = useState(false);
  return (
    <>
      {/* Navigation starts */}

      <nav className="w-full mx-auto bg-primary-white shadow relative z-20">
        <div className="justify-between container px-6 h-16 flex items-center lg:items-stretch mx-auto">
          <div className="flex items-center">
            <div className="mr-10 flex items-center">
              <img src={logo} alt="logo" className="h-12 w-10 mr-3" />
              <h3 className="text-base text-gray-800 font-bold tracking-normal leading-tight ml-3 hidden lg:block">
                Motel Magic
              </h3>
            </div>
            <ul className="pr-32 xl:flex hidden items-center h-full">
              <li className="hover:text-indigo-700 cursor-pointer h-full flex items-center text-sm text-indigo-700 tracking-normal">
                <Link to={"/"}>Website Home</Link>
              </li>
            </ul>
          </div>
          <div className="h-full xl:flex hidden items-center justify-end"></div>
          <div className="visible xl:hidden flex items-center">
            <div>
              <div
                id="menu"
                className="text-gray-800"
                onClick={() => setShow(!show)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-menu-2"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  strokeWidth={1}
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <line x1={4} y1={6} x2={20} y2={6} />
                  <line x1={4} y1={12} x2={20} y2={12} />
                  <line x1={4} y1={18} x2={20} y2={18} />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/* Navigation ends */}
      {/* Page title starts */}
      <div className="bg-primary-red pt-8 pb-16 relative z-10">
        <div className="container px-6 mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between">
          <div className="flex-col flex lg:flex-row items-start lg:items-center text-primary-yellow">
            <div className="flex items-center">
              <img
                className="border-2 shadow border-gray-600 rounded-full mr-3"
                src="https://cdn.tuk.dev/assets/webapp/master_layouts/boxed_layout/boxed_layout2.jpg"
                alt="logo"
              />
              <div>
                <h5 className="text-sm text-white leading-4 mb-1">
                  Jhury Lastre
                </h5>
                <p className="text-xs text-gray-400 leading-4">VP Operations</p>
              </div>
            </div>
            <div className="ml-0 lg:ml-20 my-6 lg:my-0">
              <h4 className="text-2xl font-bold leading-tight text-white mb-2">
                Dashboard
              </h4>
              <p className="flex items-center text-gray-300 text-xs">
                <span>Portal</span>
                <span className="mx-2">&gt;</span>
                <span>Dashboard</span>
                <span className="mx-2">&gt;</span>
                <span>KPIs</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Page title ends */}
      <div className="container px-6 mx-auto">
        {/* Remove class [ h-64 ] when adding a card block */}
        <div className="rounded shadow relative bg-primary-white z-10 -mt-8 mb-8 w-full">
          <Stat className="my-auto" />
        </div>
      </div>
      <Table />
    </>
  );
}
