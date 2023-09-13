import React from 'react';
import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendsList } from 'components/Friends-List/FriendsList';
import { TransactionHistory } from 'components/Transaction/TransactionHistory';



import user from '../assets/user.json';
import data from '../assets/data.json';
import friends from '../assets/friends.json';
import transactions from '../assets/transactions.json'

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
