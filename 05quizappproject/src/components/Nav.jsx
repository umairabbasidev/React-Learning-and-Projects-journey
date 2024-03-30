import React from "react";
import logo from "../assets/smit.png";

function Nav(z) {
  return (
    <>
      <div className="font-[Josefin-Sans-light]">
        <nav className="flex items-center justify-between lg:px-28 px-8 mt-2 shadow-lg py-3">
          <img src={logo} alt="Logo" className="w-24" />
          <p className="text-[#0d6db7] text-base">V 0.1 BETA</p>
        </nav>
      </div>
    </>
  );
}

export default Nav;
