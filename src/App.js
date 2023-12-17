import React, { useState } from "react";
import "./App.css";

function App() {
  const steps = [
    "Make Your Portfolio",
    "Make Your Curriculum Vitae",
    "Find And Apply Some Job!",
  ];

  // State
  const [stepId, setStepId] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  // console.log(stepId);
  function onClickHandlePrevStep() {
    const currStep = stepId;
    if (stepId > 1) {
      setStepId(currStep - 1);
    } else {
      setStepId(1);
    }
    // console.log(stepId);
  }
  function onClickHandleNextStep() {
    const currStep = stepId;

    if (stepId < 3) {
      setStepId(currStep + 1);
    } else {
      setStepId(3);
    }
  }

  return (
    <>
      <div className="flex">
        <div
          className="mx-12 cursor-pointer text-3xl font-bold"
          onClick={() => setIsOpen(!isOpen)}
        >
          &times;
        </div>
      </div>

      {isOpen && (
        <section className="">
          <h1 className="text-5xl m-10 text-center">
            How To Become A Web Developer!
          </h1>
          <div className="section1">
            <div
              className={`t1 transition-all ${
                stepId >= 1 ? "bg-blue-500" : "bg-gray-400"
              }`}
            >
              1
            </div>
            <div
              className={`t1 transition-all ${
                stepId >= 2 ? "bg-blue-500" : "bg-gray-400"
              }`}
            >
              2
            </div>
            <div
              className={`t1 transition-all ${
                stepId >= 3 ? "bg-blue-500" : "bg-gray-400"
              }`}
            >
              3
            </div>
          </div>

          <div className="flex justify-center my-20 text-3xl font-extralight ">
            <p>
              Step {stepId}: {steps[stepId - 1]}
            </p>
          </div>

          <div className="flex justify-center">
            <button
              onClick={onClickHandlePrevStep}
              class="middle none center rounded-lg bg-pink-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none mx-2"
              data-te-ripple-init
              data-te-ripple-color="light"
              disabled={stepId <= 1 && "true"}
            >
              Prev Step
            </button>
            <button
              onClick={onClickHandleNextStep}
              class="middle none center rounded-lg bg-pink-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none mx-2"
              data-te-ripple-init
              data-te-ripple-color="light"
              disabled={stepId >= 3 && "true"}
            >
              Next Step
            </button>
          </div>
        </section>
      )}
    </>
  );
}

export default App;
