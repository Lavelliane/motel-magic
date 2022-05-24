import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { db } from "../../firebase-config";
import {
  collection,
  getDocs,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";

function Form() {
  const roomInitial = useRef();
  const [pathName, setPathName] = useState("/error");
  //PERSONAL DETAILS
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  //RESERVATION DETAILS
  const [roomType, setRoomType] = useState("fBvZzBAdR31Kyr3rhzjB");
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(
    new Date().setDate(new Date().getDate() + 1)
  );

  const personalObj = {};
  const reservationObj = {};

  useEffect(() => {
    function validateEmail(input) {
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (re.test(input)) {
        return true;
      } else {
        return false;
      }
    }
    function validatePhone(input) {
      const re = /^(09|\+639)\d{9}$/;
      if (re.test(input)) {
        return true;
      } else {
        return false;
      }
    }
    personalObj.firstName = firstName;
    personalObj.lastName = lastName;
    personalObj.email = email;
    personalObj.phone = phone;
    reservationObj.roomType = roomType;
    reservationObj.numberOfGuests = numberOfGuests;
    reservationObj.startDate = startDate;
    reservationObj.endDate = endDate;
    if (validateEmail(email) || validatePhone(phone)) {
      setPathName("/checkout");
    }
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

  return (
    <>
      {data && (
        <div className="flex items-center justify-center">
          <div className="xl:w-10/12 w-full px-8">
            <div className="xl:px-24">
              <div className="px-5 py-4 bg-gray-100 rounded-lg flex items-center justify-between mt-7">
                <button className="md:block hidden focus:outline-none focus:ring-2 focus:ring-gray-700 rounded"></button>
              </div>
              <div className="mt-16 lg:flex justify-between border-b border-gray-200 pb-16">
                <div className="w-80">
                  <div className="flex items-center">
                    <h1 className="text-xl font-medium pr-2 leading-5 text-gray-800 font-heading text-primary-red">
                      Personal Information
                    </h1>
                  </div>
                  <p className="mt-4 text-sm leading-5 text-gray-600">
                    Information about the section could go here and a brief
                    description of how this might be used.
                  </p>
                </div>
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
              </div>
              <div className="mt-16 lg:flex justify-between border-b border-gray-200 pb-16 mb-4">
                <div className="w-80">
                  <div className="flex items-center">
                    <h1 className="text-xl font-medium pr-2 leading-5 text-gray-800 font-heading text-primary-red">
                      Reservation
                    </h1>
                  </div>
                  <p className="mt-4 text-sm leading-5 text-gray-600">
                    Information about the section could go here and a brief
                    description of how this might be used.
                  </p>
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
              <Link
                to={{
                  pathname: pathName,
                  state: {
                    personalDetailsObj: personalObj,
                    reservationDetailsObj: reservationObj,
                  },
                }}
                className="mx-2 my-16 bg-primary-yellow transition duration-150 ease-in-out hover:bg-indigo-600 rounded px-8 py-3 text-sm"
              >
                Reserve Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Form;
