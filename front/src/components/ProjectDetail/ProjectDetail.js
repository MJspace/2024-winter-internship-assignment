import { useReducer, useState, useEffect } from 'react';
import * as p from './style';
import TaskItem from '../TaskItem/TaskItem';
import TaskForm from '../TaskForm/TaskForm';
import tasksReducer from '../../utils/tasksReucer';
import { deleteTask, editTask, addTask } from '../../utils/taskAction';

const ProjectDetail = ({ projectData }) => {
  const initialTasks =
    JSON.parse(localStorage.getItem(`tasks_${projectData.id}`)) ||
    projectData.tasks;

  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);
  const [sortedTasks, setSortedTasks] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [isAdding, setIsAdding] = useState(false);

  const sortTasks = () => {
    const sorted = [...tasks].sort((a, b) => {
      if (a.status === '완료' && b.status !== '완료') return 1;
      if (a.status !== '완료' && b.status === '완료') return -1;
      return new Date(a.dueDate) - new Date(b.dueDate);
    });
    setSortedTasks(sorted);
  };

  useEffect(() => {
    // 상태가 업데이트될 때마다 정렬 실행
    sortTasks();
    localStorage.setItem(`tasks_${projectData.id}`, JSON.stringify(tasks));
  }, [tasks, projectData.id]);

  const handleDeleteTask = (taskId) =>
    deleteTask(dispatch, taskId, projectData.id);

  const handleEditTask = (task) => {
    setIsEditing(true);
    setSelectedTask(task);
  };

  const handleSaveTask = (updatedTask) => {
    if (isEditing) {
      editTask(dispatch, updatedTask, projectData.id);
      setIsEditing(false);
      setSelectedTask(null);
    } else {
      addTask(dispatch, updatedTask, projectData.id);
      setIsAdding(false);
    }
  };

  return (
    <p.Container>
      <p.InnerContainer>
        <p.Title>{projectData.name}</p.Title>
        <p.SpecialtyText>{projectData.description}</p.SpecialtyText>
        <p.SpecialtyText>{projectData.team}</p.SpecialtyText>
      </p.InnerContainer>
      <p.TaskContainer>
        {sortedTasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onEdit={() => handleEditTask(task)}
            onDelete={() => handleDeleteTask(task.id)}
          />
        ))}
      </p.TaskContainer>
      {isAdding || isEditing ? (
        <TaskForm
          onSave={handleSaveTask}
          onCancel={() => {
            setIsAdding(false);
            setIsEditing(false);
            setSelectedTask(null);
          }}
          task={selectedTask}
        />
      ) : (
        <p.Button onClick={() => setIsAdding(true)}>➕ 새 테스크 추가</p.Button>
      )}
    </p.Container>
  );
};

export default ProjectDetail;
