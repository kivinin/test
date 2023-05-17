const initialState = {
    tasks: [],
  };
  
  const taskReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TASK':
        return {
          ...state,
          tasks: [...state.tasks, action.payload],
        };
  
      case 'EDIT_TASK':
        return {
          ...state,
          tasks: state.tasks.map((task) =>
            task.id === action.payload.id
              ? { ...task, ...action.payload.updatedTask }
              : task
          ),
        };

        case 'DELETE_TASK':
          return {
            ...state,
            tasks: state.tasks.filter((task) => task.id !== action.payload),
          };

      case 'CLEAR_TASKS':
        return {
          ...state,
          tasks: [],
        };
  
      default:
        return state;
    }
  };
  
  export default taskReducer;
  