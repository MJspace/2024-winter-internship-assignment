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
  const navigate = useNavigate();

  const handleAddProject = (newProject) => {
    addProject(dispatch, newProject);
    setIsAdding(false);

    navigate(`/projects/${newProject.id}`, { state: newProject });
  };

  const handleDeleteProject = (projectId) => {
    deleteProject(dispatch, projectId);
  };

  useEffect(() => {
    localStorage.setItem('projects', JSON.stringify(projects));
  }, [projects]);

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
