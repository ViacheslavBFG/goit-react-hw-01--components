import styled from 'styled-components';

export const TableSection = styled.table`
  width: 500px;
  font-size: 20px;
  border-radius: 5px;
  text-align: center;
  overflow: hidden;
  color: #242424;
  text-align: center;
  margin: auto;
  border-radius: 70px;
  box-shadow: 3px 3px 5px 2px rgba(0, 0, 0, 0.5);
  margin-top: 30px;
  

  tbody tr:nth-child(even) {
  background-color: teal; 
}

  th {
    background-color: salmon;
    color: teal;
    padding: 15px 0;
    text-transform: uppercase;
  }

 
`;
