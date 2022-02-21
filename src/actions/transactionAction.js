import { TRANSACTION } from '.';

export const addTransactionAction = (data) => ({
  type: TRANSACTION.ADD_TRANSACTION,
  data,
});
