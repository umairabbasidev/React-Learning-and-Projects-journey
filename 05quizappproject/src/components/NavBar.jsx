import React from "react";
import logo from "../assets/smit.png";
import GoogleIcon from "../assets/social-google.png";

function NavBar() {
  return (
    <>
      <div className="font-[Josefin-Sans-light]">
        <nav className="flex items-center justify-between lg:px-28 px-8 mt-2 shadow-lg py-3">
          <img src={logo} alt="Logo" className="w-24" />
          <p className="text-[#0d6db7] text-base">V 0.1 BETA</p>
        </nav>
        <div className="text-center bg-[#e9ecef] h-screen">
          <h1 className="lg:text-[4.3rem] text-4xl text-[#0d6db7] lg:pt-20 py-7">
            Quiz Application
          </h1>
          <h3 className="lg:text-5xl text-3xl lg:py-8 py-4 px-1">
            Saylani Mass IT Training Program
          </h3>
          <p className="text-xl font-light text-[#212529] pt-8 mb-14">
            Saylani Mass IT Training program is an institute that delivers the
            latest IT education (FREE OF COST).
          </p>
          <p className="text-xl font-light text-[#212529] ">
            Saylani Mass Training Department is one of the departments that is
            running under Saylani Welfare Trust Management.
          </p>

          <h4 className="text-2xl font-bold mt-8">Start your exam here:</h4>
          <div className="flex items-center  gap-2 p-1 rounded-lg shadow-2xl mt-5 bg-white w-56 m-auto">
            <img src={GoogleIcon} alt="Google-icon" className="w-10" />
            <button>Continue with Google</button>

          </div>
          
        </div>

        dd
      </div>
    </>
  );
}

export default NavBar;
