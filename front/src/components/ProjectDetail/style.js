import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 2px solid #000;
  width: 100%;
  height: 50px;
  padding: 25px 13px;
  gap: 5px;
`;

export const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: black;
`;

export const SpecialtyText = styled.div`
  font-size: 15px;
  line-height: 1.4; /* 줄 간격을 조절하여 가독성 향상 */
  word-break: break-word;
  width: 100%; /* 원하는 고정 너비 설정 */
  white-space: normal; /* 너비를 벗어나면 줄바꿈 */
`;

export const TaskContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid #000;
  border-radius: 10px;
  justify-content: center;
  width: 100%;
  padding: 25px 13px;
  gap: 10px;
`;

export const Button = styled.div`
  display: flex;
  border: 2px solid #000;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 25px 13px;
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
`;
