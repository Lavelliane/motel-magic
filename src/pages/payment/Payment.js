import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../home/Footer";
import { Link } from "react-router-dom";
import { collection, addDoc, doc, updateDoc, getDoc } from "firebase/firestore";
import { db } from "../../firebase-config";

import {
  CardHolder,
  CardNumber,
  CardSecurityCode,
  ValidThruMonth,
  ValidThruYear,
} from "reactjs-credit-card/form";
import Card from "reactjs-credit-card/card";
import { useCardForm } from "reactjs-credit-card";
import { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";

function Payment() {
  const location = useLocation();
  const history = useHistory();
  const [roomAvailability, setRoomAvailability] = useState(null);
  const {
    personalDetailsObj,
    reservationDetailsObj,
    totalPayment,
    referenceCode,
  } = location.state;
  const getFormData = useCardForm();
  const [numberValid, setNumberValid] = useState(true);
  const colRef = collection(db, "reservations");

  const updateRoom = async () => {
    const roomDoc = doc(db, "rooms", reservationDetailsObj.roomType);
    const newFields = { roomAvailability: roomAvailability - 1 };
    await updateDoc(roomDoc, newFields);
  };

  useEffect(async () => {
    const docRef = doc(db, "rooms", reservationDetailsObj.roomType);
    getDoc(docRef).then((doc) => {
      setRoomAvailability(doc.data().roomAvailability);
    });
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    const [data, isValid] = getFormData();

    console.log(data, isValid); //log all form data and verification results

    if (!data.number.isValid) setNumberValid(false); //we'll set a hook to show a error if card number is invalid
    //check the general verification result and alert with special verification result
    if (!isValid)
      alert(
        `${data.holder.value} form data values invalid :) and holder also ${
          data.holder.isValid ? "valid" : "invalid"
        }`
      );
    if (isValid) {
      addDoc(colRef, {
        ...personalDetailsObj,
        ...reservationDetailsObj,
        totalPayment: totalPayment,
        referenceCode: referenceCode,
      });
      updateRoom();
      history.push("/success");
    }
  }
  function handleFocus() {
    setNumberValid(true);
  }

  return (
    <div>
      <Navbar />

      {/* //----------------------------------------------------------------- */}
      <>
        <div className="bg-indigo-50">
          <div className="xl:px-20 md:px-10 sm:px-6 px-4 md:py-12 py-9 2xl:mx-auto 2xl:container md:flex items-center justify-center">
            <div className=" md:hidden sm:mb-8 mb-6">
              <svg
                width={191}
                height={34}
                viewBox="0 0 191 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M61.8409 17.2727C61.8409 11.75 58.6023 8.30682 54.1364 8.30682C49.6705 8.30682 46.4318 11.75 46.4318 17.2727C46.4318 22.7955 49.6705 26.2386 54.1364 26.2386C58.6023 26.2386 61.8409 22.7955 61.8409 17.2727ZM59.7955 17.2727C59.7955 21.8068 57.3068 24.2614 54.1364 24.2614C50.9659 24.2614 48.4773 21.8068 48.4773 17.2727C48.4773 12.7386 50.9659 10.2841 54.1364 10.2841C57.3068 10.2841 59.7955 12.7386 59.7955 17.2727ZM75.8267 12.9091H73.6449L70.0312 23.3409H69.8949L66.2812 12.9091H64.0994L68.9403 26H70.9858L75.8267 12.9091ZM83.331 26.2727C86.8764 26.2727 89.2628 23.5795 89.2628 19.5227C89.2628 15.4318 86.8764 12.7386 83.331 12.7386C79.7855 12.7386 77.3991 15.4318 77.3991 19.5227C77.3991 23.5795 79.7855 26.2727 83.331 26.2727ZM83.331 24.4659C80.6378 24.4659 79.4105 22.1477 79.4105 19.5227C79.4105 16.8977 80.6378 14.5455 83.331 14.5455C86.0241 14.5455 87.2514 16.8977 87.2514 19.5227C87.2514 22.1477 86.0241 24.4659 83.331 24.4659ZM94.3445 18.125C94.3445 15.8409 95.7592 14.5455 97.6854 14.5455C99.5518 14.5455 100.685 15.7642 100.685 17.8182V26H102.697V17.6818C102.697 14.3409 100.915 12.7386 98.2649 12.7386C96.2876 12.7386 95.0604 13.625 94.4467 14.9545H94.2763V12.9091H92.3331V26H94.3445V18.125ZM106.645 26H108.759V19.1818H112.577C112.73 19.1818 112.875 19.1818 113.02 19.1733L116.702 26H119.156L115.21 18.7898C117.435 18.0312 118.474 16.2159 118.474 13.8977C118.474 10.8125 116.634 8.54545 112.543 8.54545H106.645V26ZM108.759 17.2727V10.4205H112.474C115.304 10.4205 116.395 11.8011 116.395 13.8977C116.395 15.9943 115.304 17.2727 112.509 17.2727H108.759ZM129.974 20.6477C129.974 23.1023 128.099 24.2273 126.599 24.2273C124.928 24.2273 123.735 23 123.735 21.0909V12.9091H121.724V21.2273C121.724 24.5682 123.496 26.1705 125.951 26.1705C127.928 26.1705 129.224 25.1136 129.837 23.7841H129.974V26H131.985V12.9091H129.974V20.6477ZM141.158 26.2727C143.817 26.2727 145.76 24.9432 146.374 22.9659L144.43 22.4205C143.919 23.7841 142.734 24.4659 141.158 24.4659C138.797 24.4659 137.169 22.9403 137.075 20.1364H146.578V19.2841C146.578 14.4091 143.68 12.7386 140.953 12.7386C137.408 12.7386 135.055 15.5341 135.055 19.5568C135.055 23.5795 137.374 26.2727 141.158 26.2727ZM137.075 18.3977C137.212 16.3608 138.652 14.5455 140.953 14.5455C143.135 14.5455 144.533 16.1818 144.533 18.3977H137.075ZM154.581 26.2727C157.104 26.2727 157.956 24.7045 158.399 23.9886H158.638V26H160.581V8.54545H158.57V14.9886H158.399C157.956 14.3068 157.172 12.7386 154.615 12.7386C151.308 12.7386 149.024 15.3636 149.024 19.4886C149.024 23.6477 151.308 26.2727 154.581 26.2727ZM154.854 24.4659C152.331 24.4659 151.036 22.25 151.036 19.4545C151.036 16.6932 152.297 14.5455 154.854 14.5455C157.308 14.5455 158.604 16.5227 158.604 19.4545C158.604 22.4205 157.274 24.4659 154.854 24.4659ZM170.033 26.2727C172.692 26.2727 174.635 24.9432 175.249 22.9659L173.305 22.4205C172.794 23.7841 171.609 24.4659 170.033 24.4659C167.672 24.4659 166.044 22.9403 165.95 20.1364H175.453V19.2841C175.453 14.4091 172.555 12.7386 169.828 12.7386C166.283 12.7386 163.93 15.5341 163.93 19.5568C163.93 23.5795 166.249 26.2727 170.033 26.2727ZM165.95 18.3977C166.087 16.3608 167.527 14.5455 169.828 14.5455C172.01 14.5455 173.408 16.1818 173.408 18.3977H165.95ZM180.524 18.125C180.524 15.8409 181.939 14.5455 183.865 14.5455C185.732 14.5455 186.865 15.7642 186.865 17.8182V26H188.876V17.6818C188.876 14.3409 187.095 12.7386 184.445 12.7386C182.467 12.7386 181.24 13.625 180.626 14.9545H180.456V12.9091H178.513V26H180.524V18.125Z"
                  fill="#1F2937"
                />
                <path
                  d="M1 17H0H1ZM7 17H6H7ZM17 27V28V27ZM27 17H28H27ZM17 0C12.4913 0 8.1673 1.79107 4.97918 4.97918L6.3934 6.3934C9.20644 3.58035 13.0218 2 17 2V0ZM4.97918 4.97918C1.79107 8.1673 0 12.4913 0 17H2C2 13.0218 3.58035 9.20644 6.3934 6.3934L4.97918 4.97918ZM0 17C0 21.5087 1.79107 25.8327 4.97918 29.0208L6.3934 27.6066C3.58035 24.7936 2 20.9782 2 17H0ZM4.97918 29.0208C8.1673 32.2089 12.4913 34 17 34V32C13.0218 32 9.20644 30.4196 6.3934 27.6066L4.97918 29.0208ZM17 34C21.5087 34 25.8327 32.2089 29.0208 29.0208L27.6066 27.6066C24.7936 30.4196 20.9782 32 17 32V34ZM29.0208 29.0208C32.2089 25.8327 34 21.5087 34 17H32C32 20.9782 30.4196 24.7936 27.6066 27.6066L29.0208 29.0208ZM34 17C34 12.4913 32.2089 8.1673 29.0208 4.97918L27.6066 6.3934C30.4196 9.20644 32 13.0218 32 17H34ZM29.0208 4.97918C25.8327 1.79107 21.5087 0 17 0V2C20.9782 2 24.7936 3.58035 27.6066 6.3934L29.0208 4.97918ZM17 6C14.0826 6 11.2847 7.15893 9.22183 9.22183L10.636 10.636C12.3239 8.94821 14.6131 8 17 8V6ZM9.22183 9.22183C7.15893 11.2847 6 14.0826 6 17H8C8 14.6131 8.94821 12.3239 10.636 10.636L9.22183 9.22183ZM6 17C6 19.9174 7.15893 22.7153 9.22183 24.7782L10.636 23.364C8.94821 21.6761 8 19.3869 8 17H6ZM9.22183 24.7782C11.2847 26.8411 14.0826 28 17 28V26C14.6131 26 12.3239 25.0518 10.636 23.364L9.22183 24.7782ZM17 28C19.9174 28 22.7153 26.8411 24.7782 24.7782L23.364 23.364C21.6761 25.0518 19.3869 26 17 26V28ZM24.7782 24.7782C26.8411 22.7153 28 19.9174 28 17H26C26 19.3869 25.0518 21.6761 23.364 23.364L24.7782 24.7782ZM28 17C28 14.0826 26.8411 11.2847 24.7782 9.22183L23.364 10.636C25.0518 12.3239 26 14.6131 26 17H28ZM24.7782 9.22183C22.7153 7.15893 19.9174 6 17 6V8C19.3869 8 21.6761 8.94821 23.364 10.636L24.7782 9.22183ZM10.3753 8.21913C6.86634 11.0263 4.86605 14.4281 4.50411 18.4095C4.14549 22.3543 5.40799 26.7295 8.13176 31.4961L9.86824 30.5039C7.25868 25.9371 6.18785 21.9791 6.49589 18.5905C6.80061 15.2386 8.46699 12.307 11.6247 9.78087L10.3753 8.21913ZM23.6247 25.7809C27.1294 22.9771 29.1332 19.6127 29.4958 15.6632C29.8549 11.7516 28.5904 7.41119 25.8682 2.64741L24.1318 3.63969C26.7429 8.20923 27.8117 12.1304 27.5042 15.4803C27.2001 18.7924 25.5372 21.6896 22.3753 24.2191L23.6247 25.7809Z"
                  fill="#1F2937"
                />
              </svg>
            </div>
            <div className="bg-white border border-primary-red border-2 shadow-lg rounded xl:w-1/3 lg:w-5/12 md:w-1/2 w-full lg:px-10 sm:px-6 sm:py-10 px-2 py-6">
              <p
                tabIndex={0}
                className="focus:outline-none text-2xl font-medium leading-6 text-gray-800 font-heading text-primary-red"
              >
                Confirm Your Payment of ₱{totalPayment}
              </p>
              <p
                tabIndex={0}
                className="focus:outline-none text-sm mt-4 font-medium leading-none text-gray-500"
              >
                Start your stay at Motel Magic | We accept credit cards
              </p>

              <div>
                <form onSubmit={handleSubmit}>
                  <CardNumber
                    placeholder="Card Number"
                    className={`border w-full p-3 rounded m-2 input-text${
                      !numberValid ? " error" : ""
                    }`}
                    onFocus={handleFocus}
                  />

                  <CardHolder
                    placeholder="Card Holder"
                    className="input-text border p-3 rounded m-2 w-full"
                  />
                  <div className="flex-wrapper">
                    <div className="semi flex-wrapper border p-3 rounded m-2 w-3/12">
                      <ValidThruMonth className="input-text semi" />
                      <ValidThruYear className="input-text semi" />
                    </div>
                    <CardSecurityCode
                      placeholder="CVV"
                      className="input-text semi border p-3 rounded m-2 w-3/12"
                    />
                  </div>
                  <div className="mt-8">
                    <button
                      type="submit"
                      role="button"
                      aria-label="live chat"
                      className="focus:bg-primary-yellow my-4 text-center block w-full focus:ring-2 focus:ring-offset-2 focus:ring-primary-yellow bg-primary-yellow hover:primary-yellow text-white px-6 py-2 font-semibold rounded focus:outline-none"
                    >
                      Confirm Payment
                    </button>
                  </div>
                </form>
              </div>

              <Card fixClass="fix-new" cardClass="card-new" />
            </div>
          </div>
        </div>
      </>
      <Footer />
      <div></div>
    </div>
  );
}

export default Payment;
