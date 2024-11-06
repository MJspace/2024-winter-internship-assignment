import * as t from './style';

const TaskItem = ({ task, onEdit, onDelete }) => {
  return (
    <t.TaskContainer done={task.status === '완료'}>
      <t.Title>{task.title}</t.Title>
      <t.DueDate>마감일: {task.dueDate}</t.DueDate>
      <t.ButtonContainer>
        <t.Status status={task.status}>{task.status}</t.Status>
        <t.EditButton onClick={() => onEdit(task)}>수정</t.EditButton>
        <t.DeleteButton onClick={() => onDelete(task.id)}>삭제</t.DeleteButton>
      </t.ButtonContainer>
    </t.TaskContainer>
  );
};

export default TaskItem;
