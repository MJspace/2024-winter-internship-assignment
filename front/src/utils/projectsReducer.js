export const ADD_PROJECT = 'ADD_PROJECT';
export const DELETE_PROJECT = 'DELETE_PROJECT';

const projectsReducer = (state, action) => {
  switch (action.type) {
    case ADD_PROJECT:
      console.log('Reducer ADD_PROJECT called with:', action.payload);
      return [...state, action.payload]; // 기존 상태에 새 프로젝트 추가
    case DELETE_PROJECT:
      return state.filter((project) => project.id !== action.payload); // 삭제
    default:
      return state;
  }
};

export default projectsReducer;
