import React from 'react';
import BalanceTable from './BalanceTable';
import JournalTable from './JournalTable';
import SummaryTable from './SummaryTable';
import TransactionTable from './TransactionTable';

const Home = () => {
  return (
    <div>
      <TransactionTable />
      <SummaryTable />
      <BalanceTable />
      <JournalTable />
    </div>
  );
};

export default Home;
