import React, { useState } from "react";
import expand from "../assets/expand_more_24px.png";
import expandClose from "../assets/expand_more_up_24px.png";
import checkBox from "../assets/check_box_outline_blank_24px.png";
import checkBoxDone from "../assets/check_box_24px.png";
import option from "../assets/more_horiz_24px.png";
import calendar from "../assets/schedule_24px.png";
import calendarEnd from "../assets/schedule_blue_24px.png";
import edit from "../assets/edit_dark_24px.png";

function Form({ addTask, key, title, completed, onDelete }) {
  const [open, setOpen] = useState(true);

  const newTask = (e) => {
    e.preventDefault();
    addTask(e.target.title.value, e.target.completed.value);
    e.target.title.value = "";
    e.target.completed.value = false;
  };

  const handleDelete = () => {
    onDelete(key);
  };

  return (
    <div>
      <form
        onSubmit={newTask}
        key={key}
        className="w-full h-auto pr-1 flex items-start gap-2"
      >
        <label>
          <input type="checkbox" checked={completed} />
        </label>
        <div id="content" className="w-full flex flex-col gap-3">
          <div id="title" className="w-full flex items-start gap-2">
            {title ? (
              <p
                className={
                  completed === true
                    ? "text-sm text-Primary-grey w-full line-through"
                    : "text-sm text-Primary-Dark w-full"
                }
              >
                {title}
              </p>
            ) : (
              <input
                // onChange={changeTask}
                type="text"
                placeholder="Type Task Title"
                className="w-full py-1 px-2 text-sm border border-Primary-Grey rounded-md"
              />
            )}

            <div className="w-full flex justify-end items-center gap-2">
              <p className="text-xs text-Indicator-Red">2 Days Left</p>
              <button onClick={() => setOpen(!open)}>
                <img
                  src={open ? expandClose : expand}
                  alt="Expand"
                  className="w-3 h-2"
                />
              </button>
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="cursor-pointer">
                  <img src={option} alt="Option" className="w-3 h-1" />
                </label>
                <button
                  onClick={handleDelete}
                  tabIndex={0}
                  className="mt-1 dropdown-content border px-2 py-1 shadow bg-base-100 rounded-md text-sm text-Indicator-Red"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
          {open ? (
            <div className="visible">
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
          ) : (
            <div className="hidden">
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
          )}
        </div>
      </form>
    </div>
  );
}

export default Form;
