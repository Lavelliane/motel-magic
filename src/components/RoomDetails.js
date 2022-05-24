import React from "react";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Footer from "../pages/home/Footer";
import Navbar from "./Navbar";
import { db } from "../firebase-config";
import { doc, getDoc } from "firebase/firestore";

function RoomDetails() {
  const { id } = useParams();
  const [room, setRoom] = useState(null);
  useEffect(async () => {
    const docRef = doc(db, "rooms", `${id}`);
    getDoc(docRef).then((doc) => {
      setRoom(doc.data());
    });
  }, [id]);

  return (
    <div>
      <Navbar />

      {room && (
        <div>
          <div className="dark:bg-gray-900 mb-7">
            <div className="mx-auto container w-full flex items-center md:flex-row flex-col justify-between px-6 lg:px-0">
              <div className="flex flex-col justify-start items-start lg:w-2/5 px-2 lg:px-0">
                <div>
                  <p className="lg:text-sm text-xs text-gray-600 dark:text-gray-300 font-medium leading-none">
                    Motel Magic
                  </p>
                </div>
                <div className="md:mt-3">
                  <p className="text-gray-800 dark:text-white lg:text-4xl text-3xl font-medium leading-9 font-heading text-primary-red">
                    {room.roomName}
                  </p>
                </div>
                <div className="md:mt-3">
                  <p className="lg:text-base text-sm leading-normal text-gray-600 dark:text-gray-300">
                    {room.roomIntroduction}
                  </p>
                </div>
                <div className="grid grid-cols-2 mt-8 gap-y-6">
                  <div>
                    <p className="text-gray-800 dark:text-white text-sm lg:text-base font-medium leading-none">
                      Maximum Capacity:{" "}
                      <span className="font-semibold md:font-medium">
                        {room.roomCapacity}
                      </span>
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-800 dark:text-white text-sm lg:text-base font-medium leading-none">
                      Theme:{" "}
                      <span className="font-semibold md:font-medium">
                        {room.roomTheme} Theme
                      </span>
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-800 dark:text-white text-sm lg:text-base font-medium leading-none">
                      Amenities:{" "}
                      <span className="font-semibold md:font-medium">
                        {room.roomAmenityType}
                      </span>
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-800 dark:text-white text-sm lg:text-base font-medium leading-none">
                      Price per 24 Hours:{" "}
                      <span className="font-semibold md:font-medium">
                        ₱{room.roomPrice}{" "}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center lg:w-2/5 mt-10 md:mt-0">
                <img className="w-full" src={room.roomImage[0]} alt="laptops" />
              </div>
            </div>
            <div className="mx-auto container w-full flex xl:flex-row flex-col justify-between items-start mt-12 px-6 lg:px-0">
              <div className="flex flex-col justify-start items-start xl:w-2/4">
                <div>
                  <h2 className="text-gray-800 dark:text-white lg:text-3xl text-2xl leading-7 font-medium font-heading text-primary-red">
                    The details
                  </h2>
                </div>
                <div className="mt-8">
                  <p className="text-gray-800 dark:text-white lg:text-base text-sm leading-normal">
                    Another writing challenge can be to take the individual
                    sentences in the random paragraph and incorporate a single
                    sentence from that into a new paragraph to create a short
                    story. Unlike the random sentence generator, the sentences
                    from the random paragraph will have some connection to one
                    another so it will be a bit different. You also won't know
                    exactly how many sentences will appear in the random
                    paragraph.Another writing challenge can be to take the
                    individual sentences in the random paragraph and incorporate
                    a single sentence from that into a new paragraph to create a
                    short story. Unlike the random sentence generator, the
                    sentences from the random paragraph will have some
                    connection to one another so it will be a bit different. You
                    also won't know exactly how many sentences will appear in
                    the random paragraph.
                  </p>
                </div>
                <div className="mt-8 w-full">
                  <img
                    className="w-full"
                    src={room.roomImage[1]}
                    alt="office"
                  />
                </div>
                <div className="mt-8 flex justify-start items-start flex-col">
                  <div>
                    <p className="text-gray-800 dark:text-white lg:text-base text-sm font-semibold leading-none">
                      Breakdown of milestones
                    </p>
                  </div>
                  <div className="text-gray-800 dark:text-white mt-4 lg:text-base text-sm leading-normal">
                    <ul>
                      <li className="flex justify-start items-start space-x-1 flex-row">
                        <div>-</div>
                        <div>
                          Mauris ullamcorper neque sed mauris gravida, vel
                          mollis velit molestie.
                        </div>
                      </li>
                      <li className="flex justify-start items-start space-x-1 flex-row">
                        <div>-</div>
                        <div>Donec iaculis erat in vulputate venenatis.</div>
                      </li>
                      <li className="flex justify-start items-start space-x-1 flex-row">
                        <div>-</div>
                        <div>Vestibulum et velit et metus commodo iaculis.</div>
                      </li>
                      <li className="flex justify-start items-start space-x-1 flex-row">
                        <div>-</div>
                        <div>
                          Sed et urna a felis accumsan commodo vel vel nibh.
                        </div>
                      </li>
                      <li className="flex justify-start items-start space-x-1 flex-row">
                        <div>-</div>
                        <div>
                          Praesent sollicitudin nulla non sollicitudin varius.
                        </div>
                      </li>
                      <li className="flex justify-start items-start space-x-1 flex-row">
                        <div>-</div>
                        <div>
                          Integer convallis orci sed diam volutpat feugiat.
                        </div>
                      </li>
                      <li className="flex justify-start items-start space-x-1 flex-row">
                        - Donec posuere arcu non semper maximus.
                      </li>
                    </ul>
                  </div>
                  <div className="mt-8 flex-col justify-start items-start">
                    <div>
                      <img
                        className="w-full"
                        src={room.roomImage[2]}
                        alt="girl"
                      />
                    </div>
                    <div className="mt-8">
                      <p className="text-gray-800 dark:text-white lg:text-base text-sm leading-normal">
                        Another writing challenge can be to take the individual
                        sentences in the random paragraph and incorporate a
                        single sentence from that into a new paragraph to create
                        a short story. Unlike the random sentence generator, the
                        sentences from the random paragraph will have some
                        connection to one another so it will be a bit different.
                        You also won't know exactly how many sentences will
                        appear in the random paragraph.Another writing challenge
                        can be to take the individual sentences in the random
                        paragraph and incorporate a single sentence from that
                        into a new paragraph to create a short story. Unlike the
                        random sentence generator, the sentences from the random
                        paragraph will have some connection to one another so it
                        will be a bit different. You also won't know exactly how
                        many sentences will appear in the random paragraph.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:px-8 px-4 md:px-0 lg:px-16 mt-10 xl:mt-0 h-full xl:w-2/5 w-full flex justify-center items-center bg-gradient-to-l from-indigo-600 to-indigo-700">
                <div className="flex flex-col lg:justify-start justify-center lg:items-start items-center my-10">
                  <div>
                    <p className="md:text-2xl text-lg font-semibold text-center lg:text-left leading-normal text-white">
                      Get This Room now!
                    </p>
                  </div>
                  <div className="mt-8">
                    <p className="md:text-base text-xs text-center lg:text-left leading-normal text-white">
                      Experience great service with wonderful accommodations at
                      Motel Magic. Reserve now. Limited Slots left
                    </p>
                  </div>
                  <div className="mt-8 flex flex-row justify-start items-center space-x-4">
                    <div className>
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
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default RoomDetails;
