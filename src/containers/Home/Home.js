import React from 'react';
import SummaryTable from './SummaryTable';
import TransactionTable from './TransactionTable';

const Home = () => {
  return (
    <div>
      <TransactionTable />
      <SummaryTable />
    </div>
  );
};

export default Home;
