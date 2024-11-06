import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 100%;
  cursor: pointer;
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid #000;
  border-radius: 10px;
  width: 100%;
  height: 50px;
  padding: 15px 13px;
  align-items: center;
  justify-content: center;
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