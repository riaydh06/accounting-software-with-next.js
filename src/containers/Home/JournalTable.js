import { VARIABLE } from '@constants/';
import React from 'react';
import { useSelector } from 'react-redux';

const JournalTable = () => {
  const transaction = useSelector((state) => state.transaction.transactionList);
  const grandTotal1 = useSelector((state) => state.transaction.grandTotal1);
  const grandTotal2 = useSelector((state) => state.transaction.grandTotal2);
  return (
    <table
      align="center"
      border="1 solid black"
      width="1100"
      height="100"
      color="black"
      className="mb-5"
    >
      <thead>
        <tr>
          <th height="50" colSpan="5" align="center" bgcolor="#00FF7F">
            <h1 align="center"> Journal Table</h1>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr bgcolor="#FFCC66" align="center">
          <th height="10px" width="90">
            Date
          </th>
          <th height="10px" width="487">
            Particular
          </th>
          <th width="12">=</th>
          <th height="10px">Debit</th>
          <th height="10px">Credit</th>
        </tr>

        {transaction.map((item) => {
          return (
            <tr className="balancerow" align="center">
              <td height="10px" width="100">
                {item.date}
              </td>
              <td height="10px" width="487">
                <p>{VARIABLE[item.t1 - 1].name} Dr</p>
                <p>{VARIABLE[item.t2 - 1].name} Cr</p>
              </td>
              <td width="12">=</td>
              <td height="10px">
                <p>{item.balance}</p>
                <p>0</p>
              </td>
              <td height="10px">
                <p>0</p>
                <p>{item.balance}</p>
              </td>
            </tr>
          );
        })}
        <tr bgcolor="#FFE0B1" align="center">
          <td height="10px" width="100">
            Total
          </td>
          <td height="10px" width="487"></td>
          <td width="12">=</td>
          <td height="10px">
            <p>{grandTotal1}</p>
          </td>
          <td height="10px">
            <p>{grandTotal2}</p>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default JournalTable;
