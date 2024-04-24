import react from "react";
import Navbar from "./Pages/Navbar";
import Home from "./Pages/Home";
import "./App.css";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
