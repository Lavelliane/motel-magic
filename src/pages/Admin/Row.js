import { useState, useEffect } from "react";
import { db } from "../../firebase-config";
import { deleteDoc, doc, updateDoc, getDoc } from "firebase/firestore";
import CreateModal from "./modals/CreateModal";
import UpdateModal from "./modals/UpdateModal";
function Row({ reservation }) {
  const [roomAvailability, setRoomAvailability] = useState(null);
  const [updateModalOpen, setUpdateModalOpen] = useState(false);
  const updateRoom = async () => {
    const roomDoc = doc(db, "rooms", reservation.roomType);
    const newFields = { roomAvailability: roomAvailability + 1 };
    await updateDoc(roomDoc, newFields);
  };

  useEffect(async () => {
    const docRef = doc(db, "rooms", reservation.roomType);
    getDoc(docRef).then((doc) => {
      setRoomAvailability(doc.data().roomAvailability);
    });
  }, []);
  const deleteReservation = async (id) => {
    const reservationDoc = doc(db, "reservations", id);
    await deleteDoc(reservationDoc);
  };
  const handleDelete = async (id) => {
    deleteReservation(id);
    updateRoom();
  };
  return (
    <>
      <tr className="h-16 border border-gray-100 rounded">
        <td>
          <div className="ml-5"></div>
        </td>
        <td className>
          <div className="flex items-center pl-5">
            <p className="text-base font-medium leading-none text-gray-700 mr-2">
              {reservation.firstName + " " + reservation.lastName}
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M6.66669 9.33342C6.88394 9.55515 7.14325 9.73131 7.42944 9.85156C7.71562 9.97182 8.02293 10.0338 8.33335 10.0338C8.64378 10.0338 8.95108 9.97182 9.23727 9.85156C9.52345 9.73131 9.78277 9.55515 10 9.33342L12.6667 6.66676C13.1087 6.22473 13.357 5.62521 13.357 5.00009C13.357 4.37497 13.1087 3.77545 12.6667 3.33342C12.2247 2.89139 11.6251 2.64307 11 2.64307C10.3749 2.64307 9.77538 2.89139 9.33335 3.33342L9.00002 3.66676"
                stroke="#3B82F6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.33336 6.66665C9.11611 6.44492 8.8568 6.26876 8.57061 6.14851C8.28442 6.02825 7.97712 5.96631 7.66669 5.96631C7.35627 5.96631 7.04897 6.02825 6.76278 6.14851C6.47659 6.26876 6.21728 6.44492 6.00003 6.66665L3.33336 9.33332C2.89133 9.77534 2.64301 10.3749 2.64301 11C2.64301 11.6251 2.89133 12.2246 3.33336 12.6666C3.77539 13.1087 4.37491 13.357 5.00003 13.357C5.62515 13.357 6.22467 13.1087 6.66669 12.6666L7.00003 12.3333"
                stroke="#3B82F6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </td>
        <td className="pl-24">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={20}
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M9.16667 2.5L16.6667 10C17.0911 10.4745 17.0911 11.1922 16.6667 11.6667L11.6667 16.6667C11.1922 17.0911 10.4745 17.0911 10 16.6667L2.5 9.16667V5.83333C2.5 3.99238 3.99238 2.5 5.83333 2.5H9.16667"
                stroke="#52525B"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle
                cx="7.50004"
                cy="7.49967"
                r="1.66667"
                stroke="#52525B"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="text-sm leading-none text-gray-600 ml-2">
              {reservation.roomType}
            </p>
          </div>
        </td>
        <td className="pl-5">
          <div className="flex items-center">
            <p className="text-sm leading-none text-gray-600 ml-2">
              {reservation.startDate.toDate().toLocaleDateString("en-US")}
            </p>
          </div>
        </td>
        <td className="pl-5">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={20}
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M3.33331 17.4998V6.6665C3.33331 6.00346 3.59671 5.36758 4.06555 4.89874C4.53439 4.4299 5.17027 4.1665 5.83331 4.1665H14.1666C14.8297 4.1665 15.4656 4.4299 15.9344 4.89874C16.4033 5.36758 16.6666 6.00346 16.6666 6.6665V11.6665C16.6666 12.3295 16.4033 12.9654 15.9344 13.4343C15.4656 13.9031 14.8297 14.1665 14.1666 14.1665H6.66665L3.33331 17.4998Z"
                stroke="#52525B"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10 9.1665V9.17484"
                stroke="#52525B"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6.66669 9.1665V9.17484"
                stroke="#52525B"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13.3333 9.1665V9.17484"
                stroke="#52525B"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="text-sm leading-none text-gray-600 ml-2">
              {reservation.referenceCode}
            </p>
          </div>
        </td>
        <td className="pl-5">
          <div className="flex items-center">
            {new Date(Date.now()).toLocaleDateString("en-US") ===
            reservation.endDate.toDate().toLocaleDateString("en-US") ? (
              <p className="text-sm leading-none text-lipstick-red ml-2">
                {reservation.endDate.toDate().toLocaleDateString("en-US")}
              </p>
            ) : (
              <p className="text-sm leading-none text-gray-600 ml-2">
                {reservation.endDate.toDate().toLocaleDateString("en-US")}
              </p>
            )}
          </div>
        </td>
        <td className="pl-5">
          <button className="py-3 px-3 text-sm focus:outline-none leading-none text-red-500 bg-red-100 hover:bg-red-200 rounded">
            {reservation.email}
          </button>
        </td>
        <td className="pl-4">
          <button
            onClick={() => {
              setUpdateModalOpen(true);
            }}
            className="text-sm font-semibold leading-none text-primary-white py-3 px-5 bg-aqua-green rounded hover:bg-gray-200 focus:outline-none"
          >
            Edit
          </button>
        </td>
        <td className="pl-4">
          <button
            onClick={() => {
              handleDelete(reservation.id);
            }}
            className="text-sm font-semibold leading-none text-primary-white py-3 px-5 bg-dark-pink rounded hover:bg-gray-200 focus:outline-none"
          >
            Delete
          </button>
        </td>
      </tr>
      {updateModalOpen && (
        <UpdateModal
          setOpenModal={setUpdateModalOpen}
          reservation={reservation}
        />
      )}
    </>
  );
}
export default Row;
