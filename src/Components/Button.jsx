import React from "react";

function Button({text}) {
  return (
    <button className="bg-[#00A3C8] hover:bg-[#0e8eab] transition-colors duration-200 ease-in text-white px-4 py-2 rounded text-sm">
     {text}
    </button>
  );
}

export default Button;
