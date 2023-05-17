import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTask, deleteTask } from '../actions/taskActions';

const TaskItem = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [taskName, setTaskName] = useState(task.name);
  const dispatch = useDispatch();

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleUpdate = () => {
    dispatch(editTask(task.id, { name: taskName }));
    setIsEditing(false);
  };

  const handleChange = (e) => {
    setTaskName(e.target.value);
  };

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  return (
    <div key={task.id}>
      {isEditing ? (
        <input type="text" value={taskName} onChange={handleChange} />
      ) : (
        <div style={{margin:"10px"}}>{taskName}</div>
      )}
      <button style={{margin:"5px"}} type="button" className="btn btn-warning" onClick={isEditing ? handleUpdate : handleEdit}>
        {isEditing ? 'Update' : 'Edit'}
      </button>
      <button type="button" className="btn btn-warning" onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default TaskItem;
