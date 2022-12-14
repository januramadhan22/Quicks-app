import React, { useState } from "react";
import expand from "../assets/expand_more_24px.png";
import expandClose from "../assets/expand_more_up_24px.png";
import checkBox from "../assets/check_box_outline_blank_24px.png";
import checkBoxDone from "../assets/check_box_24px.png";
import option from "../assets/more_horiz_24px.png";
import calendar from "../assets/schedule_24px.png";
import calendarEnd from "../assets/schedule_blue_24px.png";
import edit from "../assets/edit_dark_24px.png";
import userWhite from "../assets/person_white_24px.png";
import userGrey from "../assets/person_24px.png";
import backArrow from "../assets/arrow_back_24px.png";
import close from "../assets/close_24px.png";

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

function Inbox() {
  const [openChat, setOpenChat] = useState(false);

  const handleBack = () => {
    setOpenChat(false);
  };

  return (
    <>
      {openChat ? (
        <Chat back={handleBack} />
      ) : (
        <div
          onClick={() => {
            setOpenChat(!openChat);
          }}
          className="w-full py-5 flex items-start gap-4 border-b border-Primary-Dark cursor-pointer"
        >
          <div id="avatar" className="mt-2">
            <div className="w-8 h-8 box-border rounded-full bg-Primary-Blue flex items-center justify-center">
              <img src={userWhite} alt="User" className="w-4" />
            </div>
          </div>
          <div id="field" className="w-full">
            <div id="title" className="w-full flex items-baseline gap-4">
              <p className="text-base font-semibold text-Primary-Blue">
                109220-Naturalization
              </p>
              <p className="min-w-fit text-sm text-Primary-Grey">
                01/01/2021 19.10
              </p>
            </div>
            <div id="message">
              <p className="text-sm font-semibold text-Primary-Dark">
                Cameron Phillips :
              </p>
              <p className="max-w-fit text-sm text-Primary-Grey">
                Please check this out!
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function Chat({ back }) {
  return (
    <div className="overflow-y-auto">
      <header className="w-full flex items-center gap-3 px-3 py-2 border-b shadow-sm rounded-t-md absolute top-0 left-0 z-50 bg-white">
        <button onClick={back} id="back-btn">
          <img src={backArrow} alt="Back" className="w-4 brightness-0" />
        </button>
        <div className="w-full flex flex-col">
          <p id="participant-name" className="font-semibold text-Primary-Blue">
            Handoko, Rojali
          </p>
          <p id="total-participants" className="text-xs text-Primary-Grey">
            2 Participants
          </p>
        </div>
        <button onClick={back} id="close-btn">
          <img src={close} alt="Close" className="w-3 brightness-0" />
        </button>
      </header>
      <div className="w-full mt-6">
        <div className="w-full flex items-center gap-4">
          <span className="w-full h-0.5 bg-Chats-Light-Orange"></span>
          <p className="w-full text-center text-Chats-Solid-Orange">
            New Message
          </p>
          <span className="w-full h-0.5 bg-Chats-Light-Orange"></span>
        </div>
        <div className="w-full flex justify-end">
          <div className="max-w-xs flex flex-col items-end">
            <p className="text-sm font-semibold text-Chats-Solid-Purple">You</p>
            <div className="flex items-start gap-2">
              <button className="mt-2">
                <img src={option} alt="Option" className="w-[15px]" />
              </button>
              <div className="p-2 bg-Chats-Light-Purple rounded-md text-sm text-Primary-Dark">
                <p>Selamat Malam!!!</p>
                <p>19.32</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-start">
          <div className="max-w-xs flex flex-col items-start">
            <p className="text-sm font-semibold text-Chats-Solid-Green">You</p>
            <div className="flex items-start gap-2">
              <div className="p-2 bg-Chats-Light-Green rounded-md text-sm text-Primary-Dark">
                <p>Mantap" sam, solo player tapi bisa buat kek gitu</p>
                <p>19.35</p>
              </div>
              <button className="mt-2">
                <img src={option} alt="Option" className="w-[15px]" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <form className="absolute w-full bottom-0 left-0 flex gap-2 p-3">
        <input
          type="text"
          placeholder="Type a new message"
          className="w-full border px-3 py-1 rounded-md text-sm text-Primary-Dark focus:outline-Primary-Grey"
        />
        <button
          id="Send-btn"
          className="bg-Primary-Blue px-3 py-1 text-sm font-semibold text-white rounded-md"
        >
          Send
        </button>
      </form>
    </div>
  );
}

export { Form, Inbox, Chat };
