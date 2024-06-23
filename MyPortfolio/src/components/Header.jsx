import React from "react";
import profileImage from "../assets/profile-pic.svg"; // Adjust the path to your image

function PortfolioSection() {
  return (
    <section className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between mt-8">
        {/* Content on left (or top on small screens) */}
        <div className="text-center md:text-center mb-4  md:mb-0 md:mt-10 md:w-1/2">
          <p className="text-2xl md:text-4xl font-bold">Hi,</p>
          <p className="text-2xl md:text-4xl font-bold">I'm Ridhima Jain</p>
          <p className="text-xl md:text-2xl mt-4">Full-stack Developer</p>
        </div>

        {/* Image on right (or below on small screens) */}
        <div className="flex justify-center md:justify-center  md:mt-10 md:w-1/2">
          <img
            src={profileImage}
            alt="Ridhima Jain"
            className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover transform transition duration-500 hover:scale-110"
          />
        </div>
      </div>
    </section>
  );
}

export default PortfolioSection;
