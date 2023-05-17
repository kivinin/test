import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTask,
  editTask,
  deleteTask,
  clearTasks,
} from "../actions/taskActions";

const TaskForm = () => {
  const [taskName, setTaskName] = useState("");
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (savedTasks) {
      dispatch(clearTasks());
      savedTasks.forEach((task) => dispatch(addTask(task)));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = () => {
    if (taskName.trim() !== "") {
      dispatch(addTask({ name: taskName }));
      setTaskName("");
    }
  };

  return (
    <form>
      <div className="form-group">
        <div style={{display:"flex"}}>
          <input
            className="form-control"
            type="text"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            placeholder="add task"
            style={{
              margin: "10px",
            }}
          />
          <button
            type="button"
            className="btn btn-warning"
            onClick={handleAddTask}
            style={{borderRadius:" 0 20px 0 20px"}}
          >
            Add task
          </button>
        </div>
      </div>
    </form>
  );
};

export default TaskForm;
