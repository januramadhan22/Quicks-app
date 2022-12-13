import React, { useEffect, useState } from "react";
import Button from "./CustomButton";
import expand from "../assets/expand_more_24px.png";
import axios from "axios";
import Form from "./Form";

function TaskModal() {
  const [dropDown, setDropDown] = useState(false);
  const [listTasks, setListTasks] = useState([]);
  const [objSubmit, setObjSubmit] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        const datas = res.data;
        const filDatas = datas.slice(datas.length - 10, datas.length);
        setListTasks(filDatas);
        // console.log(filDatas);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleAddTask = async (e, title, date, completed, description) => {
    setLoading(true);
    e.preventDefault();
    // const body = {
    //   id: parseInt(id),
    //   title: title,
    //   date: date,
    //   description: address,
    //   completed: false,
    //   other: other,
    // };
    axios
      .post("https://jsonplaceholder.typicode.com/todos", {
        body: JSON.stringify({
          title: title,
          date: date,
          completed: completed,
          description: description,
        }),
        headers: { "Content-Type": "applicaion/json; charset=UTF-8" },
      })
      .then((res) => {
        alert("Success add task");
        setListTasks((listTasks) => [...listTasks], res);
        // setTitle("");
        // setDate("");
        // setDescription("");
        // setObjSubmit({});
      })
      .catch((err) => {
        alert("Failed add task");
      })
      .finally(() => {
        fetchData();
        setLoading(false);
      });
  };

  const handleChange = (value, key) => {
    let temp = { ...objSubmit };
    temp[key] = value;
    setObjSubmit(temp);
  };

  const handleDelete = async (id) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((res) => {
        alert("Success delete task");
        setListTasks(
          listTasks.filter((task) => {
            return task.id !== id;
          })
        );
      })
      .catch((err) => {
        alert("Failed delete task");
      })
      .finally(() => {
        fetchData();
        setLoading(false);
      });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full h-full flex flex-col">
      <header className="w-full flex justify-between mb-4 ">
        <div className="flex flex-col items-center justify-center gap-2 ">
          <button
            onClick={() => {
              setDropDown(!dropDown);
            }}
            className={`ml-8 px-0.5 py-0.5 w-24 h-8 bg-white border border-Primary-Grey rounded-md flex items-center justify-center gap-2 ${
              dropDown ? "ml-8" : "ml-8"
            }`}
          >
            <p className="text-sm font-semibold text-Primary-Dark">My Task</p>
            <img src={expand} alt="Expand Menu" />
          </button>
          <ul
            className={`${
              dropDown
                ? "visible absolute w-40 top-12 left-4 bg-white rounded-md  border border-Primary-Grey text-sm text-Primary-Dark"
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
          onClick={handleAddTask}
          type="submit"
          className="w-24 h-8 rounded-md bg-Primary-Blue text-white"
          label="New Task"
        />
      </header>
      <div id="list-task" className="w-full overflow-auto">
        {listTasks.map((task) => (
          <Form
            addTask={handleAddTask}
            key={task.id}
            title={task.title}
            completed={task.completed}
            date={task.date}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}

function InboxModal() {
  const [dropDown, setDropDown] = useState(false);
  const [listTasks, setListTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <div>Loading...</div>;
  }

  return <div className="w-full h-full flex flex-col">asdasdas</div>;
}

export { TaskModal, InboxModal };
