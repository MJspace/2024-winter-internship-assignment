// import { useParams } from 'react-router-dom';
// import Header from '../../components/Header/Header';
// import ProjectDetail from '../../components/ProjectDetail/ProjectDetail';
// import * as d from './style';
// import { useRecoilValue } from 'recoil';
// import { projectState } from '../../recoil/projectState';

// const ProjectDetailPage = () => {
//   const { id } = useParams();
//   const projects = useRecoilValue(projectState);
//   const projectData = projects.find((p) => p.id === parseInt(id));

//   // id를 사용해 프로젝트 데이터를 조회하여 상세 정보를 렌더링
//   return (
//     <d.Container>
//       <Header text="프로젝트 상세 정보" />
//       <ProjectDetail projectData={projectData} />
//     </d.Container>
//   );
// };

// export default ProjectDetailPage;

import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import Header from '../../components/Header/Header';
import ProjectDetail from '../../components/ProjectDetail/ProjectDetail';
import * as d from './style';

const ProjectDetailPage = () => {
  const { state } = useLocation(); // 라우터를 통해 전달된 상태 가져오기
  const { id } = useParams(); // URL에서 id 가져오기

  // 기본값으로 빈 프로젝트 데이터 설정
  const projectData = state || {
    id,
    name: '알 수 없는 프로젝트',
    description: '상세 정보를 불러올 수 없습니다.',
    team: '',
    tasks: [],
  };

  return (
    <d.Container>
      <Header text="프로젝트 상세 정보" />
      <ProjectDetail projectData={projectData} />
    </d.Container>
  );
};

export default ProjectDetailPage;
