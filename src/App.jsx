import Navbar from "./components/Navbar";
import Base from "./components/Home";

function App() {
  return (
    <>

      <Navbar />
      <div className="container">
        <h1 className="text-center">Welcome Username</h1>
        <Base />
      </div>
    </>
  );
}

export default App;