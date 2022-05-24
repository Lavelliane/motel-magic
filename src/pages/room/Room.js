import React from "react";
import { Link } from "react-router-dom";

function Room({ room }) {
  return (
    <>
      <div className="w-full py-10">
        <div className="container mx-auto px-6 flex items-start justify-center">
          <Link to={`/rooms/${room.id}`}>
            <div className="w-full border-2 cursor-pointer border-secondary-red hover:bg-primary-red hover:text-primary-yellow transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
              {/* Card is full width. Use in 12 col grid for best view. */}
              {/* Card code block start */}
              <div className="flex flex-col lg:flex-row mx-auto bg-white dark:bg-gray-800 shadow rounded">
                <div className="w-full lg:w-1/3 px-12 flex flex-col items-center py-10">
                  <img
                    src={room.roomImage[0]}
                    alt=""
                    className="max-w-full min-w-full "
                  />
                </div>
                <div className="w-full lg:w-1/3 px-12 border-t border-b lg:border-t-0 lg:border-b-0 lg:border-l lg:border-r border-primary-yellow flex flex-col items-center py-10">
                  <div className="mb-3 w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center cursor-pointer text-indigo-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-stack"
                      width={48}
                      height={48}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <polyline points="12 4 4 8 12 12 20 8 12 4" />
                      <polyline points="4 12 12 16 20 12" />
                      <polyline points="4 16 12 20 20 16" />
                    </svg>
                  </div>
                  <h2 className="text-gray-800 dark:text-gray-100 text-xl tracking-normal text-center font-medium mb-1">
                    {room.roomName}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-100 text-sm tracking-normal font-normal mb-3 text-center">
                    {room.roomAmenityType}
                  </p>
                  <p className="text-gray-600 dark:text-gray-100 text-sm tracking-normal font-normal mb-8 text-center w-10/12">
                    {room.roomIntroduction}
                  </p>
                  <div className="mt-2 flex items-start">
                    {room.roomAmenities.length !== 0 &&
                      room.roomAmenities.map((amenity) => (
                        <div className="bg-secondary-red text-primary-white dark:text-gray-100 dark:bg-gray-700 rounded text-xs leading-3 py-2 px-3 mx-1">
                          {amenity}
                        </div>
                      ))}
                  </div>
                </div>
                <div className="w-full lg:w-1/3 flex-col flex justify-center items-center px-12 py-8">
                  <h2 className="text-center text-2xl text-gray-800 dark:text-gray-100 font-medium tracking-normal">
                    ₱{room.roomPrice}
                  </h2>
                  <h2 className="text-center text-sm text-gray-600 dark:text-gray-100 font-normal mt-2 mb-4 tracking-normal">
                    per 24 Hours
                  </h2>
                  <h2 className="text-center text-2xl text-gray-800 dark:text-gray-100 font-medium tracking-normal">
                    {room.roomCapacity}
                  </h2>
                  <h2 className="text-center text-sm text-gray-600 dark:text-gray-100 font-normal mt-2 mb-4 tracking-normal">
                    Maximum Capacity
                  </h2>
                  <h2 className="text-center text-2xl text-gray-800 dark:text-gray-100 font-medium tracking-normal">
                    {room.roomTheme}
                  </h2>
                  <h2 className="text-center text-sm text-gray-600 dark:text-gray-100 font-normal mt-2 mb-4 tracking-normal">
                    Theme
                  </h2>
                  <h2 className="text-center text-2xl text-gray-800 dark:text-gray-100 font-medium tracking-normal">
                    95%
                  </h2>
                  <h2 className="text-center text-sm text-gray-600 dark:text-gray-100 font-normal mt-2 mb-4 tracking-normal">
                    Satisfaction Rate
                  </h2>
                  <div className="flex items-center text-primary-yellow">
                    <svg
                      className="cursor-pointer w-4 mr-1 icon icon-tabler icon-tabler-star"
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" fill="none" d="M0 0h24v24H0z" />
                      <path
                        fill="currentColor"
                        d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z"
                      />
                    </svg>
                    <svg
                      className="cursor-pointer w-4 mr-1 text-yellow-400 icon icon-tabler icon-tabler-star"
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" fill="none" d="M0 0h24v24H0z" />
                      <path
                        fill="currentColor"
                        d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z"
                      />
                    </svg>
                    <svg
                      className="cursor-pointer w-4 mr-1 text-yellow-400 icon icon-tabler icon-tabler-star"
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" fill="none" d="M0 0h24v24H0z" />
                      <path
                        fill="currentColor"
                        d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z"
                      />
                    </svg>
                    <svg
                      className="cursor-pointer w-4 mr-1 text-yellow-400 icon icon-tabler icon-tabler-star"
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" fill="none" d="M0 0h24v24H0z" />
                      <path
                        fill="currentColor"
                        d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z"
                      />
                    </svg>
                    <svg
                      className="cursor-pointer w-4 text-gray-200 dark:text-gray-400 icon icon-tabler icon-tabler-star"
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" fill="none" d="M0 0h24v24H0z" />
                      <path
                        fill="currentColor"
                        d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              {/* Card code block end */}
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Room;
