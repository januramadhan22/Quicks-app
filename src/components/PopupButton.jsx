import React, { useState } from "react";
import Button from "./CustomButton";
import flash from "../assets/flash.png";
import task from "../assets/chrome_reader_mode_24px.png";
import taskWhite from "../assets/chrome_reader_mode_white_24px.png";
import message from "../assets/question_answer_24px.png";
import messageWhite from "../assets/question_answer_white_24px.png";
import { TaskModal, InboxModal } from "../components/Modal";

function PopupButton({ datas, newTask, changeTask, deleteTask }) {
  const [popUp, setPopUp] = useState(false);
  const [inboxActive, setInboxActive] = useState(false);
  const [taskActive, setTaskActive] = useState(false);

  return (
    <div className="overflow-hidden">
      <button
        id="btn-popup"
        onClick={() => {
          setPopUp(!popUp);
          setInboxActive(false);
          setTaskActive(false);
        }}
        className={` ${
          inboxActive + taskActive
            ? "bg-Primary-Grey absolute bottom-7 right-9 z-10 w-16 h-16 flex items-center justify-center rounded-full"
            : "bg-Primary-Blue absolute bottom-7 right-8 z-10 w-16 h-16 flex items-center justify-center rounded-full"
        } `}
      >
        <img src={flash} alt="Flash" />
      </button>
      <div id="popup-menu">
        <div
          className={`absolute bottom-8 right-7 flex flex-col items-center gap-1 ${
            popUp ? "inbox-open" : "inbox-close"
          } ${inboxActive ? "inbox-active" : "inbox-inactive"} `}
        >
          <div
            id="inbox-modal"
            className={`${
              inboxActive
                ? "w-[434px] h-[437px] bg-white rounded-md absolute right-0 bottom-[65px] border border-Primary-Grey inbox-modal-active"
                : "w-[300px] h-[300px] bg-white rounded-md absolute right-0 bottom-[65px] border border-Primary-Grey inbox-modal-inactive"
            }`}
          >
            <InboxModal />
          </div>
          <p
            className={`font-semibold text-base text-Primary-White ${
              inboxActive
                ? "hidden transition ease-out duration-300"
                : "visible transition ease-out duration-300"
            }`}
          >
            Inbox
          </p>
          <button
            onClick={() => {
              setInboxActive(!inboxActive);
              setTaskActive(false);
            }}
            id="btn-inbox"
            className={`w-14 h-14 flex items-center justify-center bg-Primary-White rounded-full ${
              inboxActive ? "btn-active bg-Indicator-Purple" : "btn-inactive"
            }`}
          >
            <img
              src={inboxActive ? messageWhite : message}
              alt="Inbox"
              className="w-6"
            />
          </button>
        </div>
        <div
          className={`absolute bottom-8 right-9 flex flex-col items-end gap-1 ${
            popUp ? "task-open" : "task-close"
          } ${inboxActive ? "-right-10" : "right-6"} ${
            taskActive ? "task-active" : "task-inactive"
          }`}
        >
          <div
            id="task-modal"
            className={`${
              taskActive
                ? "w-[434px] h-[437px] bg-white rounded-md absolute right-0 bottom-[65px] border border-Primary-Grey task-modal-active"
                : "w-[300px] h-[300px] bg-white rounded-md absolute right-0 bottom-[65px] border border-Primary-Grey task-modal-inactive"
            }`}
          >
            <TaskModal
              datas={datas}
              addTask={newTask}
              change={changeTask}
              delete={deleteTask}
            />
          </div>
          <div className="flex flex-col items-center gap-1">
            <p
              className={`font-semibold text-base text-Primary-White ${
                taskActive
                  ? "hidden transition ease-out duration-300"
                  : "visible transition ease-out duration-300"
              }`}
            >
              Task
            </p>
            <button
              onClick={() => {
                setTaskActive(!taskActive);
                setInboxActive(false);
              }}
              id="btn-task"
              className={`w-14 h-14 flex items-center justify-center bg-Primary-White rounded-full ${
                taskActive ? "btn-active bg-Indicator-Orange" : "btn-inactive"
              }`}
            >
              <img
                src={taskActive ? taskWhite : task}
                alt="Task"
                className="w-6"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopupButton;
