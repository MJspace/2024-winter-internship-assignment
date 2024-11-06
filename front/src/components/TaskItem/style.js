import styled, { css } from 'styled-components';

export const TaskContainer = styled.li`
  display: grid;
  grid-template-columns: 2fr 1fr; /* 첫 번째 열은 타이틀과 마감일 */
  grid-template-rows: auto auto; /* 두 번째 행에 버튼 컨테이너 배치 */
  gap: 10px;
  align-items: center;
  padding: 15px;
  margin: 8px 0;
  border: 1px solid #000;
  border-radius: 8px;
  background-color: #f8f8f8;

  ${({ done }) =>
    done &&
    css`
      opacity: 0.6;
      text-decoration: line-through;
      color: #888;
    `}
`;

export const Title = styled.h3`
  font-weight: bold;
  margin: 0;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
`;

export const DueDate = styled.span`
  font-size: 0.9rem;
  color: #888;
  grid-column: 1 / 2;
  grid-row: 2 / 3;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 10px;
  grid-column: 2 / 3;
  grid-row: 2 / 3;
`;

export const Status = styled.span`
  background-color: ${({ status }) => {
    if (status === '진행 중') return 'green';
    if (status === '시작 전') return 'yellow';
    if (status === '완료') return '#e0e0e0';
  }};
  padding: 5px 10px;
  border-radius: 4px;
  text-align: center;
`;

export const EditButton = styled.button`
  /* width: 20px; */
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
  background-color: #fff;
`;

export const DeleteButton = styled.button`
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
  background-color: #fff;
  color: red;
`;
