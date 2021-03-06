import { TRANSACTION } from '@actions';
import { transactionData } from '@constants/mockData';
import { addTransaction, calculateSum } from '@utils/transaction';

const initialState = {
  transactionList: [...transactionData],
  ...calculateSum(transactionData),
};

const transactionReducer = (state = initialState, action) => {
  switch (action.type) {
    case TRANSACTION.ADD_TRANSACTION:
      return {
        ...state,
        ...addTransaction(action.data, state),
      };

    default:
      return state;
  }
};

export default transactionReducer;
