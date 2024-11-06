export const REMOVE_TASK = 'REMOVE_TASK';
export const EDIT_TASK = 'EDIT_TASK';
export const ADD_TASK = 'ADD_TASK';

const tasksReducer = (state, action) => {
  switch (action.type) {
    case REMOVE_TASK: {
      const updatedTasks = state.filter((task) => task.id !== action.payload);
      // 로컬스토리지 업데이트
      localStorage.setItem(
        `tasks_${action.projectId}`,
        JSON.stringify(updatedTasks),
      );
      return updatedTasks;
    }

    case EDIT_TASK: {
      const editedTasks = state.map(
        (task) =>
          task.id === action.payload.id
            ? { ...task, ...action.payload } // 수정된 태스크 업데이트
            : task, // 나머지는 그대로 유지
      );
      // 로컬스토리지 업데이트
      localStorage.setItem(
        `tasks_${action.projectId}`,
        JSON.stringify(editedTasks),
      );
      return editedTasks;
    }

    case ADD_TASK: {
      const newTasks = [...state, action.payload];
      // 로컬스토리지 업데이트
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
