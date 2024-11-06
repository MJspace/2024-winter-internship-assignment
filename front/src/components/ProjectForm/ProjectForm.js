// ProjectForm.js
import React, { useState } from 'react';
import * as f from './style';

const ProjectForm = ({ onSave, onCancel }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [team, setTeam] = useState('');

  const handleSave = () => {
    const newProject = {
      id: Date.now(), // 자동 생성된 고유 ID
      name,
      description,
      team,
      tasks: [], // 초기에는 빈 태스크 리스트
    };
    onSave(newProject);
    setName('');
    setDescription('');
    setTeam('');
  };

  return (
    <f.Form>
      <f.Label>프로젝트 이름</f.Label>
      <f.Input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="프로젝트 이름 입력"
      />

      <f.Label>프로젝트 설명</f.Label>
      <f.TextArea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="프로젝트 설명 입력"
      />

      <f.Label>팀 구성</f.Label>
      <f.Input
        value={team}
        onChange={(e) => setTeam(e.target.value)}
        placeholder="팀 구성 입력 (예: 팀장: 김철수, 팀원: 홍길동, 이영희)"
      />

      <f.ButtonGroup>
        <f.Button className="save" onClick={handleSave}>
          저장
        </f.Button>
        <f.Button className="cancel" onClick={onCancel}>
          취소
        </f.Button>
      </f.ButtonGroup>
    </f.Form>
  );
};

export default ProjectForm;
