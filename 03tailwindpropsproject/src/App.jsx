import Card from "./components/Card";

function App() {
  return (
    <>
      <h2 className="text-center mt-5 text-2xl text-red-700">
        Understanding Concept of props in React
      </h2>
      <div className="lg:flex gap-0 ">
        <Card
          title="Dveloper One"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis? "
          imageSrc="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
        />{" "}
        <Card
          title="Dev Two"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?"
          imageSrc="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600"
        />{" "}
        <Card
          title="Dev Three"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?"
          imageSrc="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
      </div>
    </>
  );
}

export default App;
