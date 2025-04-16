import "./App.css";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Aboutus from "./Components/Aboutus";
// import BrowserRouter from "react-router-dom";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { useState } from "react";

function App() {
  const [currentTab, setCurrentTab] = useState("home");
  const [view, setView] = useState(0);

  function renderBtn(e) {
    // if (currentTab !== newTab) setCurrentTab(newTab);
    setCurrentTab(e.target.textContent);
    console.log(currentTab);
  }

  return (
    <Router>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-16 m-10 cursor-pointer"
        onClick={() => setView((view + 1) % 2)}
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>

      <nav
        className={`mt-[-20px] ml-15 mb-15 ${view === 1 ? "block" : "hidden"}`}
      >
        <ul className="flex flex-col justify-center gap-5 text-2xl font-medium tracking-wide text-green-700">
          <li
            className={`p-2 inline ${
              currentTab === "Home" ? "bg-gray-200" : ""
            }`}
          >
            <Link className="block" to="/" onClick={renderBtn}>
              Home
            </Link>
          </li>
          <li className={`p-2 ${currentTab === "About" ? "bg-gray-200" : ""}`}>
            <Link className="block" to="/about" onClick={renderBtn}>
              About
            </Link>
          </li>
          <li
            className={`p-2 ${currentTab === "Contact" ? "bg-gray-200" : ""}`}
          >
            <Link className="block" to="/contact" onClick={renderBtn}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<Aboutus />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
