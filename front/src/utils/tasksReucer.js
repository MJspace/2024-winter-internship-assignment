// tasksReducer.js

export const REMOVE_TASK = 'REMOVE_TASK';
export const EDIT_TASK = 'EDIT_TASK';
export const ADD_TASK = 'ADD_TASK';

const tasksReducer = (state, action) => {
  switch (action.type) {
    case REMOVE_TASK: {
      const updatedTasks = state.filter((task) => task.id !== action.payload);
      localStorage.setItem(
        `tasks_${action.projectId}`,
        JSON.stringify(updatedTasks),
      );
      return updatedTasks;
    }

    case EDIT_TASK: {
      const editedTasks = state.map((task) =>
        task.id === action.payload.id ? action.payload : task,
      );
      localStorage.setItem(
        `tasks_${action.projectId}`,
        JSON.stringify(editedTasks),
      );
      return editedTasks;
    }

    case ADD_TASK: {
      const newTasks = [...state, action.payload];
      localStorage.setItem(
        `tasks_${action.projectId}`,
        JSON.stringify(newTasks),
      );
      return newTasks;
    }

    default:
      return state;
  }
};

export default tasksReducer;
