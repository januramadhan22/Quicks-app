import React from "react";

function Form() {
  return (
    <div>
      <form
        key={task.id}
        id="list-task"
        className="w-full h-auto flex items-start gap-2"
      >
        <label className="swap">
          <input type="checkbox" />
          <img src={checkBox} alt="Checkbox" className="w-4 swap-on" />
          <img src={checkBoxDone} alt="Checkbox" className="w-4 swap-off" />
        </label>
        <div id="content" className="w-full flex flex-col gap-3">
          <div id="title" className="w-full flex items-start gap-2">
            <input
              onChange={handleChange}
              type="text"
              placeholder="Type Task Title"
              className="w-full py-1 px-2 text-sm border border-Primary-Grey rounded-md"
            />
            <div className="w-full flex justify-end items-center gap-2">
              <p className="text-xs text-Indicator-Red">2 Days Left</p>
              <p className="text-xs text-Primary-Dark">{task.date}</p>
              <button>
                <img src={expand} alt="Expand" className="w-2 h-2" />
              </button>
              <button>
                <img src={option} alt="Option" className="w-3 h-1" />
              </button>
            </div>
          </div>
          <div id="date-detail" className="w-full flex gap-4 items-center">
            <img src={calendar} alt="Date" className="w-4 h-4" />
            <input
              id="date"
              type="date"
              className="py-1 px-2 text-sm rounded-md bg-transparent border border-Primary-Grey text-Primary-Dark"
            />
          </div>
          <div id="description" className="w-full flex items-start gap-4">
            <button>
              <img src={edit} alt="Edit" />
            </button>
            <textarea
              name=""
              id=""
              placeholder="No Description"
              className="text-Primary-Dark text-sm w-10/12 min-h-8 max-h-[67px] focus:border-Primary-Grey focus:ring-Primary-Grey active:border-none"
            ></textarea>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;
