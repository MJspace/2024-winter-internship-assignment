import styled from 'styled-components';
import Home from '../../assets/Home_duotone.svg';

export const Container = styled.div`
  display: flex;
  width: 100%;
  margin: 20px 0px;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const HeaderText = styled.p`
  font-size: 35px;
  font-weight: bold;
  color: black;
`;

export const HomeButton = styled.div`
  width: 50px;
  height: 50px;
  justify-content: center;
  background-image: url(${Home});
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
`;
