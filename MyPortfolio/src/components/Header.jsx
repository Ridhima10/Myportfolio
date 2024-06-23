// src/components/PortfolioSection.jsx
import React from "react";
import profileImage from "../assets/profile-pic.svg"; // Adjust the path to your image

function Header() {
  return (
    <section>
      <div className="flex items-center justify-between mt-8">
        <div className="text-center md:text-left md:w-1/2">
          <p className="text-2xl md:text-4xl font-bold">Hi,</p>
          <p className="text-2xl md:text-4xl font-bold">I'm Ridhima Jain</p>
          <p className="text-xl md:text-2xl mt-4">Full-stack Developer</p>
        </div>
        <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center md:justify-end">
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

export default Header;
