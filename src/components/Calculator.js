import React, { useState } from "react";
import InputButtons from "./InputButtons";

function Calculator() {
  const [input, setinput] = useState("");
  const [result, setresult] = useState("");

  const addtoinput = (value) => {
    setinput([...input, value]);
  };

  const handleclear = () => {
    try {
      setinput(input.slice(0, -1));
    } catch (e) {
      setinput("");
      setresult("");
    }
  };

  const handlereset = () => {
    setresult("");
    setinput("");
  };
  const handlecalc = () => {
    try {
      const inputresult = eval(input.join(""));
      console.log(inputresult);
      setresult(inputresult);
    } catch (e) {
      setinput("0");
      setresult("0");
    }
  };

  return (
    <center>
      <div className="font-semibolds bg-yellow-50 p-2 border-4 w-72 rounded-3xl">
        <div className="border-2 bg-white rounded-xl w-64 h-24 p-2 mb-2">
          <div>
            <p className="text-end text-2xl mr-3 ">{result}</p>
          </div>
          <br></br>
          <div>
            <p className="text-end text-md -mt-3 mr-3 ">{input}</p>
          </div>
        </div>
        <div className="w-64 mb-1">
          <div className="flex mb-1">
            <InputButtons symbol="1" handleclick={addtoinput} />
            <InputButtons symbol="2" handleclick={addtoinput} />
            <InputButtons symbol="3" handleclick={addtoinput} />
            <InputButtons symbol="+" handleclick={addtoinput} />
          </div>
          <div className="flex mb-1">
            <InputButtons symbol="4" handleclick={addtoinput} />
            <InputButtons symbol="5" handleclick={addtoinput} />
            <InputButtons symbol="6" handleclick={addtoinput} />
            <InputButtons symbol="-" handleclick={addtoinput} />
          </div>
          <div className="flex mb-1">
            <InputButtons symbol="7" handleclick={addtoinput} />
            <InputButtons symbol="8" handleclick={addtoinput} />
            <InputButtons symbol="9" handleclick={addtoinput} />
            <InputButtons symbol="*" handleclick={addtoinput} />
          </div>
          <div className="flex ">
            <InputButtons symbol="0" handleclick={addtoinput} />
            <InputButtons symbol="." handleclick={addtoinput} />
            <InputButtons symbol="%" handleclick={addtoinput} />
            <InputButtons symbol="/" handleclick={addtoinput} />
          </div>
        </div>
        <div className="">
          <button
            className="w-16 bg-red-500 text-white hover:bg-slate-200 hover:text-black border-slate-300 text-md p-5 border rounded-xl"
            onClick={handlereset}
          >
            AC
          </button>
          <button
            className="w-16 bg-green-400 hover:bg-slate-200 text-md p-5 border border-slate-300 rounded-xl"
            onClick={handleclear}
          >
            C
          </button>
          <button
            className="w-32 bg-green-400 hover:bg-slate-200 text-md p-5 border border-slate-300 rounded-xl"
            onClick={handlecalc}
          >
            =
          </button>
        </div>
      </div>
    </center>
  );
}

export default Calculator;
