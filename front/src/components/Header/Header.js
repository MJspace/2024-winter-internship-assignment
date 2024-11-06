import { useLocation } from 'react-router-dom';
import * as h from './style';
const Header = ({ text }) => {
  //Logo Click Event
  const navigate = useLocation();
  const onClick = () => {
    if (navigate.pathname === '/') {
      window.location.reload(); //홈 새로고침
    } else {
      window.location.href = '/'; // 홈으로 이동
    }
  };
  return (
    <h.Container>
      <h.HeaderText>{text}</h.HeaderText>
      <h.HomeButton onClick={onClick} />
    </h.Container>
  );
};

export default Header;
