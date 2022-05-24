import moment from "moment";
const generateRefCode = () => {
  let tmp = [];
  for (let i = 0; i <= 6; i++) {
    tmp.push(Math.floor(Math.random() * 9));
  }
  return tmp.join("");
};
const calculateTotal = (chosenRoom, reservationDetailsObj) => {
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

export { generateRefCode, calculateTotal };
