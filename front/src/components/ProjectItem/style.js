import styled from 'styled-components';

export const ProjectItemContainer = styled.div`
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-bottom: 16px;
  cursor: pointer;
  background-color: #f9f9f9;

  &:hover {
    background-color: #f1f1f1;
  }
`;

export const Title = styled.h3`
  font-size: 18px;
  margin: 0;
`;

export const Description = styled.p`
  font-size: 14px;
  color: #666;
`;

export const Team = styled.p`
  font-size: 14px;
  color: #333;
  font-weight: bold;
`;

export const DeleteButton = styled.button`
  margin-top: 8px;
  padding: 6px 12px;
  font-size: 14px;
  color: white;
  background-color: #dc3545;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #c82333;
  }
`;
