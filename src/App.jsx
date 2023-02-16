import "./index.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Navbar />
      </div>
      <Outlet />
    </div>
  );
}

export default App;
