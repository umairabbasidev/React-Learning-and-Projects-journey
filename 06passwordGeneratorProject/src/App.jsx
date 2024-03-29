import { useState } from "react";

document.body.style.backgroundColor = "black";

function App() {
  let [length, setLength] = useState(8);
  let [number, setNumber] = useState(null);
  let [character, setCharacter] = useState(null);
  
  return (
    <div>
      <h1 className="text-white text-center text-3xl mt-6 ">
        Password Generator{" "}
      </h1>

      <div className="bg-gray-800 w-fit p-5 m-auto mt-6 rounded-lg">
        <div className="flex items-center ">
          <input
            type="text"
            placeholder="password"
            className="w-full outline-none border-0 p-2 rounded-lg mb-3 bg-white"
          />
          <button className="bg-blue-800 p-2 mb-3 rounded-lg text-white">
            copy
          </button>
        </div>
        <div className="text-orange-600 ">
          <input type="range" max={100} min={12} />
          <label htmlFor="" className="lg:text-base text-sm ">
            {" "}
            length ({length}){" "}
          </label>
          <label htmlFor="" className="lg:text-base text-sm ">
            {" "}
            <input type="checkbox" /> Number{" "}
          </label>
          <label htmlFor="" className="lg:text-base text-sm">
            {" "}
            <input type="checkbox" /> Characters{" "}
          </label>
        </div>
      </div>
    </div>
  );
}

export default App;
