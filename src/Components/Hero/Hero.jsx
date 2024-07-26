import React from "react";
// import heroImg from "./heroImg"

function Hero() {
  return (
    <section id="hero" className="bg-hero-img  w-full bg-cover pt-20 pb-10">
      <div className="max-w-[1150px] w-4/5 mx-auto flex flex-col lg:flex-row gap-20 items-center">
        {/* Hero text */}
        <div className="lg:max-w-[580px] w-full">
          <h5 className="text-sm tracking-widest text-[#00A3C8] font-bold mb-6">
            WELCOME TO MEDSERVICE
          </h5>
          <h2 className="text-2xl md:text-5xl text-[#004861] font-bold leading-tight lg:leading-snug lg:tracking-wider mb-6">
            {" "}
            WORLD&nbsp;CLASS MEDICAL&nbsp;TREATMENT FOR YOUR FAMILY
          </h2>
          <li className="text-[#333333] mb-2">
            Fringilla risus nec, luctus mauris orci auctor purus euismod pretium
            purus at pretium ligula rutrum tempor sapien at pretium luctus
            ligula luctus risus
          </li>
          <li className="text-[#333333] mb-2 ">
            Quaerat sodales sapien undo euismod purus a blandit pretium ultrice
          </li>
          <li className="text-[#333333] mb-2">
            Nemo ipsam egestas volute turpis dolores ut aliquam quaerat sodales
            sapien undo pretium purus feugiat dolor impedit magna purus pretium
          </li>
        </div>

        {/* hero form */}
        <div className="w-full lg:w-[400px] bg-[#00A3C8] rounded px-6 py-8 flex-grow-0 flex-shrink-0">
          <form action="" className="flex flex-col gap-4 ">
            <h3 className="text-xl text-white text-center font-bold mb-2">
              Get an Appointment
            </h3>
            <input
              className=" outline-none border-none px-2 py-2 rounded"
              type="text"
              name="name"
              placeholder="Enter your Name*"
            />
            <input
              className=" outline-none border-none px-2 py-2 rounded"
              type="email"
              name="email"
              placeholder="Enter your Email*"
            />
            <input
              className=" outline-none border-none px-2 py-2 rounded"
              type="number"
              name="phone"
              placeholder="Enter your Phone Number*"
            />
            <input
              className=" outline-none border-none px-2 py-2 rounded"
              type="number"
              name="phone"
              placeholder="Enter your Phone Number*"
            />
            <input
              className=" outline-none border-none px-2 py-2 rounded"
              type="datetime-local"
              name="date"
              placeholder="Appointment Date"
            />
            <select
              className=" outline-none border-none px-2 py-2 rounded"
              name="dr"
            >
              <option value="">Select Doctor</option>
              <option value="Jonathan Barnes D.M">Jonathan Barnes D.M</option>
              <option value="Hannah Harper D.M">Hannah Harper D.M</option>
              <option value="Mathew Anderson D.M">Mathew Anderson D.M</option>
              <option value="Megan Colman D.M">Megan Colman D.M</option>
              <option value="Joshua Elledge D.M">Joshua Elledge D.M</option>
            </select>
            <button className="p-2 bg-[#FFA12F] hover:bg-transparent border-transparent hover:border-white border-2 text-white rounded transition-colors ease-linear duration-500">
              Send Your Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Hero;
