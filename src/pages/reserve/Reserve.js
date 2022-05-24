import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../home/Footer";
import Form from "./Form";
import Summary from "./Summary";

function Reserve() {
  return (
    <div>
      <Navbar />
      <div className="my-5">
        <div className="flex flex-wrap items-center justify-around">
          <Form />
        </div>
      </div>
      <div></div>
      <Footer />
    </div>
  );
}

export default Reserve;
