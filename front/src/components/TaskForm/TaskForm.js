import { useState, useEffect } from 'react';
import * as f from './style';

const TaskForm = ({ onSave, onCancel, task }) => {
  const [title, setTitle] = useState(task ? task.title : '');
  const [dueDate, setDueDate] = useState(task ? task.dueDate : '');
  const [status, setStatus] = useState(task ? task.status : '');

  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setDueDate(task.dueDate);
      setStatus(task.status);
    }
  }, [task]);

  const handleSave = () => {
    const updatedTask = {
      ...task,
      title,
      dueDate,
      status,
    };
    onSave(updatedTask);
    setTitle('');
    setDueDate('');
    setStatus('시작 전');
  };

  return (
    <f.Form>
      <f.Label>제목</f.Label>
      <f.Input value={title} onChange={(e) => setTitle(e.target.value)} />

      <f.Label>마감일</f.Label>
      <f.Input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />

      <f.Label>상태</f.Label>
      <f.Select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="시작 전">시작 전</option>
        <option value="진행 중">진행 중</option>
        <option value="완료">완료</option>
      </f.Select>

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

export default TaskForm;
