// src/Card.js
import React from "react";

const Card = () => {
return (
    <div className="flex flex-col bg-white rounded-3xl shadow-lg scale-[1.7]">
        <div className="px-6 py-8 sm:p-10 sm:pb-6">
            <div className="grid items-center justify-center w-full grid-cols-1 text-left">
                <div>
                <div className="relative flex space-x-1 left-0 ">
                    <h2 className="text-lg font-medium tracking-tighter text-green-600 lg:text-3xl">
                            React
                    </h2>
                    <h2 className="text-lg font-medium tracking-tighter text-gray-600 lg:text-3xl">
                            - ify
                    </h2>
                    </div>
                    <p className="mt-2 text-sm text-gray-500">
                        GDG on Campus
                    </p>
                </div>
                <div className="mt-6">
                    <p>
                        <span className="text-5xl font-light tracking-tight text-black">
                            $0 (Free)
                        </span>
                        <span className="text-base font-medium text-gray-500"> /mo </span>
                    </p>
                </div>
            </div>
        </div>
        <div className="flex px-6 pb-8 sm:px-8">
        <button
            aria-describedby="tier-company"
            className="items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-lime-600 border-2 border-lime-900 rounded-full inline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-lg focus-visible:ring-black"
            onClick={() => alert("Get started clicked!")}
            >
            Welcome
            </button>

        </div>
    </div>
);
};

export default Card;
