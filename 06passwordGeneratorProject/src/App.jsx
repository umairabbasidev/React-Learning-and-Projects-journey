import React, { useCallback, useEffect, useState, useRef } from "react";
document.body.style.backgroundColor = "#212121";
document.body.style.color = "#fff";
function App() {
  let [length, setLength] = useState(8);
  let [numberAllowed, setNumberAllowed] = useState(false);
  let [characterAllowed, setCharacterAllowed] = useState(false);
  let [password, setPassword] = useState("");

  // useRef

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (characterAllowed) str += "!@#$%&*_+";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, characterAllowed]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0, 3);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, characterAllowed, passwordGenerator]);

  return (
    <>
      <h1 className="text-3xl font-bold text-center mt-5">
        Password Generator
      </h1>

      <div className="bg-gray-800 lg:w-1/3 w-full mx-2 mt-6 lg:mx-auto p-6 rounded-xl">
        <div className="flex   ">
          <input
            type="text"
            value={password}
            placeholder="Password"
            className="outline-none border-0 w-full p-2 bg-white text-orange-800  bg-transparent rounded-l-md"
            readOnly
            ref={passwordRef}
          />
          <button
            className="bg-blue-700 text-white p-2 rounded-r-md hover:bg-blue-600"
            onClick={copyPasswordToClipboard}
          >
            Copy
          </button>
        </div>
        <div className=" mt-2">
          <div className="flex items-center gap-2 lg:flex-nowrap flex-wrap">
            <input
              type="range"
              max={100}
              min={6}
              value={length}
              onChange={(e) => {
                setLength(e.target.value);
              }}
              className="cursor-pointer"
            />
            <label htmlFor="">Length ({length})</label>
            <div className=" flex gap-1 ">
              <input
                type="checkbox"
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
