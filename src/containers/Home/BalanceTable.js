import React from 'react';
import { useSelector } from 'react-redux';

const BalanceTable = () => {
  const grandTotal1 = useSelector((state) => state.transaction.grandTotal1);
  const grandTotal2 = useSelector((state) => state.transaction.grandTotal2);
  const sum = useSelector((state) => state.transaction.sum);

  return (
    <table
      align="center"
      border="1 solid black"
      width="1100"
      height="100"
      color="black"
    >
      <thead>
        <tr>
          <th height="50" colSpan="9" align="center" bgcolor="#00FF7F">
            <h1 align="center"> Balance Sheet</h1>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr bgcolor="#FFCC66" align="center">
          <th>Assets</th>
          <th width="300">Amount</th>
        </tr>
        <tr>
          <td>
            Cash
            <br />
            Account Receivable
            <br />
            Supplies
            <br />
            Office Equipment
          </td>
          <td>
            {sum[0]}
            <br />
            {sum[1]}
            <br />
            {sum[2]}
            <br />
            {sum[3]}
            <br />
          </td>
        </tr>
        <tr bgcolor="#FFE0B1">
          <td>
            <h5>Total Assets</h5>
          </td>
          <td>
            <h3>{grandTotal1}</h3>
          </td>
        </tr>
        <tr>
          <td>
            Notes Payable
            <br />
            Account Payable
            <br />
            Owner Equity
          </td>
          <td>
            {sum[4]}
            <br />
            {sum[5]}
            <br />
            {sum[6]}
            <br />
          </td>
        </tr>
        <tr bgcolor="#FFE0B1">
          <td>
            <h5>Total Liability & Owner Equity</h5>
          </td>
          <td>
            <h3>{grandTotal2}</h3>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default BalanceTable;
