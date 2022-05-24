import React from "react";
import Navbar from "./Navbar";
import Room from "../pages/room/Room";
import { useState, useEffect } from "react";
import Footer from "../pages/home/Footer";
import { db } from "../firebase-config";
import {
  collection,
  getDocs,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";

function RoomList() {
  const [rooms, setRooms] = useState([]);
  const roomsCollectionRef = collection(db, "rooms");
  useEffect(() => {
    const q = query(roomsCollectionRef, orderBy("roomPrice"));

    const unsub = onSnapshot(q, (snapshot) =>
      setRooms(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    );
    return unsub;
  }, []);

  return (
    <div>
      <Navbar />
      {rooms.map((room) => {
        if (room.roomAvailability !== 0) {
          return <Room key={room.id} room={room} />;
        }
      })}
      <Footer />
    </div>
  );
}

export default RoomList;
