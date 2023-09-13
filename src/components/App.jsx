import React from 'react';
import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { Friends } from 'components/Friends/Friends';

import user from '../assets/user.json';
import data from '../assets/data.json';
import friends from '../assets/friends.json';

export const App = () => {
  return (
    <div className="App">
      <Profile {...user} />
      <Statistics title="Upload Stats" stats={data} />
      <Friends friends={friends} />;
    </div>
  );
};

export default App;
