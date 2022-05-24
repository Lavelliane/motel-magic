import React, { useState, useEffect } from "react";
import { db } from "../../firebase-config";
import { collection, getDocs } from "firebase/firestore";
import Row from "./Row";
import CreateModal from "./modals/CreateModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRefresh } from "@fortawesome/free-solid-svg-icons";

function Table() {
  const refreshPage = () => {
    window.location.reload();
  };
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [reservations, setReservations] = useState([]);
  const reservationsCollectionRef = collection(db, "reservations");
  useEffect(() => {
    const getReservations = async () => {
      const data = await getDocs(reservationsCollectionRef);
      setReservations(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getReservations();
  }, []);

  return (
    <>
      {reservations && (
        <div>
          <div className="sm:px-6 w-full">
            <div className="px-4 md:px-10 py-4 md:py-7">
              <div className="flex items-center justify-between">
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">
                  Reservations
                </p>
              </div>
            </div>
            <div className="bg-primary-white py-4 md:py-7 px-4 md:px-8 xl:px-10">
              <div className="sm:flex items-center justify-between">
                <div className="flex items-center">
                  <a href="javascript:void(0)">
                    <div className="py-2 px-8 bg-primary-yellow text-indigo-700 rounded-full">
                      <p>All</p>
                    </div>
                  </a>
                </div>
                <button
                  onClick={() => {
                    setCreateModalOpen(true);
                  }}
                  className="mt-4 sm:mt-0 inline-flex items-start justify-start px-6 py-3 bg-primary-red hover:bg-indigo-600 focus:outline-none rounded"
                >
                  <p className="text-sm font-medium leading-none text-primary-white">
                    Add Reservation
                  </p>
                </button>
                <button
                  onClick={refreshPage}
                  className="mt-4 sm:mt-0 inline-flex items-start justify-start px-6 py-3 hover:bg-indigo-600 focus:outline-none rounded text-2xl"
                >
                  <FontAwesomeIcon icon={faRefresh} />
                </button>
              </div>
              <div className="mt-7 overflow-x-auto">
                <table className="w-full">
                  <tbody>
                    {reservations &&
                      reservations.map((reservation) => (
                        <Row key={reservation.id} reservation={reservation} />
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
      {createModalOpen && <CreateModal setOpenModal={setCreateModalOpen} />}
    </>
  );
}

export default Table;
