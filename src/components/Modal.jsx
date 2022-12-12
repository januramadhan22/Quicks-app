import React, { useEffect, useState } from "react";
import Button from "./CustomButton";
import expand from "../assets/expand_more_24px.png";
import checkBox from "../assets/check_box_outline_blank_24px.png";
import checkBoxDone from "../assets/check_box_24px.png";
import option from "../assets/more_horiz_24px.png";
import calendar from "../assets/schedule_24px.png";
import calendarEnd from "../assets/schedule_blue_24px.png";
import edit from "../assets/edit_dark_24px.png";
import axios from "axios";

function TaskModal() {
  const [dropDown, setDropDown] = useState(false);
  const [listTasks, setListTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [title, setTitle] = useState("");
  // const [date, setDate] = useState("");
  // const [description, setDescription] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        const datas = res.data;
        const filDatas = datas.slice(0, 2);
        setListTasks(filDatas);
        console.log(filDatas);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full h-full flex flex-col">
      <header className="w-full flex justify-between mb-10">
        <div className="flex flex-col items-center justify-center gap-2 absolute z-50 ">
          <button
            onClick={() => {
              setDropDown(!dropDown);
            }}
            className={`ml-8 px-0.5 py-0.5 w-24 h-8 bg-white border border-Primary-Grey rounded-md flex items-center justify-center gap-2 ${
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
          // onClick={addTask}
          type="submit"
          className="w-24 h-8 rounded-md bg-Primary-Blue text-white absolute right-8"
          label="New Task"
        />
      </header>
      {listTasks.map((task) => (
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
              {task.title ? (
                <p
                  className={
                    task.completed === true
                      ? "text-sm text-Primary-grey w-full line-through"
                      : "text-sm text-Primary-Dark w-full"
                  }
                >
                  {task.title}
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
      ))}
    </div>
  );
}

export { TaskModal };
