import { useEffect, useState } from "react";

import Container from "../components/Container";
import Frame from "../components/Frame";
import Modal from "../components/Modal";
import PopupButton from "../components/PopupButton";
import "../styles/index.css";

function App() {
  // useEffect(() => {
  //   const getTasks = JSON.parse(localStorage.getItem("tasks"));

  //   if (getTasks) {
  //     setListTasks(getTasks);
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("tasks", JSON.stringify(listTasks));
  // }, [listTasks]);

  // const handleAddTask = (e) => {
  //   e.preventDefault();

  //   setListTasks([
  //     {
  //       id: listTasks.length + 1,
  //       title: title,
  //       date: date,
  //       description: description,
  //       done: false,
  //     },
  //     ...listTasks,
  //   ]);
  //   setTitle("");
  //   setDate("");
  //   setDescription("");
  //   console.log(listTasks);
  // };

  // const handleChange = (e) => {
  //   setTitle(e.target.value);
  //   setDate(e.target.value);
  //   setDescription(e.target.value);
  // };

  // const handleDelete = (taskId) => {
  // if (window.confirm("Are you sure?")) {
  //   const deleteTask = listTasks.filter((item) => item.id !== taskId);

  //   setListTasks(deleteTask);
  // }
  // };

  return (
    <>
      <Container>
        <Frame>
          <PopupButton
          // datas={listTasks}
          // newTask={handleAddTask}
          // changeTask={handleChange}
          // deleteTask={handleDelete}
          />
        </Frame>
      </Container>
    </>
  );
}

export default App;
