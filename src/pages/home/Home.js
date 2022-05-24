import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Amenities from "./Ameneties";
import Featured from "./Featured";
import Footer from "./Footer";
import Testimonials from "./Testimonials";
import WhyUs from "./WhyUs";

function Home() {
  return (
    <>
      <div>
        <section>
          <div className="w-full relative pb-10 px-6 xl:px-0 bg-primary-red">
            <Navbar />
            <div className="pt-32 lg:flex items-center relative z-10 container mx-auto">
              <div className="w-full lg:w-1/2 h-full lg:pr-10 xl:pr-0">
                <img
                  tabIndex="0"
                  role="img"
                  aria-label="people smiling"
                  className="mx-auto"
                  src="https://www.pngall.com/wp-content/uploads/5/Hotel-Building-PNG-Download-Image.png"
                  alt="people smiling"
                />
              </div>
              <div role="contentinfo" className="w-full lg:w-1/2 h-full">
                <p
                  tabIndex="0"
                  className="text-primary-yellow uppercase text-2xl mb-4"
                >
                  Experience the Magic at
                </p>
                <h1
                  tabIndex="0"
                  className="text-primary-yellow text-4xl lg:text-6xl font-heading mb-8"
                >
                  Motel Magic
                </h1>
                <p
                  tabIndex="0"
                  className="text-primary-white font-regular mb-8"
                >
                  Minutes away from Ayala Malls, Motel Magic offers comfort and
                  convenience at an affordable price. Motel Magic is perfectly
                  situated off the N. Escario St. and in close proximity to top
                  industrial hubs. As a guest, your comfort and satisfaction are
                  our top priority. For this reason, we provide complimentary
                  parking, Wi-Fi, and continental breakfast. We also offer an
                  onsite fitness facility available 24/7.
                </p>
                <Link
                  to="/reserve"
                  role="button"
                  aria-label="live chat"
                  className="focus:bg-primary-yellow focus:ring-2 focus:ring-offset-2 focus:ring-primary-yellow bg-primary-yellow hover:primary-yellow text-white px-6 py-2 font-semibold rounded focus:outline-none"
                >
                  Reserve
                </Link>
                {/* <div className="lg:mt-16 py-4 px-4 flex flex-col sm:flex-row justify-start sm:justify-between items-start sm:items-center shadow-lg rounded-lg">
                <div className="sm:flex items-center py-2">
                  <div className="flex items-center">
                    <img
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/right_aligned_with_searchbar_Svg4.svg"
                      alt="icon"
                    />
                    <input
                      aria-label="Doctor name"
                      className="w-24 xl:w-32 leading-none tracking-normal text-gray-800 ml-2.5 placeholder-black"
                      placeholder="Doctor Name"
                    />
                  </div>
                  <div className="flex items-center sm:mx-4 xl:mx-14 my-6 lg:my-0">
                    <img
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/right_aligned_with_searchbar_Svg5.svg"
                      alt="icon"
                    />
                    <input
                      aria-label="zip code"
                      className="w-24 xl:w-32 leading-none tracking-normal text-gray-800 ml-2.5 placeholder-black"
                      placeholder="Zip code"
                    />
                  </div>
                  <div className="flex items-center">
                    <img
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/right_aligned_with_searchbar_Svg6.svg"
                      alt="icon"
                    />
                    <input
                      aria-label="insurance"
                      className="w-24 xl:w-32 leading-none tracking-normal text-gray-800 ml-2.5 placeholder-black"
                      placeholder="Insurance"
                    />
                  </div>
                </div>
                <button
                  role="button"
                  aria-label="search"
                  className="focus:bg-indigo-700 focus:ring-indigo-700 focus:ring-2 focus:ring-offset-2 text-white bg-indigo-600 hover:bg-indigo-700 mt-4 sm:mt-0 p-3 lg:-ml-8 rounded w-full sm:w-auto relative"
                >
                  <img
                    className="absolute right-0 mr-2 sm:mr-auto sm:relative icon icon-tabler icon-tabler-search cursor-pointer"
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/right_aligned_with_searchbar_Svg7.svg"
                    alt="search"
                  />
                  <input
                    aria-label="search"
                    className="sm:hidden border-b border-gray-300 w-full bg-transparent pr-6"
                  />
                </button>
              </div> */}
              </div>
            </div>
          </div>
        </section>
      </div>
      <WhyUs />
      {/* -------------------------FEATURED------------------------------ */}
      <Featured />
      {/* --------------------- AMENETIES ---------------------------- */}
      <Amenities />
      {/* ----------------TESTIMONIALS-------------- */}
      <Testimonials />
      {/* ---------------FOOTER---------------- */}
      <Footer />
    </>
  );
}

export default Home;
