import styled from 'styled-components';

export const StyledStatus = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${props => (props.$status === 'true' ? 'green' : 'red')};
`;

export const LiSection = styled.li`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap:10px;
  margin-bottom:30px;
  border:2px solid white;
  box-shadow: 3px 3px 5px 2px rgba(0, 0, 0, 0.5);
  border-radius: 70px;
width:150px;
`;
