import { useParams } from 'react-router-dom';
import Header from '../../components/Header/Header';
import ProjectDetail from '../../components/ProjectDetail/ProjectDetail';
import * as d from './style';
import { useRecoilValue } from 'recoil';
import { projectState } from '../../recoil/projectState';

const ProjectDetailPage = () => {
  const { id } = useParams();
  const projects = useRecoilValue(projectState);
  const projectData = projects.find((p) => p.id === parseInt(id));

  // id를 사용해 프로젝트 데이터를 조회하여 상세 정보를 렌더링
  return (
    <d.Container>
      <Header text="프로젝트 상세 정보" />
      <ProjectDetail projectData={projectData} />
    </d.Container>
  );
};

export default ProjectDetailPage;
