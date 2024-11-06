import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as p from './style';

const ProjectItem = ({ project, onDelete }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/projects/${project.id}`, { state: project });
  };

  return (
    <p.ProjectItemContainer>
      <p.Title onClick={handleNavigate}>{project.name}</p.Title>
      <p.Description>{project.description}</p.Description>
      <p.Team>{project.team}</p.Team>
      <p.DeleteButton onClick={onDelete}>삭제</p.DeleteButton>
    </p.ProjectItemContainer>
  );
};

export default ProjectItem;
