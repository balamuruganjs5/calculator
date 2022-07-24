import React from "react";

function InputButtons({ symbol, handleclick }) {
  return (
    <div>
      <div
        className="w-16 hover:bg-slate-200 border-slate-300  bg-gray-100 text-md p-5 border rounded-xl"
        onClick={() => handleclick(symbol)}
      >
        {symbol}
      </div>
    </div>
  );
}

export default InputButtons;
