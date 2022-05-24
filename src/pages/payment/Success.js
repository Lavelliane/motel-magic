import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../home/Footer";
import check from "../../assets/check.png";

function Success() {
  return (
    <div>
      <Navbar />
      <>
        <div className="w-full flex items-center justify-center mt-12">
          <div className="xl:w-1/4 sm:w-1/2 w-full 2xl:w-1/5 flex flex-col items-center py-16 md:py-12">
            <div className="w-full flex items-center justify-center">
              <div className="flex flex-col items-center">
                <img src={check} alt="profile" />
                <p className="mt-4 text-4xl sm:text-sm md:text-base font-bold text-center text-primary-red">
                  Successful Payment
                </p>
                <p className="text-center">
                  Track your reservation on the Track Reservation page. You may
                  now close this window
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default Success;
