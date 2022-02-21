import { TRANSACTION } from '@actions';

const initialState = {
  transactionList: [
    {
      id: 499,
      date: '15.01.2014',
      balance: 12000,
      t1: 1,
      tt1: 1,
      t2: 7,
      tt2: 1,
    },
    {
      id: 500,
      date: '14.01.2014',
      balance: 5000,
      t1: 1,
      tt1: 1,
      t2: 5,
      tt2: 1,
    },
    { id: 506, date: '15.01.2014', balance: 100, t1: 1, tt1: 1, t2: 7, tt2: 1 },
    { id: 507, date: '15.01.2014', balance: 100, t1: 1, tt1: 1, t2: 5, tt2: 1 },
    {
      id: 508,
      date: '10.01.2014',
      balance: 100,
      t1: 1,
      tt1: -1,
      t2: 3,
      tt2: 1,
    },
    {
      id: 509,
      date: '09-11-2014',
      balance: 3000,
      t1: 1,
      tt1: 1,
      t2: 7,
      tt2: 1,
    },
    {
      id: 510,
      date: '18.01.2014',
      balance: 5000,
      t1: 6,
      tt1: 1,
      t2: 7,
      tt2: -1,
    },
  ],
};

const transactionReducer = (state = initialState, action) => {
  switch (action.type) {
    case TRANSACTION.ADD_TRANSACTION:
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default transactionReducer;
