import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../redux/tasksSlice";
import "./Tasks.css";

const Tasks = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasksList);

  return (
    <div>
      <div className="tasks">
        <h1>My Tasks</h1>
        <p>What do you want to get done today?</p>

        <input
          value={task}
          type="text"
          placeholder="what do you want to do"
          onChange={(e) => setTask(e.target.value)}
        />
        <button
          onClick={() => {
            if (task !== "") {
              dispatch(addTask({ id: tasks.length + 1, task: task }));
              setTask("");
            } else {
              window.prompt("insert your task");
            }
          }}
        >
          Add Task
        </button>
      </div>
    </div>
  );
};

export default Tasks;
