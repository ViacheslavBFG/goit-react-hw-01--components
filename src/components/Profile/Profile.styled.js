import styled from 'styled-components';

export const ProfileSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 14px;
  border: 2px solid black;
  width: 500px;
  margin: auto;
  border-radius: 70px;
  margin-top: 20px;
  text-align: center;
`;

export const SectionDescription = styled.div`
  text-align: center;
`;

export const ImgAvatar = styled.img`
  width: 200px;
  height: 200px;
  margin-top: 20px;
`;

export const NameSection = styled.p`
  font-weight: bold;
`;

export const TegLand = styled.p`
  color: grey;
`;

export const UlSection = styled.ul`
  list-style: none;
  display: flex;
  gap: 30px;
  transform: translateX(-20px);
`;

export const LiSection = styled.li`
  display: flex;
  gap: 5px;
  flex-direction: column;
  text-align: center;
`;
export const QuaSection = styled.span`
  font-weight: bold;
`;