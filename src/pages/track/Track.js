import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../home/Footer";
import { useState, useEffect } from "react";
import { usePrevious } from "../../hooks/usePrevious";
import { db } from "../../firebase-config";
import { collection, query, where, onSnapshot } from "firebase/firestore";

function Track() {
  const [reservations, setReservations] = useState([]);
  const [emailToTrack, setEmailToTrack] = useState("");

  const roomHash = {
    Agq3gT9ku8OTqpRips70: "Magical Room",
    CQRTLge1MDkGHlebPpPz: "Magical Suite",
    T1tzZElVt0NUrGxUTrrG: "Deluxe Room",
    fBvZzBAdR31Kyr3rhzjB: "Standard Room",
    lkr1OyuCuXGz4oHCcLoj: "Room of Sorcery",
    oefe2BHXulB54rdlavRE: "Wizard's Suite",
  };

  const getTrackRoom = async () => {
    const reservationsCollectionRef = collection(db, "reservations");
    const q = query(
      reservationsCollectionRef,
      where("email", "==", `${emailToTrack}`)
    );

    const unsub = onSnapshot(q, (snapshot) =>
      setReservations(
        snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      )
    );
    return unsub;
  };

  useEffect(() => {
    console.log(reservations);
  }, [reservations]);

  return (
    <div>
      <Navbar />
      <label className="flex items-center justify-center my-16 font-heading font-medium text-2xl text-primary-red">
        Enter the email used for reservation
      </label>
      <div className="flex items-center justify-center my-16">
        <div className="flex border-2 border-primary-red rounded">
          <input
            onChange={(e) => setEmailToTrack(e.target.value)}
            value={emailToTrack}
            type="text"
            className="px-4 py-2 w-80"
            placeholder="Search..."
          />
          <button
            onClick={async () => {
              await getTrackRoom();
            }}
            className="px-4 text-white bg-gray-600 border-l text-primary-yellow font-bold"
          >
            Search
          </button>
        </div>
      </div>
      {reservations &&
        reservations.map((reservation) => (
          <div className="bg-primary-white shadow rounded xl:flex lg:flex w-1/2 my-16 border-2 border-primary-red flex mx-auto">
            <div className="xl:w-2/5 lg:w-2/5 bg-primary-white py-8  border-primary-yellow xl:border-r rounded-tl xl:rounded-bl rounded-tr xl:rounded-tr-none lg:border-r-2 border-b xl:border-b-0 flex justify-center items-center">
              <div className="flex flex-col items-center">
                <div className="h-24 w-24 rounded-full mb-3">
                  <img
                    className="h-full w-full object-cover rounded-full shadow"
                    src="https://cdn5.vectorstock.com/i/thumb-large/45/79/male-avatar-profile-picture-silhouette-light-vector-4684579.jpg"
                    alt
                  />
                </div>
                <p className="mb-2 text-lg font-bold text-gray-900 dark:text-gray-100">
                  {reservation.firstName + " " + reservation.lastName}
                </p>
                <p className="mb-6 text-sm text-gray-700 dark:text-gray-400">
                  {reservation.email}
                </p>
              </div>
            </div>
            <div className="xl:w-3/5 lg:w-3/5 px-6 py-8">
              <div className="flex flex-wrap justify-between">
                <div className="w-2/5 mb-8">
                  <div className="border-b pb-3">
                    <p className="mb-2 text-sm text-gray-700 dark:text-gray-400 font-medium">
                      Status
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-400">
                      Approved
                    </p>
                  </div>
                </div>
                <div className="w-2/5 mb-8">
                  <div className="border-b pb-3">
                    <p className="mb-2 text-sm text-gray-700 dark:text-gray-400 font-medium">
                      Number of Guests
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-400">
                      {reservation.numberOfGuests}
                    </p>
                  </div>
                </div>
                <div className="w-2/5 mb-8">
                  <div className="border-b pb-3">
                    <p className="mb-2 text-sm text-gray-700 dark:text-gray-400 font-medium">
                      Start Date
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-400">
                      {reservation.startDate
                        .toDate()
                        .toLocaleDateString("en-US")}
                    </p>
                  </div>
                </div>
                <div className="w-2/5 mb-8">
                  <div className="border-b pb-3">
                    <p className="mb-2 text-sm text-gray-700 dark:text-gray-400 font-medium">
                      End Date
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-400">
                      {reservation.endDate.toDate().toLocaleDateString("en-US")}
                    </p>
                  </div>
                </div>
                <div className="w-2/5">
                  <div className="border-b pb-3">
                    <p className="mb-2 text-sm text-gray-700 dark:text-gray-400 font-medium">
                      Reference Code
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-400">
                      {reservation.referenceCode}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      <Footer />
    </div>
  );
}

export default Track;
