import * as p from './style';
import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { projectState } from '../../recoil/projectState';

const ProjectList = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useRecoilState(projectState);

  useEffect(() => {
    localStorage.setItem('projects', JSON.stringify(projects));
  }, [projects]);
  // Recoil 상태에 프로젝트 데이터를 설정
  // React.useEffect(() => {
  //   setProjects(projects);
  // }, [setProjects]);

  const handleClick = (id) => {
    navigate(`/projects/${id}`);
  };

  return (
    <p.Container>
      {projects.map((item) => (
        <p.InnerContainer key={item.id} onClick={() => handleClick(item.id)}>
          <p.Title>{item.name}</p.Title>
        </p.InnerContainer>
      ))}
    </p.Container>
  );
};

export default ProjectList;
