import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./added.css";
import { deleteTask } from "../redux/tasksSlice";

const AddedTask = () => {
  const tasks = useSelector((state) => state.tasks.tasksList);
  const dispatch = useDispatch();
  return (
    <div>
      {tasks.length > 0
        ? tasks.map((task) => (
            <div key={task.id} className="added">
              <h2>{task.task}</h2>
              <button onClick={() => dispatch(deleteTask({ id: task.id }))}>
                delete
              </button>
            </div>
          ))
        : "there are no tasks"}
    </div>
  );
};

export default AddedTask;
