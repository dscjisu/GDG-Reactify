import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../context/Theme";
import { useTheme } from "../hooks/useTheme";

const JokeDirectives = ({ handleButtonClick }) => {
  const navigate = useNavigate();

  // Destructuring the Context Values
  const { selectedTheme } = useTheme();

  return (
    <>
      <button
        className="bg-[#F5A623] rounded-xl p-4 hover:bg-[#C67A1B] transition-all dark:bg-[#FF6347] dark:hover:bg-[#FF4500]"
        onClick={handleButtonClick}
        aria-label="Generate Joke Button"
      >
        <h1 className="text-white text-lg">
          Generate Joke in {selectedTheme} mode
        </h1>
      </button>
      <button
        onClick={() => navigate("/test")}
        className="bg-[#E69B33] rounded-xl p-2 hover:bg-[#C67A1B] transition-all dark:bg-[#32CD32] dark:hover:bg-[#228B22]"
      >
        Go to Test Page
      </button>
    </>
  );
};

export default JokeDirectives;
