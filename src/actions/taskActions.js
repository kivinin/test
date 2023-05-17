let nextTaskId = 1;

export const addTask = (task) => {
  return {
    type: 'ADD_TASK',
    payload: {
      id: nextTaskId++,
      name: task.name,
    },
  };
};

export const editTask = (taskId, updatedTask) => {
  return {
    type: 'EDIT_TASK',
    payload: {
      id: taskId,
      updatedTask,
    },
  };
};

export const deleteTask = taskId => {
  return {
    type: 'DELETE_TASK',
    payload: taskId
  };
};

export const clearTasks = () => {
  return {
    type: 'CLEAR_TASKS',
  };
};
