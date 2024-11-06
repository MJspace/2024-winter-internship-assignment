import Header from '../../components/Header/Header';
import ProjectList from '../../components/ProjectList/ProjectList';
import * as m from './style';

const MainPage = () => {
  return (
    <m.Container>
      <Header text="프로젝트 관리 대시보드" />
      <ProjectList />
    </m.Container>
  );
};

export default MainPage;
