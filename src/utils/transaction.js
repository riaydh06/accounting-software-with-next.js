import { TRANSACTION_CONDITION } from '@constants';

export const addTransaction = (data, state) => {
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
  let sum = state.sum;

  sum[t1 - 1] = sum[t1 - 1] + price * tt1;
  sum[t2 - 1] = sum[t2 - 1] + price * tt2;

  return {
    sum,
    grandTotal1: sum[0] + sum[1] + sum[2] + sum[3],
    grandTotal2: sum[4] + sum[5] + sum[6],
    transactionList: [
      ...state.transactionList,
      {
        id: state.transactionList.length,
        date,
        balance: price,
        t1,
        tt1,
        t2,
        tt2,
      },
    ],
  };
};

export const calculateSum = (data) => {
  let sum = [0, 0, 0, 0, 0, 0, 0, 0];

  data.map((item) => {
    let arr = ['', '', '', '', '', '', '', ''];
    arr[item.t1 - 1] = item.balance * item.tt1;
    arr[item.t2 - 1] = item.balance * item.tt2;
    sum[item.t1 - 1] = sum[item.t1 - 1] + arr[item.t1 - 1];
    sum[item.t2 - 1] = sum[item.t2 - 1] + arr[item.t2 - 1];
  });

  return {
    sum,
    grandTotal1: sum[0] + sum[1] + sum[2] + sum[3],
    grandTotal2: sum[4] + sum[5] + sum[6],
  };
};
