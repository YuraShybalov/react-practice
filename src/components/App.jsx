import Wrapper from './Wrapper/wrapper';
import Profile from './Profile/pofile';
import Statistics from './Statistics/statistics';
import FriendList from './FriendList/friendList';
import TransactionHistory from './TransactionHistory/transactionHistory';

import data from 'files/data.json';
import friends from 'files/friends.json';
import transactions from 'files/transactions.json';

export const App = () => {
  return (
    <>
      <Wrapper title={"Task-1 'Social network profile'"}>
        <Profile />
      </Wrapper>
      <Wrapper title={"Task-2 'Statistics section'"}>
        <Statistics title="Upload stats" stats={data} />
      </Wrapper>
      <Wrapper title={"Task-3 'Friend list'"}>
        <FriendList friends={friends} />
      </Wrapper>
      <Wrapper title={"Task-4 'Transaction history'"}>
        <TransactionHistory transactions={transactions} />
      </Wrapper>
    </>
  );
};
