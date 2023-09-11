import React from 'react';
import { Profile } from 'components/Profile/Profile';
import user from '../assets/user.json';

export const App = () => {
  return (
    <div className="App">
      
      <Profile {...user} />
    </div>
  );
};

export default App;
