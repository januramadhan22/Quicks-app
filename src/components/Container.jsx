import React from "react";

function Container({ children }) {
  return (
    <div className="w-screen min-h-screen bg-Primary-Dark ">{children}</div>
  );
}

export default Container;
