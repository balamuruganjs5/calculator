import React, { useEffect, useState } from "react";
import InputDisplay from "./InputDisplay";

function Calc() {
  const inputs = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "%", "."];
  const operators = ["+", "-", "x", "/"];
  const [strvalue, setstrvalue] = useState("");

  const [values, setvalues] = useState(0);

  const storeinput = ({ input }) => {
    setvalues(input);
  };
  console.log("values : " + values);

  function calculation() {
    const result = eval(strvalue);
    console.log(result);
  }

  useEffect(() => {
    setstrvalue([...strvalue, values]);
    setvalues(null);
    calculation();
  }, [values]);

  return (
    <div className="border w-full bg-blue-100 ">
      <div className="container my-20 py-10 w-80 mx-auto bg-green-300 rounded-3xl">
        <div className="border border-white-900 hover:border-blue-300 mt-0 m-5 p-5 text-end">
          {strvalue}
        </div>
        <div className=" ml-5 mr-5 border border-white-900 flex">
          <div className=" w-3/4 m-0 border border-white-900 flex flex-wrap">
            {inputs.map((input, index) => (
              <div key={index} className="">
                <InputDisplay input={input} storeinput={storeinput} />
              </div>
            ))}
          </div>
          <div className=" w-1/4 border border-white-900">
            {operators.map((input, index) => (
              <div key={index} className="w-full">
                <InputDisplay input={input} storeinput={storeinput} />
              </div>
            ))}
          </div>
        </div>
        <div className=" ml-5 mr-5 border border-white-900 flex flex-wrap justify-center ">
          <div className="w-1/2 p-5 hover:bg-red-100 text-center border-green-600 bg-red-200">
            <button
              type="submit"
              onClick={() => console.log(` CLR Button Clicked`)}
            >
              CLR
            </button>
          </div>
          <div className="w-1/2 p-5 hover:bg-red-100 text-center border-green-600 bg-red-200">
            <button
              type="submit"
              onClick={() => console.log(` = Button Clicked`)}
            >
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calc;
