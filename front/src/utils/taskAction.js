import { REMOVE_TASK, EDIT_TASK, ADD_TASK } from './tasksReucer';

export const deleteTask = (dispatch, taskId, projectId) => {
  dispatch({
    type: REMOVE_TASK,
    payload: taskId,
    projectId,
  });
};

export const editTask = (dispatch, updatedTask, projectId) => {
  dispatch({
    type: EDIT_TASK,
    payload: updatedTask,
    projectId,
  });
};

export const addTask = (dispatch, newTask, projectId) => {
  dispatch({
    type: ADD_TASK,
    payload: newTask,
    projectId,
  });
};
