import { useReducer, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import projectsReducer from '../../utils/projectsReducer';
import { addProject, deleteProject } from '../../utils/projectActions';
import ProjectForm from '../ProjectForm/ProjectForm';
import ProjectItem from '../ProjectItem/ProjectItem';
import * as p from './style';

const ProjectList = () => {
  const initialProjects = JSON.parse(localStorage.getItem('projects')) || [];
  const [projects, dispatch] = useReducer(projectsReducer, initialProjects);
  const [isAdding, setIsAdding] = useState(false);
  const [recentProject, setRecentProject] = useState(null); // 최근 추가된 프로젝트 저장
  const navigate = useNavigate();

  const handleAddProject = (newProject) => {
    addProject(dispatch, newProject);
    setRecentProject(newProject); // 최근 추가된 프로젝트 저장
    setIsAdding(false);
  };

  const handleDeleteProject = (projectId) => {
    deleteProject(dispatch, projectId);
  };

  // 상태 변경 후 로컬스토리지 업데이트
  useEffect(() => {
    localStorage.setItem('projects', JSON.stringify(projects));
  }, [projects]);

  // 최근 추가된 프로젝트로 이동
  useEffect(() => {
    if (recentProject) {
      navigate(`/projects/${recentProject.id}`, { state: recentProject });
      setRecentProject(null);
    }
  }, [projects, recentProject]);

  return (
    <p.Container>
      <p.Title>프로젝트 목록</p.Title>

      <p.ProjectContainer>
        {projects.map((project) => (
          <ProjectItem
            key={project.id}
            project={project}
            onDelete={() => handleDeleteProject(project.id)}
          />
        ))}
      </p.ProjectContainer>

      {isAdding ? (
        <ProjectForm
          onSave={handleAddProject}
          onCancel={() => setIsAdding(false)}
        />
      ) : (
        <p.Button onClick={() => setIsAdding(true)}>
          ➕ 새 프로젝트 추가
        </p.Button>
      )}
    </p.Container>
  );
};

export default ProjectList;
