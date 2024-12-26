import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DotLoader } from "react-spinners";
import JokeDirectives from "./JokeDirectives";

const Joke = () => {
  const navigate = useNavigate();
  const [joke, setJoke] = useState("");

  // Utility function for generating a joke
  const generateJoke = () => {
    axios
      .get("https://sv443.net/jokeapi/v2/joke/Programming?type=single")
      .then((response) => setJoke(response.data.joke))
      .catch(() =>
        setJoke("Oops! Couldn't fetch a joke. Please try again later!")
      );
  };

  // OnInit
  useEffect(() => {
    generateJoke();
    return () => console.log(`Component Unmounts`);
  }, []);

  // Handling Button Click
  const handleButtonClick = () => {
    setJoke("");
    generateJoke();
  };

  return (
    <div className="w-[32%] h-[48%] rounded-xl bg-[#e4dcdc] p-8 flex flex-col justify-around items-center gap-4">
      {joke ? (
        <>
          <h1 className="font-semibold text-xl">{joke}</h1>
          <JokeDirectives handleButtonClick={handleButtonClick} />
        </>
      ) : (
        <DotLoader color="#6F4E37" />
      )}
    </div>
  );
};

export default Joke;
