import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { db } from "../../../firebase-config";
import { generateRefCode, calculateTotal } from "../utility/Utility";
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  doc,
  updateDoc,
  getDoc,
} from "firebase/firestore";

function UpdateModal({ setOpenModal, reservation }) {
  const colRef = doc(db, "reservations", reservation.id);
  const roomInitial = useRef();
  const [room, setRoom] = useState(null);
  //PERSONAL DETAILS
  const [firstName, setFirstName] = useState(reservation.firstName);
  const [lastName, setLastName] = useState(reservation.lastName);
  const [email, setEmail] = useState(reservation.email);
  const [phone, setPhone] = useState(reservation.phone);

  //RESERVATION DETAILS
  const [roomType, setRoomType] = useState(reservation.roomType);
  const [numberOfGuests, setNumberOfGuests] = useState(
    reservation.numberOfGuests
  );
  const [startDate, setStartDate] = useState(reservation.startDate.toDate());
  const [endDate, setEndDate] = useState(reservation.endDate.toDate());

  const personalObj = {};
  const reservationObj = {};

  useEffect(() => {
    personalObj.firstName = firstName;
    personalObj.lastName = lastName;
    personalObj.email = email;
    personalObj.phone = phone;
    reservationObj.roomType = roomType;
    reservationObj.numberOfGuests = numberOfGuests;
    reservationObj.startDate = startDate;
    reservationObj.endDate = endDate;
  }, [
    firstName,
    lastName,
    email,
    phone,
    roomType,
    numberOfGuests,
    startDate,
    endDate,
  ]);

  const [data, setData] = useState([]);

  useEffect(async () => {
    const roomsCollectionRef = collection(db, "rooms");
    const q = query(roomsCollectionRef, orderBy("roomPrice"));

    const unsub = await onSnapshot(q, (snapshot) =>
      setData(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    );
    return unsub;
  }, []);

  useEffect(async () => {
    const docRef = doc(db, "rooms", reservationObj.roomType);
    getDoc(docRef).then((doc) => {
      setRoom(doc.data());
    });
  }, []);

  const handleSubmit = async () => {
    await updateDoc(colRef, {
      ...personalObj,
      ...reservationObj,
      totalPayment: calculateTotal(room, reservationObj),
      referenceCode: generateRefCode(),
    });
    setOpenModal(false);
  };

  return (
    <>
      <div id="popup" className="z-50 fixed w-full flex justify-center inset-0">
        <button
          onClick={() => {
            setOpenModal(false);
          }}
        >
          X
        </button>

        <div className="mx-auto container">
          <div className="flex items-center justify-center h-full w-full">
            <div className="bg-primary-white rounded-md shadow fixed overflow-y-auto sm:h-auto w-10/12 md:w-8/12 lg:w-1/2 2xl:w-2/5">
              <div className="bg-gray-100 rounded-tl-md rounded-tr-md px-4 md:px-8 md:py-4 py-7 flex items-center justify-between">
                <p className="text-base font-semibold">
                  Create New Reservation
                </p>
                <button
                  onClick={() => {
                    setOpenModal(false);
                  }}
                  className="focus:outline-none"
                >
                  <svg
                    width={28}
                    height={28}
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21 7L7 21"
                      stroke="#A1A1AA"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7 7L21 21"
                      stroke="#A1A1AA"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <div className="px-4 md:px-10 pt-6 md:pt-12 md:pb-4 pb-7">
                <div>
                  <div className="md:flex items-center lg:ml-24 lg:mt-0 mt-4">
                    <div className="md:w-64">
                      <label
                        className="text-sm leading-none text-gray-800"
                        id="firstName"
                      >
                        First name
                      </label>
                      <input
                        required
                        type="name"
                        tabindex="0"
                        className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                        aria-labelledby="firstName"
                        placeholder="John"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                    </div>
                    <div className="md:w-64 md:ml-12 md:mt-0 mt-4">
                      <label
                        className="text-sm leading-none text-gray-800"
                        id="lastName"
                      >
                        Last name
                      </label>
                      <input
                        required
                        type="name"
                        tabindex="0"
                        className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                        aria-labelledby="lastName"
                        placeholder="Doe"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="md:flex items-center lg:ml-24 mt-8">
                    <div className="md:w-64">
                      <label
                        className="text-sm leading-none text-gray-800"
                        id="emailAddress"
                      >
                        Email address
                      </label>
                      <input
                        required
                        type="email"
                        tabindex="0"
                        className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                        aria-labelledby="emailAddress"
                        placeholder="youremail@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="md:w-64 md:ml-12 md:mt-0 mt-4">
                      <label
                        className="text-sm leading-none text-gray-800"
                        id="phone"
                      >
                        Phone number
                      </label>
                      <input
                        required
                        type="text"
                        pattern="((\+63)|0)\d{10}"
                        tabindex="0"
                        className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                        aria-labelledby="phone"
                        placeholder="123-1234567"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="md:flex items-center lg:ml-24 lg:mt-0 mt-4">
                    <div className="md:w-64">
                      <label
                        className="text-sm leading-none text-gray-800"
                        id="password"
                      >
                        Room Type
                      </label>
                      <div className="relative">
                        <select
                          ref={roomInitial}
                          onChange={(e) => setRoomType(e.target.value)}
                          className="border rounded p-2 mt-3"
                        >
                          {data.map((room) => (
                            <option key={room.id} value={room.id}>
                              {room.roomName}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="md:w-64 md:ml-12 md:mt-0 mt-4">
                      <label
                        className="text-sm leading-none text-gray-800"
                        id="securityCode"
                      >
                        Number of Guests
                      </label>

                      <input
                        required
                        type="number"
                        onChange={(e) => setNumberOfGuests(e.target.value)}
                        value={numberOfGuests}
                        tabindex="0"
                        min="1"
                        max="5"
                        className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                        aria-labelledby="securityCode"
                        placeholder="Enter number of Guests"
                      />
                    </div>
                  </div>
                  <div className="md:flex items-center lg:ml-24 mt-8">
                    <div className="md:w-64">
                      <label
                        className="text-sm leading-none text-gray-800"
                        id="recoverEmail"
                      >
                        Check In Date
                      </label>
                      <DatePicker
                        minDate={new Date()}
                        required
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        className="border font-simple rounded p-2"
                      />
                    </div>
                    <div className="md:w-64 md:ml-12 md:mt-0 mt-4">
                      <label
                        className="text-sm leading-none text-gray-800"
                        id="altPhone"
                      >
                        Check Out Date
                      </label>
                      <DatePicker
                        minDate={new Date()}
                        required
                        selected={endDate}
                        onChange={(date) => setEndDate(date)}
                        className="border font-simple rounded p-2"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-16 lg:flex justify-between pb-16 mb-4"></div>
              <div className="flex items-center justify-between mt-9">
                <button
                  onClick={() => {
                    setOpenModal(false);
                  }}
                  className="px-6 py-3 bg-dark-pink hover:bg-gray-500 m-2 shadow rounded text-sm text-primary-white"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSubmit}
                  className="px-6 py-3 bg-primary-yellow m-2 hover:bg-opacity-80 shadow rounded text-sm text-primary-white"
                >
                  Update User
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UpdateModal;
