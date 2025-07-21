import React from "react";
import { useState } from "react";

const Test = () => {
  const testData = [
    { word: "an", meaning: "bean" },
    { word: "totakimasu", meaning: "to take" },
  ];
  const [index, setIndex] = useState(0);
  const handleNext = async (val) => {
    console.log(new Date())
    setIndex((old) => old + 1);
  };
  return (
    <div>
      <h1>Test you vocablari</h1>
      <div>
        <input type="number" name="" id="" max="20" min="1" />
        <button>Start</button>
      </div>
      {/* show the test */}
      <div>
        {index == testData.length ? (
          <div>completed</div>
        ) : (
          <div>
            <h1>{testData[index].word}</h1>

            <h1>{testData[index].meaning}</h1>
            <div>
              <li>
                <ul>
                  <button onClick={handleNext}>Hard</button>
                </ul>
                <ul>
                  <button onClick={handleNext}>medium</button>
                </ul>
                <ul>
                  <button onClick={handleNext}>easy</button>
                </ul>
              </li>
              <button>show answer</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Test;
