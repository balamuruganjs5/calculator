import { toHaveFormValues } from "@testing-library/jest-dom/dist/matchers";
import React from "react";

function InputDisplay({ input, storeinput }) {
  return (
    <div className=" hover:bg-red-100 bg-red-200">
      <button
        className="list-none pr-5 p-7 mx-1 w-auto"
        value={input}
        onClick={() => storeinput({ input })}
        // onClick={() => console.log(`${input} Button Clicked`)}
      >
        {input}
      </button>
    </div>
  );
}

export default InputDisplay;
