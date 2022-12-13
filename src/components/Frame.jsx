import React, { useState } from "react";
import Search from "../assets/search_24px.png";

function Frame({ children }) {
  return (
    <div className="w-full h-full bg-transparent flex overflow-hidden">
      <div className="w-2/12 min-h-screen border-r border-Primary-White"></div>
      <div className="w-10/12 min-h-screen">
        <div className="h-14 w-full bg-Primary-Grey flex items-center px-6">
          <img className="w-4 h-4" src={Search} alt="Search" />
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}

export default Frame;
