import React, { useEffect } from "react";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import { useDispatch, useSelector } from "react-redux";
import {
  addTask,
  clearTasks,
} from "../actions/taskActions";

const App = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    if (savedTasks.length > 0 && tasks.length === 0) {
      dispatch(clearTasks());
      savedTasks.forEach((task) => dispatch(addTask(task)));
    }
  }, [dispatch, tasks]);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1>Task manager</h1>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            background: "black",
            borderRadius:"20px",
          }}
        >
          <TaskForm />
          <TaskList />
        </div>
      </div>
    </>
  );
};

export default App;
