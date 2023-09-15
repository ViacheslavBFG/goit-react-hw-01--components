import React from 'react';

import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendsList } from './Friends-List/FriendsList';
import { TransactionHistory } from './Transaction/TransactionHistory';

import user from '../assets/user.json';
import data from '../assets/data.json';
import friends from '../assets/friends.json';
import transactions from '../assets/transactions.json';

export const App = () => {
  return (
    <div className="App">
      <Profile {...user} />
      <Statistics title="Upload Stats" stats={data} />
      <FriendsList friends={friends} />;
      <TransactionHistory items={transactions} />;
    </div>
  
  );
};

export default App;
