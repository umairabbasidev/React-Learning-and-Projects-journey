import React from "react";

import GoogleIcon from "../assets/social-google.png";
import Nav from "./Nav";

function NavBar() {
  return (
    <>
      <div className="font-[Josefin-Sans-light]">
        <Nav
          profileImage="https://umairabbasi.netlify.app/images/umair-img.png"
          userName="Muhammad Umair Abbasi"
          dropDownIcon="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCTmuQCoYv2YBD73-QyamyerY2C6YL5-dj7A&s"
        />
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

        <footer className="py-6 ">
          <p className="text-xl text-center">
            DEVELOPED BY -{" "}
            <a
              href="https://umairabbasi.netlify.app/"
              className="text-[#0d6db7] "
              target="_blank"
            >
              Umair Abbasi
            </a>
          </p>
          <div className="text-center text-4xl mt-3">
            <a href="https://github.com/umairabbasidev" target="_blank">
              <i className="fab fa-github-square text-[#0d6db7] hover:text-[#0d27b7]"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/umairabbasidev/"
              target="_blank"
            >
              <i className="fab fa-linkedin text-[#0d6db7] hover:text-[#0d27b7] ml-2"></i>
            </a>
            <a href="https://twitter.com/umairabbasidev" target="_blank">
              <i className="fab fa-twitter-square text-[#0d6db7] hover:text-[#0d27b7] ml-2"></i>
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}

export default NavBar;
