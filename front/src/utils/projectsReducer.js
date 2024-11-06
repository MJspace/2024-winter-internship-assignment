export const ADD_PROJECT = 'ADD_PROJECT';
export const DELETE_PROJECT = 'DELETE_PROJECT';

const projectsReducer = (state, action) => {
  switch (action.type) {
    case ADD_PROJECT:
      return [...state, action.payload]; // 기존 상태에 새로운 프로젝트 추가
    case DELETE_PROJECT:
      return state.filter((project) => project.id !== action.payload); // 프로젝트 삭제
    default:
      return state;
  }
};

export default projectsReducer;
