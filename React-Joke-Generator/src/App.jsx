import React, { useContext } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Joke from "./components/Joke";
import { ThemeContext } from "./context/Theme";

const App = () => {
  const navigate = useNavigate();
  const { handleThemeToggle } = useContext(ThemeContext);

  const handleThemeChange = (e) => {
    handleThemeToggle();
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="w-screen h-screen dark:bg-slate-900">
            {/* Navbar */}
            <div className="w-full h-[8%] flex justify-center pt-3">
              <label className="inline-flex items-center cursor-pointer">
                <span className="mr-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Light
                </span>
                <input
                  type="checkbox"
                  value=""
                  className="sr-only peer"
                  onChange={handleThemeChange}
                />
                <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Dark
                </span>
              </label>
            </div>

            {/* Content Area */}
            <div className="w-full h-[92%] flex justify-center items-center">
              <Joke />
            </div>
          </div>
        }
      />

      <Route
        path="/test"
        element={
          <div className="w-screen h-screen">
            <div className="w-full h-full  flex-col  gap-3 flex justify-center items-center">
              <h1 className="font-bold text-2xl">Just a Test Page</h1>
              <button
                className="p-4 bg-green-600 rounded-lg"
                onClick={() => navigate("/")}
              >
                Go to Joke Page
              </button>
            </div>
          </div>
        }
      />
    </Routes>
  );
};

export default App;
