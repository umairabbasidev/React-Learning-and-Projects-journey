import Chai from "./Chai";

function App() {
  let name = "Muhammad Umair Abbasi"
  return (
    <>
      <h1
        style={{
          textAlign: "center",
          backgroundColor: "orange",
          color: "blue",
        }}
      >
    {name}
      </h1>
      
      <Chai />
    </>
  );
}

export default App;
