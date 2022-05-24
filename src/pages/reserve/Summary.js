import React from "react";
import { useLocation, Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { useFetch } from "../../hooks/useFetch";
import Footer from "../home/Footer";
import moment from "moment";
import { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase-config";

function Summary() {
  const location = useLocation();
  const { personalDetailsObj, reservationDetailsObj } = location.state;
  // const url = "http://localhost:3000/rooms/" + reservationDetailsObj.roomType;
  // const { data: chosenRoom, isPending, error } = useFetch(url);

  const [chosenRoom, setChosenRoom] = useState(null);

  const docRef = doc(db, "rooms", `${reservationDetailsObj.roomType}`);
  getDoc(docRef).then((doc) => {
    setChosenRoom(doc.data());
  });

  const [refCode, setRefCode] = useState(null);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    const generateRefCode = () => {
      let tmp = [];
      for (let i = 0; i <= 6; i++) {
        tmp.push(Math.floor(Math.random() * 9));
      }
      setRefCode(tmp.join(""));
    };

    generateRefCode();
  }, []);

  const calculateTotal = () => {
    if (chosenRoom) {
      return (
        chosenRoom.roomPrice *
          Math.ceil(
            new moment.duration(
              reservationDetailsObj.endDate - reservationDetailsObj.startDate
            ).asDays()
          ) +
        650
      );
    } else {
      console.log("No chosen room");
    }
  };

  return (
    <>
      <Navbar />
      {console.log(personalDetailsObj, reservationDetailsObj)}
      <div className="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
        <div className="flex justify-start item-start space-y-2 flex-col ">
          <h1 className="text-3xl lg:text-4xl font-medium font-heading text-primary-red leading-7 lg:leading-9  text-gray-800">
            Reservation #{refCode}
          </h1>
          <p className="text-base font-medium leading-6 text-gray-600">
            {new Date().toLocaleDateString()}
          </p>
        </div>
        <div className="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch  w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
          <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
            <div className="flex flex-col justify-start items-start bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
              <p className="text-lg md:text-xl font-semibold leading-6 xl:leading-5 text-gray-800">
                Guest Reservation Details
              </p>
              <div className="mt-4 md:mt-6 flex  flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full ">
                <div className="pb-4 md:pb-8 w-full md:w-40">
                  <img
                    className="w-full hidden md:block"
                    src={chosenRoom && chosenRoom.roomImage[0]}
                    alt="dress"
                  />
                </div>
                <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full  pb-8 space-y-4 md:space-y-0">
                  <div className="w-full flex flex-col justify-start items-start space-y-8">
                    <h3 className="text-xl xl:text-2xl font-semibold leading-6 text-gray-800">
                      {chosenRoom && chosenRoom.roomName}
                    </h3>
                    <div className="flex justify-start items-start flex-col space-y-2">
                      <p className="text-sm leading-none text-gray-800">
                        <span className="text-gray-300">Amenity: </span>{" "}
                        {chosenRoom && chosenRoom.roomAmenityType}
                      </p>
                      <p className="text-sm leading-none text-gray-800">
                        <span className="text-gray-300">
                          Number of Guests:{" "}
                        </span>{" "}
                        {reservationDetailsObj.numberOfGuests}
                      </p>
                      <p className="text-sm leading-none text-gray-800">
                        <span className="text-gray-300">Theme: </span>{" "}
                        {chosenRoom && chosenRoom.roomTheme}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between space-x-8 items-start w-full">
                    <p className="text-base xl:text-lg leading-6 text-gray-800">
                      01
                    </p>
                    <p className="text-base xl:text-lg font-semibold leading-6 text-gray-800">
                      ₱{chosenRoom && chosenRoom.roomPrice}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center md:flex-row flex-col items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
              <div className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 space-y-6   ">
                <h3 className="text-xl font-semibold leading-5 text-gray-800">
                  Summary
                </h3>
                <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                  <div className="flex justify-between  w-full">
                    <p className="text-base leading-4 text-gray-800">
                      Rate per 24 hours ( ₱{chosenRoom && chosenRoom.roomPrice}*{" "}
                      {Math.ceil(
                        new moment.duration(
                          +reservationDetailsObj.endDate -
                            +reservationDetailsObj.startDate
                        ).asDays()
                      )}{" "}
                      days of Stay)
                    </p>

                    <p className="text-base leading-4 text-gray-600">
                      ₱
                      {chosenRoom &&
                        +chosenRoom.roomPrice *
                          Math.ceil(
                            new moment.duration(
                              +reservationDetailsObj.endDate -
                                +reservationDetailsObj.startDate
                            ).asDays()
                          )}
                    </p>
                  </div>

                  <div className="flex justify-between items-center w-full">
                    <p className="text-base leading-4 text-gray-800">
                      Reservation Fee
                    </p>
                    <p className="text-base leading-4 text-gray-600">₱650</p>
                  </div>
                </div>
                <div className="flex justify-between items-center w-full">
                  <p className="text-base font-semibold leading-4 text-gray-800">
                    Total
                  </p>
                  <p className="text-base font-semibold leading-4 text-gray-600">
                    ₱{calculateTotal()}
                    {/* {chosenRoom &&
                      +chosenRoom.roomPrice *
                        Math.round(
                          new moment.duration(
                            +reservationDetailsObj.endDate -
                              +reservationDetailsObj.startDate
                          ).asDays()
                        ) +
                        650} */}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 w-full xl:w-96 flex justify-between items-center md:items-start px-4 py-6 md:p-6 xl:p-8 flex-col ">
            <h3 className="text-xl font-semibold leading-5 text-gray-800"></h3>
            <div className="flex  flex-col md:flex-row xl:flex-col justify-start items-stretch h-full w-full md:space-x-6 lg:space-x-8 xl:space-x-0 ">
              <div className="flex flex-col justify-start items-start flex-shrink-0">
                <div className="flex justify-center  w-full  md:justify-start items-center space-x-4 py-8 border-b border-gray-200">
                  <img
                    src="https://i.ibb.co/5TSg7f6/Rectangle-18.png"
                    alt="avatar"
                  />
                  <div className=" flex justify-start items-start flex-col space-y-2">
                    <p className="text-base font-semibold leading-4 text-left text-gray-800">
                      {personalDetailsObj.firstName +
                        " " +
                        personalDetailsObj.lastName}
                    </p>
                    <p className="text-sm leading-5 text-gray-600">Guest</p>
                  </div>
                </div>

                <div className="flex justify-center  md:justify-start items-center space-x-4 py-4 border-b border-gray-200 w-full">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z"
                      stroke="#1F2937"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3 7L12 13L21 7"
                      stroke="#1F2937"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p className="cursor-pointer text-sm leading-5 text-gray-800">
                    {personalDetailsObj.email}
                  </p>
                </div>
              </div>
              <div className="flex justify-between xl:h-full  items-stretch w-full flex-col mt-6 md:mt-0">
                <div className="flex justify-center md:justify-start xl:flex-col flex-col md:space-x-6 lg:space-x-8 xl:space-x-0 space-y-4 xl:space-y-12 md:space-y-0 md:flex-row  items-center md:items-start ">
                  <div className="flex justify-center md:justify-start  items-center md:items-start flex-col space-y-4 xl:mt-8">
                    <p className="text-base font-semibold leading-4 text-center md:text-left text-gray-800">
                      Phone Number
                    </p>
                    <p className="w-48 lg:w-full xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">
                      {personalDetailsObj.phone}
                    </p>
                  </div>
                </div>
                <div className="flex w-full justify-center items-center md:justify-start md:items-start">
                  <Link
                    to={{
                      pathname: "/payment",
                      state: {
                        personalDetailsObj: personalDetailsObj,
                        reservationDetailsObj: reservationDetailsObj,
                        totalPayment: calculateTotal(),
                        referenceCode: refCode,
                      },
                    }}
                    role="button"
                    aria-label="live chat"
                    className="focus:bg-primary-yellow focus:ring-2 focus:ring-offset-2 focus:ring-primary-yellow bg-primary-yellow hover:primary-yellow text-white px-6 py-2 font-semibold rounded focus:outline-none"
                  >
                    Proceed to Payment
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Summary;
