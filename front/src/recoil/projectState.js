import { atom } from 'recoil';
const initialProjects = [
  {
    id: 1,
    name: '알파 프로젝트',
    description: '알파프로젝트: 군대 합격 예측률 밀리프리뷰 프로젝트',
    team: '팀장: 김철수, 팀원: 홍길동, 이영희',
    tasks: [
      {
        id: 101,
        title: '와이어프레임 제작',
        dueDate: '2024-11-15',
        status: '완료',
      },
      {
        id: 102,
        title: '개발환경 세팅',
        dueDate: '2024-11-18',
        status: '진행 중',
      },
      {
        id: 103,
        title: '메인페이지 개발',
        dueDate: '2024-11-20',
        status: '시작 전',
      },
    ],
  },
  {
    id: 2,
    name: '동아리 프로젝트',
    description:
      '동아리 프로젝트: 옷장 기반 가상피팅 및 코디추천 플랫폼 프로젝트',
    team: '팀장: 찰리, 팀원: 홍길동, 이영희',
    tasks: [
      {
        id: 101,
        title: '와이어프레임 제작',
        dueDate: '2024-11-13',
        status: '완료',
      },
      {
        id: 102,
        title: '개발환경 세팅',
        dueDate: '2024-11-16',
        status: '진행 중',
      },
      {
        id: 103,
        title: '히스토리 페이지 개발',
        dueDate: '2024-11-20',
        status: '시작 전',
      },
    ],
  },
  {
    id: 3,
    name: '공모전 프로젝트',
    description: '공모전 : 미디어 사용자를 대상으로 한 콘텐츠 설문조사',
    team: '팀장: 사민주, 팀원: 홍길동, 이영희',
    tasks: [
      {
        id: 101,
        title: '주제 선정',
        dueDate: '2024-11-3',
        status: '완료',
      },
      {
        id: 102,
        title: '설문지 완성',
        dueDate: '2024-11-5',
        status: '진행 중',
      },
    ],
  },
];

const getInitialProjects = () => {
  const savedProjects = localStorage.getItem('project');
  return savedProjects ? JSON.parse(savedProjects) : initialProjects;
};

export const projectState = atom({
  key: 'projectState',
  default: getInitialProjects(),
});
