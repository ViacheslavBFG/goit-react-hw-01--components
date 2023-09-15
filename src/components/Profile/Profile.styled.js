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
  box-shadow: 3px 3px 5px 2px rgba(0, 0, 0, 0.5);
  border-color: white;
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
  li:hover {
    transform: rotate(360deg);
    color: red;
    font-size: 1.3em;
    transition: font-size 0.5s ease-in;
    
  }
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
