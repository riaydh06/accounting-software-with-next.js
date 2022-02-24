import React from 'react';
import { useSelector } from 'react-redux';

const SummaryTable = () => {
  const transaction = useSelector((state) => state.transaction.transactionList);
  const grandTotal1 = useSelector((state) => state.transaction.grandTotal1);
  const grandTotal2 = useSelector((state) => state.transaction.grandTotal2);
  const sum = useSelector((state) => state.transaction.sum);

  return (
    <div className="main">
      <table
        align="center"
        border="1 solid black"
        width="1100"
        height="150"
        color="black"
        className="mb-5"
      >
        <thead>
          <tr>
            <th height="50" colSpan="9" align="center" bgcolor="#00FF7F">
              <h1 align="center"> Summary Of Transaction</h1>
            </th>
          </tr>

          <tr bgcolor="#FFCC66">
            <th rowSpan="2" width="70">
              Date
            </th>
            <th colSpan="4">Assets</th>
            <th>=</th>
            <th colSpan="2">Liability</th>
            <th rowSpan="2" width="100">
              Revenue & Expence & Owner Equity
            </th>
          </tr>

          <tr bgcolor="#FFE0B1" align="center">
            <td width="100"> Cash </td>
            <td width="100"> Account Receivable </td>
            <td width="100"> Supplies </td>
            <td width="100"> Office equipment </td>
            <td width="10"> = </td>
            <td width="150"> Notes payable </td>
            <td width="150"> Account payable </td>
          </tr>
        </thead>
        <tbody>
          {transaction?.map(({ id, date, balance, t1, tt1, t2, tt2 }) => {
            let arr = ['', '', '', '', '', '', '', ''];
            arr[t1 - 1] = balance * tt1;
            arr[t2 - 1] = balance * tt2;

            return (
              <tr key={id} className="balancerow" align="center">
                <td width="100"> {date} </td>
                <td> {arr[0]}</td>
                <td> {arr[1]}</td>
                <td> {arr[2]}</td>
                <td> {arr[3]}</td>
                <td> = </td>
                <td> {arr[4]}</td>
                <td> {arr[5]}</td>
                <td> {arr[6]}</td>
              </tr>
            );
          })}

          <tr bgcolor="#FFE0B1" align="center">
            <td width="100">Total</td>
            <td> {sum[0]}</td>
            <td> {sum[1]}</td>
            <td> {sum[2]}</td>
            <td> {sum[3]}</td>
            <td> = </td>
            <td> {sum[4]}</td>
            <td> {sum[5]}</td>
            <td> {sum[6]}</td>
          </tr>

          <tr>
            <td>
              <h4>Grand Total</h4>
            </td>

            <td colSpan="4">
              <h4> {grandTotal1}</h4>
            </td>

            <td>=</td>

            <td colSpan="3">
              <h4>{grandTotal2}</h4>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SummaryTable;
