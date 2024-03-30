import React, { useState } from "react";
document.body.style.backgroundColor = "#212121";
document.body.style.color = "#fff";
function App() {
  let [length, setLength] = useState(8);
  let [numberAllowed, setNumberAllowed] = useState(false);
  let [characterAllowed, setCharacterAllowed] = useState(false);

  
  return (
    <>
      <h1 className="text-3xl font-bold text-center mt-5">
        Password Generator
      </h1>

      <div className="bg-gray-800 lg:w-1/3 w-full mx-2 mt-6 lg:mx-auto p-6 rounded-xl">
        <div className="flex   ">
          <input
            type="text"
            placeholder="Password"
            className="outline-none border-0 w-full p-2 bg-white text-orange-800  bg-transparent rounded-l-md"
            readOnly
          />
          <button className="bg-blue-800 text-white p-2 rounded-r-md">
            Copy
          </button>
        </div>
        <div className=" mt-2">
          <div className="flex items-center gap-2 lg:flex-nowrap flex-wrap">
            <input
              type="range"
              name=""
              id=""
              max={100}
              min={6}
              onChange={(e) => {
                setLength(e.target.value);
              }}
              className="cursor-pointer"
            />
            <label htmlFor="">Length ({length})</label>
            <div className=" flex gap-1 ">
              <input
                type="checkbox"
                name=""
                id="inputElement"
                defaultChecked={numberAllowed}
                onChange={() => {
                  setNumberAllowed((prev) => {
                    return !prev;
                  });
                }}
              />
              <label htmlFor="inputElement" className="">
                Number
              </label>
            </div>{" "}
            <div className="flex gap-1">
              <input
                type="checkbox"
                name=""
                id="input"
                defaultChecked={characterAllowed}
                onChange={() => {
                  setCharacterAllowed((prev) => {
                    return !prev;
                  });
                }}
              />
              <label htmlFor="input" className="">
                Characters
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
