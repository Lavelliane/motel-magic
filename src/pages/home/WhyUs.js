import React from "react";
import iHub from "../../assets/i-hub.png";
import cuisine from "../../assets/cuisine.png";
import cityView from "../../assets/cityview.png";
import staff from "../../assets/staff.png";

function WhyUs() {
  return (
    <div className="overflow-y-hidden">
      <div className="xl:mx-auto xl:container  xl:px-20 md:px-6 px-4 py-12">
        <div className="lg:flex items-center justify-center lg:space-x-12 2xl:space-x-6">
          <div className>
            <p className="lg:text-4xl text-3xl font-heading leading-9 text-primary-red font-medium">
              Why choose us
            </p>
            <p className="text-lg leading-7 text-gray-600 mt-4 xl:w-7/12 w-full">
              The Motel Magic is situated along N. Escario St., close to the Red
              House Taiwan Shabu Shabu. It has 120 rooms with air-conditioning
              and free Wi-Fi, a restaurant and conference facilities. The
              nearest metro is Cebu Business Park.
            </p>
            <div className="lg:hidden lg:w-3/5 xl:w-3/5 w-full lg:mt-0 mt-6">
              {/* <img
                src="https://www.cebuitpark.com/wp-content/uploads/sites/17/2017/10/Cebu-IT-Park-Nightcmp-2-1024x683.jpg"
                alt="ongoing meeting"
                className="w-full obejct-fit object-center object-fill h-full"
              /> */}
            </div>
            <div className="mt-6 md:mt-10 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 lg:mt-6 2xl:mt-12">
              <div className="flex items-center">
                <div className="w-16 h-16 relative">
                  <div className=" flex-shrink-0 z-20  w-16 h-16 flex items-center justify-center mt-2 mr-3">
                    <img src={iHub} alt="clock" />
                  </div>
                </div>
                <div className="flex items-start flex-col ml-6 pt-8">
                  <h2 className="text-lg font-semibold leading-4 text-gray-800">
                    Near the Industrial Hub
                  </h2>
                  <p className="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-gray-600">
                    We are located near Ayala Cebu and IT Park
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-16 h-16 relative">
                  <div className=" flex-shrink-0 z-20  w-16 h-16 flex items-center justify-center mt-2 mr-3">
                    <img src={staff} alt="Friendly" />
                  </div>
                </div>
                <div className="flex items-start flex-col ml-6 pt-8">
                  <h2 className="text-lg font-semibold leading-4 text-gray-800">
                    Excellent Staff
                  </h2>
                  <p className="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-gray-600">
                    We value your time with us. And ensure that you are given
                    the best service.
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-16 h-16 relative">
                  <div className=" flex-shrink-0 z-20  w-16 h-16 flex items-center justify-center mt-2 mr-3">
                    <img src={cuisine} alt="Creative" />
                  </div>
                </div>
                <div className="flex items-start flex-col ml-6 pt-8">
                  <h2 className="text-lg font-semibold leading-4 text-gray-800">
                    Diverse Cuisine
                  </h2>
                  <p className="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-gray-600">
                    Our buffet offers different types of international cuisine
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-16 h-16 relative">
                  <div className=" flex-shrink-0 z-20  w-16 h-16 flex items-center justify-center mt-2 mr-3">
                    <img src={cityView} alt="Achievments" />
                  </div>
                </div>
                <div className="flex items-start flex-col ml-6 pt-8">
                  <h2 className="text-lg font-semibold leading-4 text-gray-800">
                    Exquisite Cityview
                  </h2>
                  <p className="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-gray-600">
                    Astonishing city lights. Paired with exciting experiences
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden lg:block lg:w-3/5 xl:w-3/5 w-full lg:mt-0 mt-6">
            <img
              src="https://www.cebuitpark.com/wp-content/uploads/sites/17/2017/10/Cebu-IT-Park-Nightcmp-2-1024x683.jpg"
              alt="ongoing meeting"
              className="w-full obejct-fit object-center object-fill h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyUs;
