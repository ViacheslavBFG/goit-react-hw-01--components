import React from 'react';
import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';

import user from '../assets/user.json';
import data from '../assets/data.json';

export const App = () => {
  return (
    <div className="App">
      <Profile {...user} />

      <Statistics title="Upload Stats" stats={data} />
    </div>
  );
};

export default App;
