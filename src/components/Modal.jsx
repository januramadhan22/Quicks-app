import React, { useState } from "react";
import Button from "./CustomButton";
import expand from "../assets/expand_more_24px.png";
import checkBox from "../assets/check_box_outline_blank_24px.png";
import checkBoxDone from "../assets/check_box_24px.png";
import option from "../assets/more_horiz_24px.png";

function TaskModal() {
  const [dropDown, setDropDown] = useState(false);

  return (
    <div className="w-full h-full flex flex-col gap-6">
      <header className="w-full flex justify-between">
        <div className="flex flex-col items-center justify-center gap-2 absolute z-50">
          <button
            onClick={() => {
              setDropDown(!dropDown);
            }}
            className={`ml-8 px-0.5 py-0.5 w-24 h-10 bg-white border border-Primary-Grey rounded-md flex items-center justify-center gap-2 ${
              dropDown ? "ml-0" : "m-0"
            }`}
          >
            <p className="text-sm font-semibold text-Primary-Dark">My Task</p>
            <img src={expand} alt="Expand Menu" />
          </button>
          <ul
            className={`${
              dropDown
                ? "visible w-40 bg-white rounded-md  border border-Primary-Grey text-sm text-Primary-Dark"
                : "hidden"
            }`}
          >
            <button className="w-full p-1.5 flex justify-start border-b border-Primary-Dark">
              Personal Errands
            </button>
            <button className="w-full p-1.5 flex justify-start">
              Urgent To-Do
            </button>
          </ul>
        </div>
        <Button
          className="w-24 h-10 rounded-md bg-Primary-Blue text-white absolute right-8"
          label="New Task"
        />
      </header>
      <div className="mt-7 w-full h-auto flex items-start gap-2">
        <label className="swap">
          <input type="checkbox" />
          <img src={checkBox} alt="Checkbox" className="w-4 swap-on" />
          <img src={checkBoxDone} alt="Checkbox" className="w-4 swap-off" />
        </label>
        <div className="w-full flex items-start gap-2">
          <p className="text-xs w-full">
            Close off Case #012920-RODRIGUES, Amiguel
          </p>
          <div className="w-full flex justify-end items-center gap-2">
            <p className="text-xs text-Indicator-Red">2 Days Left</p>
            <p className="text-xs">12/06/2021</p>
            <button>
              <img src={expand} alt="Expand" className="w-2 h-2" />
            </button>
            <button>
              <img src={option} alt="Option" className="w-3 h-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { TaskModal };
