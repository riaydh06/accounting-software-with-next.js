import { TRANSACTION_CONDITION } from '@constants';

export const addTransaction = (data) => {
  const { date, price, trn, trn1 } = data;

  const row = TRANSACTION_CONDITION.find((item) => item.id == trn1);
  if (row['t1'] == 3) {
    if (trn == 2) row['t1'] = 4;
  }
  if (row['t2'] == 3) {
    if (trn == 2) row['t2'] = 4;
  }
  const t1 = row['t1'];
  const t2 = row['t2'];
  const tt1 = row['tt1'];
  const tt2 = row['tt2'];

  return {
    id: 511,
    date,
    balance: price,
    t1,
    tt1,
    t2,
    tt2,
  };
};
