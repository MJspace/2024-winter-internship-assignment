import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0% 20%;
  margin-bottom: 20px;
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 2px solid #000;
  width: 100%;
  padding: 25px 13px;
  gap: 10px;
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
