import { ADD_PROJECT, DELETE_PROJECT } from './projectsReducer';

export const addProject = (dispatch, newProject) => {
  dispatch({
    type: ADD_PROJECT,
    payload: newProject,
  });
};

export const deleteProject = (dispatch, projectId) => {
  dispatch({
    type: DELETE_PROJECT,
    payload: projectId,
  });
};
