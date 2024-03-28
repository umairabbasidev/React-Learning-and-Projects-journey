import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div className="w-full h-screen " style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0  px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-3xl px-3 py-2">
          <button
            className="outline-none px-4 rounded-full text-white shadow-lg "
            style={{ backgroundColor: "red" }}
          onClick={()=>setColor("red")}>
            Red
          </button>{" "}
          <button
            className="outline-none px-4 rounded-full text-white shadow-lg "
            style={{ backgroundColor: "green" }}
         onClick={()=>setColor("green")} >
            green
          </button>{" "}
          <button
            className="outline-none px-4 rounded-full text-white shadow-lg "
            style={{ backgroundColor: "blue" }}
         onClick={()=> setColor("blue")} >
            blue
          </button>
          <button
            className="outline-none px-4 rounded-full text-black shadow-lg "
            style={{ backgroundColor: "yellow" }}
         onClick={()=> setColor("yellow")} >
            yellow
          </button>
          <button
            className="outline-none px-4 rounded-full text-black shadow-lg "
            style={{ backgroundColor: "orange" }}
         onClick={()=> setColor("orange")} >
            orange
          </button>
          <button
            className="outline-none px-4 rounded-full text-white shadow-lg "
            style={{ backgroundColor: "gray" }}
         onClick={()=> setColor("gray")} >
        gary
          </button>
          <button
            className="outline-none px-4 rounded-full text-white shadow-lg "
            style={{ backgroundColor: "purple" }}
         onClick={()=> setColor("purple")} >
            purple
          </button>
          <button
            className="outline-none px-4 rounded-full text-white shadow-lg "
            style={{ backgroundColor: "black" }}
         onClick={()=> setColor("black")} >
            black
          </button>
          <button
            className="outline-none px-4 rounded-full text-white shadow-lg "
            style={{ backgroundColor: "brown" }}
         onClick={()=> setColor("brown")} >
            brown
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
