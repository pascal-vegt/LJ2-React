import { useState } from "react";
import "./App.css";

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <section className="bg-gray-100 min-h-screen dark:bg-gray-900">
      {/* Navbar */}
      <nav className="bg-white dark:bg-gray-800 p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <img className="h-10" src="/logo.png" alt="Logo" />
            <h1 className="text-2xl font-bold dark:text-slate-300 ml-2">
              Work<span className="text-indigo-500">cation</span>
            </h1>
          </div>

          {/* Mobile menu toggle */}
          <div className="block md:hidden">
            <button
              className="text-indigo-500"
              onClick={() => setIsNavOpen(!isNavOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>

          {/* Links */}
          <div className={`md:flex ${isNavOpen ? "block" : "hidden"}`}>
            <a
              href="#"
              className="text-gray-700 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400 mx-4"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-700 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400 mx-4"
            >
              About
            </a>
            <a
              href="#"
              className="text-gray-700 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400 mx-4"
            >
              Services
            </a>
            <a
              href="#"
              className="text-gray-700 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400 mx-4"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <article className="max-w-lg mx-auto my-10 bg-gray-100 dark:bg-gray-900 rounded-lg p-6 shadow-lg">
        <div className="flex items-center mb-6">
          <img className="h-10 w-10" src="/logo.png" alt="Logo" />
          <h1 className="text-2xl font-bold dark:text-slate-300 ml-4">
            Work<span className="text-indigo-500">cation</span>
          </h1>
        </div>
        <img
          className="rounded-lg w-full object-cover h-64 mb-6"
          src="/mainimage.png"
          alt="Beach and laptop"
        />
        <h1 className="text-2xl font-bold dark:text-slate-300 mb-4">
          You can work from anywhere.{" "}
          <span className="text-indigo-500">Take advantage of it.</span>
        </h1>
        <p className="dark:text-slate-300 text-lg mb-6">
          Workcation helps you find work-friendly rentals in beautiful locations
          so you can enjoy some nice weather even when you're not on vacation.
        </p>

        {/* Centered button */}
        <div className="flex justify-center">
          <button className="bg-indigo-500 rounded-lg p-3 text-neutral-50 font-semibold">
            Book your escape
          </button>
        </div>
      </article>
    </section>
  );
}

export default App;
